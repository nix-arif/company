import { LucideIcon, ShoppingCart } from "lucide-react";

interface SmallCardProps {
  status: {
    title: string;
    number: number;
    iconBg: string;
    icon: React.ReactElement<LucideIcon>;
  };
}

const SmallCard = ({ status }: SmallCardProps) => {
  const { title, number, iconBg, icon } = status;
  return (
    <div className="rounded-lg shadow-lg bg-slate-700 p-4">
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12 ${iconBg} rounded-full items-center flex justify-center`}
        >
          {icon}
        </div>
        <div>
          <p>{title}</p>
          <h3 className="text-2xl font-bold">{number}</h3>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
