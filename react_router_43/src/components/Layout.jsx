import { Outlet } from "react-router";
import NavigationMenu from "./NavigationMenu";
import NavagationFooter from "./NavagationFooter";

export default function Layout() {
  return (
    <>
      <NavigationMenu />
      <Outlet />
      <NavagationFooter />
    </>
  );
}
