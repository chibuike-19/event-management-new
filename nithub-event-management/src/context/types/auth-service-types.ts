export type ValueProp = {
  userData: { role: "admin" | "client" } | null;
  Logout: () => void;
  Login: (data: any) => void;
  isAuthenticated: boolean;
};
