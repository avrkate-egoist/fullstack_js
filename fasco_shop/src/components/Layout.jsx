import { Outlet, ScrollRestoration } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import RegistrationModal from "./RegistrationModal";

export default function Layout() {
  return (
    <>
      <ScrollRestoration />

      <Header />
      <Outlet />
      <Footer />

      <FloatingActions />
      <RegistrationModal />
    </>
  );
}
