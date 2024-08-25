import { PrivateRoute, PublicRoute } from "./route-types";
import { AdminHome } from "../pages/admin";
import { ClientsList } from "../pages/admin/clients";
import { Transactions } from "../pages/admin/transactions";
import { Subscriptions } from "../pages/admin/subscription";
import { Login } from "../pages/auth/login";
import { Settings } from "../pages/client/settings";
import { ClientWallet } from "../pages/client/wallet";
import { Events } from "../pages/client/events";
import { ClientHome } from "../pages/client";

type RouteProps = {
  path: string;
  element: React.ReactNode | null;
};

export const routes: RouteProps[] = [
  // The AUTH routes starts
  { path: "/admin-dashboard", element: <AdminHome /> },
  { path: "/client-dashboard", element: <ClientHome /> },
  { path: "/clients-list", element: <ClientsList /> },
  { path: "/transactions", element: <Transactions /> },
  { path: "/subscriptions", element: <Subscriptions /> },
  { path: "/client-wallet", element: <ClientWallet /> },
  { path: "/settings", element: <Settings /> },
  { path: "/events", element: <Events /> },
];
