import React from "react";
import SmallCard from "./SmallCard";
import { Check, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

const SmallCards = () => {
  const orderStatus = [
    {
      title: "Total Order",
      number: 150,
      iconBg: "bg-green-600",
      icon: <ShoppingCart />,
    },
    {
      title: "Pending Order",
      number: 100,
      iconBg: "bg-blue-600",
      icon: <Loader2 />,
    },
    {
      title: "Processing Order",
      number: 200,
      iconBg: "bg-orange-600",
      icon: <RefreshCcw />,
    },
    {
      title: "Delivered Order",
      number: 300,
      iconBg: "bg-purple-600",
      icon: <Check />,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((data, i) => (
        <SmallCard key={i} status={data} />
      ))}
    </div>
  );
};

export default SmallCards;
