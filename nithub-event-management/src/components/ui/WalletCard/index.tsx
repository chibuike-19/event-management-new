type WalletCardProps = {
  name?: string;
  amount?: string;
  icon?: React.ReactNode;
  color?: string;
  bg?: string;
};

const WalletCard = ({ name, amount, icon, color, bg }: WalletCardProps) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className="w-[100%] p-5 rounded-[6px] text-black"
    >
      <div style={{ backgroundColor: 'white' }} className="rounded-full p-3 w-fit">
        {icon}
      </div>
      <h4 className="text-[12px] py-2 font-semibold">{name}</h4>

      <h1 style={{ color: color, fontWeight: "900" }} className="text-2xl">{amount}</h1>
    </div>
  );
};

export default WalletCard;