import { isProductionMode } from "./config.js";
import { getUserGreeting } from "./greeting.js";

console.log("Production mode:", isProductionMode());

console.log("Greeting Check", getUserGreeting());
