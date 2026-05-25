export function isProductionMode() {
  const env = process.env.NODE_ENV;
  console.log(`NODE_ENV: ${env}`);
  return env === "production";
}
