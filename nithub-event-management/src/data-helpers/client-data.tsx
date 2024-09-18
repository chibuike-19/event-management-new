import { Events, OngoingEvents, PendingWithdraw, TicketSold, Wallet, WalletMinus } from "../assets/svg/icons";


export const cardData = [
    { name: "Event", color: "#076323", bgColor: "#4CF384", number: 345, icon: <Events /> },
    { name: "Ongoing events", color: "#3455C3", bgColor: "#F1F4FE", number: 5,  icon: <OngoingEvents /> },
    {
      name: "Total ticket sold",
      color: "#E269C9",
      bgColor: "#FDF8FC",
      number: 678,
      icon: <TicketSold />
    },
  
  ];

  export const walletCardData = [
    { name: "Total amount made", amount: '₦ 100,000,000', color: "#00000", bgColor: "#D5F3FF", icon: <Wallet /> },
    { name: "Total amount withdrawn", amount: '₦ 50,000,000', color: "#00000", bgColor: "#F0F4FF", icon: <WalletMinus /> },
    { name: "Pending withdrawal", amount: '₦ 3,000,000', color: "#00000", bgColor: "#F8F9FE", icon: <PendingWithdraw /> },

  ];