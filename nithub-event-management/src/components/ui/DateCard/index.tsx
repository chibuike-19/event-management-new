


type DataCardProps = {
  name?: string;
  number?: number;
  icon?: React.ReactNode;
  color?: string;
  bg?: string;
};

const DataCard = ({ name, number, icon, color, bg }: DataCardProps) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className="w-[100%] p-5 rounded-[6px] text-black"
    >
      <div className="flex flex-row justify-between">
        <h1 className="text-[22px] font-semibold">{name}</h1>

        <div style={{ backgroundColor: color }} className="rounded-[6px] p-2">
          {icon}
        </div>
      </div>
      <p style={{ color: color, fontWeight: "900" }}>{number}</p>
    </div>
  );
};

export default DataCard;