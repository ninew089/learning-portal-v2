import { Suspense, lazy, ElementType } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// guards
import useAuth from "../hooks/useAuth";
// layouts
import MainLayout from "../layouts/main";
import Dashboard from "../layouts/dashboard";
// components
import LoadingScreen from "../components/LoadingScreen";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isAuthenticated } = useAuth();

  const isDashboard = pathname.includes("/dashboard") && isAuthenticated;

  return (
    <Suspense fallback={<LoadingScreen isDashboard={isDashboard} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { element: <HomePage />, index: true },
        // { path: "about-us", element: <About /> },
        // { path: "contact-us", element: <Contact /> },
        // { path: "faqs", element: <Faqs /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// IMPORT COMPONENTS

// Main
const HomePage = Loadable(lazy(() => import("../pages/Home")));
