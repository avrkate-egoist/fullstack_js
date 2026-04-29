import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function ActiveLastBreadcrumb() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          href="/"
          sx={{ color: "#fff", display: "flex", alignItems: "center" }}
        >
          <HomeIcon sx={{ mr: 0.5, color: "#fff" }} fontSize="inherit" />
          MUI
        </Link>
        <Link
          underline="hover"
          href="/material-ui/getting-started/installation/"
          sx={{ color: "#fff" }}
        >
          Core
        </Link>
        <Link
          underline="hover"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
          sx={{ color: "#fff", display: "flex", alignItems: "center" }}
        >
          <ExpandMoreIcon sx={{ mr: 0.5, color: "#fff" }} fontSize="inherit" />
          Breadcrumbs
        </Link>
      </Breadcrumbs>
    </div>
  );
}
