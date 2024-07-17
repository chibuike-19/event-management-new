import { PrivateRoute, PublicRoute } from "./route-types";
import { AdminHome } from "../pages/admin";
import { ClientsList } from "../pages/admin/clients";
import { Transactions } from "../pages/admin/transactions";
import { Subscriptions } from "../pages/admin/subscription";

type RouteProps = {
  path: string;
  element: React.ReactNode | null;
};

export const routes: RouteProps[] = [
  // The AUTH routes starts
  { path: "/welcome", element: PublicRoute(<AdminHome />) },
  { path: "/clients-list", element: PublicRoute(<ClientsList />) },
  { path: "/transactions", element: PublicRoute(<Transactions />) },
  { path: "/subscriptions", element: PublicRoute(<Subscriptions />) },
  //   { path: "/welcome/agency", element: PublicRoute(<WelcomeAgency />) },
  //   {
  //     path: "/agency-signup",
  //     element: PublicRoute(<AgencySignup />),
  //   },
  //   // The welcome routes ends here

  //   { path: "/casting-calls", element: PublicRoute(<Dashboard />) },
  //   { path: "/create-casting", element: PublicRoute(<CreateCasting />) },
  //   { path: "/create-job", element: PublicRoute(<CreateJob />) },
  //   { path: "/production/:id", element: PublicRoute(<Production />) },
  //   { path: "/job-view", element: PublicRoute(<JobView />) },
  //   { path: "*", element: PublicRoute(<PageNotFound />) },
  //   // Change to Notadmin
  //   { path: "/not-found", element: PublicRoute(<NotAdmin />) },
  //   {
  //     path: "/casting-dashboard/agency-settings",
  //     element: PublicRoute(<AgencySettings />),
  //   },
  //   {
  //     path: "/casting-dashboard/agency-settings",
  //     element: PublicRoute(<AgencySettings />),
  //   },
  //   { path: "/agency-profile", element: PublicRoute(<AgencyProfile />) },
  //   { path: "/talent-profile", element: PublicRoute(<TalentProfile />) },
  //   {
  //     path: "/casting-dashboard/agency-settings",
  //     element: PublicRoute(<AgencySettings />),
  //   },
  //   { path: "/login", element: PublicRoute(<Loginmain />) },
  //   { path: "/reset-password", element: PublicRoute(<ResetPasswordMain />) },
  //   { path: "/got-mail", element: PublicRoute(<GotEmail />) },
  //   { path: "/invalid-link", element: PublicRoute(<ResetInvalidLink />) },
  //   { path: "/create-password", element: PublicRoute(<ResetCreatePassword />) },
  //   { path: "/agency-signup/otp", element: PublicRoute(<Otp />) },
  //   { path: "/agency-signup/otp-send", element: PublicRoute(<OtpSend />) },
  //   {
  //     path: "/agency-signup/otp/link-expired",
  //     element: PublicRoute(<LinkExpired />),
  //   },
  //   {
  //     path: "/agency-signup/otp/link-expired",
  //     element: PublicRoute(<LinkExpired />),
  //   },
  //   { path: "/agency-signup/thankyou", element: PublicRoute(<Thankyou />) },
  //   {
  //     path: "/agency-signup/create-password",
  //     element: PublicRoute(<CreatePassword />),
  //   },
  //   {
  //     path: "/agency-signup/invalid-link",
  //     element: PublicRoute(<InvalidLink />),
  //   },
  //   {
  //     path: "/agency-signup/create-password",
  //     element: PublicRoute(<CreatePassword />),
  //   },
  //   {
  //     path: "/agency-signup/invalid-link",
  //     element: PublicRoute(<InvalidLink />),
  //   },
  //   { path: "/talent-profile-signup", element: PublicRoute(<TalentSignup />) },
  //   { path: "/talent-profile-describe", element: PublicRoute(<Describe />) },
  //   { path: "/talent-profile-setup", element: PublicRoute(<BrowndotProfile />) },
  //   { path: "/talent-profile/otp-send", element: PublicRoute(<TalentOtpSend />) },
  //   { path: "/talent-profile/otp", element: PublicRoute(<OtpField />) },
  //   {
  //     path: "/talent-profile/otp-expired",
  //     element: PublicRoute(<TalentOtpExpired />),
  //   },
  //   {
  //     path: "/talent-profile/create-password",
  //     element: PublicRoute(<TalentCreatePassword />),
  //   },
  //   {
  //     path: "/talent-profile/link-expired",
  //     element: PublicRoute(<TalentLinkExpired />),
  //   },
  //   {
  //     path: "/talent-profile/otp-expired",
  //     element: PublicRoute(<TalentOtpExpired />),
  //   },
  //   {
  //     path: "/talent-profile/create-password",
  //     element: PublicRoute(<TalentCreatePassword />),
  //   },
  //   {
  //     path: "/talent-profile/link-expired",
  //     element: PublicRoute(<TalentLinkExpired />),
  //   },
  //   { path: "/talent-profile/onboard", element: PublicRoute(<Onboard />) },
  //   {
  //     path: "/find-talent",
  //     element: PublicRoute(<FindTalent />),
  //   },
  //   { path: "/agency/dashboard", element: PrivateRoute(<AgencyCalendar />) },
  //   {
  //     path: "/terms-and-conditions",
  //     element: PublicRoute(<TermsAndConditions />),
  //   },
  //   {
  //     path: "/privacy-policy",
  //     element: PublicRoute(<PrivacyPolicy />),
  //   },
  //   {
  //     path: "/messaging",
  //     element: PublicRoute(<Messages />),
  //   },
  //   {
  //     path: "/user-invite",
  //     element: PublicRoute(<UserInvite />),
  //   },
  //   {
  //     path: "/call-schedule",
  //     element: PublicRoute(<CallSchedule />),
  //   },
  //   {
  //     path: "/user-invite/otp",
  //     element: PublicRoute(<InviteOTP />),
  //   },
  //   {
  //     path: "/user-invite/confirm-rejection",
  //     element: PublicRoute(<ConfirmRejection />),
  //   },
  //   {
  //     path: "/casting-dashboard/talent-directory",
  //     element: PublicRoute(<TalentDirectory />),
  //   },
  //   {
  //     path: "/create-job/preview",
  //     element: PublicRoute(<PreviewJobCreation />),
  //   },
  //   {
  //     path: "/onboarding",
  //     element: PublicRoute(<OnboardingScreen />),
  //   },
];
