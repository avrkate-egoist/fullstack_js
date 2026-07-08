import express from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

dotenv.config();

const app = express();
const PORT = 3000;

const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error("SECRET_KEY is missing");
}

const users = [];

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = users.find((user) => user.username === username);

      if (!user) {
        return done(null, false, { message: "user not found" });
      }

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return done(null, false, { message: "invalid password" });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  const user = users.find((user) => user.username === username);
  if (!user) {
    return done(new Error("user not found"), false);
  }
  done(null, user);
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).send("Error from middleware: Not authenticated");
}

const renderPage = (title, content) => `
<!DOCTYPE html>
<html><head><title>${title}</title></head><body>
<h1>${title}</h1>
${content}
</body></html>`;

app.get("/", (req, res) => {
  res.send(
    renderPage(
      "Home",
      `
    <p><a href="/register">Register</a></p>
    <p><a href="/login">Login</a></p>
    <p><a href="/protected">Protected Page</a></p>
  `,
    ),
  );
});

app.get("/register", (req, res) => {
  res.send(
    renderPage(
      "Register",
      `
    <form method="post" action="/register">
      <input name="username" required placeholder="Username" />
      <input name="password" type="password" required placeholder="Password" />
      <button>Register</button>
    </form>
  `,
    ),
  );
});

app.get("/login", (req, res) => {
  res.send(
    renderPage(
      "Login",
      `
    <form method="post" action="/login">
      <input name="username" required placeholder="Username" />
      <input name="password" type="password" required placeholder="Password" />
      <button>Login</button>
    </form>
  `,
    ),
  );
});

app.get("/protected", isAuthenticated, (req, res) => {
  res.send(
    renderPage(
      "Protected Page",
      `
    <p>Welcome, ${req.user.username}!</p>
    <p>
      <pre>
        ${JSON.stringify(users, null, 4)}
      </pre>
    </p>
    <p><a href="/logout">Logout</a></p>
  `,
    ),
  );
});

app.get("/profile", isAuthenticated, (req, res) => {
  res.send(renderPage("Profile", `<p>Welcome, ${req.user.username}!</p>`));
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  if (users.find((u) => u.username === username)) {
    return res.status(400).send("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  users.push({ username, password: hash });
  res.send("User registered successfully");
});

app.post(
  "/login",
  passport.authenticate("local", { failWithError: true }),
  (req, res) => {
    res.send("<h1>login successful</h1>");
  },
);

app.get("/logout", isAuthenticated, (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.send("<h1>logout successful</h1>");
  });
});

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);
  const errorMessage = err.message || "something went wrong";
  res.status(err.status || 500).send(errorMessage);
});

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
