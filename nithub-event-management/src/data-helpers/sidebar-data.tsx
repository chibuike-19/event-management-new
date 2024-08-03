import { ClientIconInactive, EventsIcon, HomeIcon, LogoutIcon, Settings, SubscriptionsIcon, TransactionsIcons } from "../assets/svg/sidebar/svg-export";


export const adminData = [
  { label: "Home", icon: <HomeIcon />, value: "home", link: "/" },
  {
    label: "Clients",
    icon: <ClientIconInactive />,
    value: "clients",
    link: "/clients-list",
  },
  {
    label: "Transactions",
    icon: <TransactionsIcons />,
    value: "transactions",
    link: "/transactions",
  },
  {
    label: "Subcriptions",
    icon: <SubscriptionsIcon />,
    value: "subscriptions",
    link: "/subscriptions",
  },
  { label: "Settings", icon: <Settings />, value: "settings", link: "/" },
  { label: "Logout", icon: <LogoutIcon />, value: "logout", link: "/" },
];

export const clientData = [
  { label: "Home", icon: <HomeIcon />, value: "home", link: "/" },
  { label: "Events", icon: <EventsIcon />, value: "events", link: "/events" },
  { label: "Wallet", icon: <TransactionsIcons />, value: "wallet", link: "/client-wallet" },
  { label: "Settings", icon: <Settings />, value: "settings", link: "/settings" },
  { label: "Logout", icon: <LogoutIcon />, value: "logout", link: "/logout" },
];