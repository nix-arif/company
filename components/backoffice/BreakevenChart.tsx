"use client";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active) {
    const formatter = (value: any) => {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "MYR",
      });
      return formatter.format(value);
    };

    const ytd = formatter(payload?.[0].value);
    const capital = formatter(payload?.[1].value);

    return (
      <div className="custom-tooltip bg-slate-200 p-4 rounded-lg shadow-lg">
        <p className="label text-black font-semibold">{`${label}`}</p>
        <p className="label text-[#008000] font-semibold">{`YTD : ${ytd}`}</p>
        <p className="label text-[#ff0000] font-semibold">{`Capital : ${capital}`}</p>
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }
  return null;
};

const data = [
  { name: "03/2022", ytd: 6000, capital: 6000 },
  { name: "04/2022", ytd: 8000, capital: 12000 },
  { name: "05/2022", ytd: 10000, capital: 18000 },
  { name: "06/2022", ytd: 15000, capital: 27000 },
  { name: "07/2022", ytd: 9000, capital: 27000 },
  { name: "08/2022", ytd: 9000, capital: 33000 },
  { name: "09/2022", ytd: 10180, capital: 39000 },
  { name: "10/2022", ytd: 12180, capital: 45000 },
  { name: "11/2022", ytd: 14035, capital: 51000 },
  { name: "12/2022", ytd: 10954.3, capital: 57000 },
  { name: "01/2023", ytd: 6396.3, capital: 61000 },
  { name: "02/2023", ytd: 23766.3, capital: 79000 },
  { name: "03/2023", ytd: 24352.7, capital: 91000 },
  { name: "04/2023", ytd: 13978.7, capital: 95000 },
  { name: "05/2023", ytd: 20662.15, capital: 111000 },
  { name: "06/2023", ytd: 19840.51, capital: 119000 },
  { name: "07/2023", ytd: 17059.91, capital: 127000 },
  { name: "08/2023", ytd: 105925.31, capital: 227000 },
  { name: "09/2023", ytd: 66113.84, capital: 453000 },
  { name: "10/2023", ytd: 67293.77, capital: 465000 },
  { name: "11/2023", ytd: 47220.13, capital: 477000 },
  { name: "12/2023", ytd: 21951.16, capital: 485000 },
  { name: "01/2024", ytd: 13079.86, capital: 493000 },
  { name: "02/2024", ytd: 47567.81, capital: 497000 },
  { name: "03/2024", ytd: 21457.87, capital: 517000 },
  { name: "04/2024", ytd: 20061.77, capital: 533000 },
  { name: "05/2024", ytd: 65100.72, capital: 537000 },
  { name: "06/2024", ytd: 86697.94, capital: 541000 },
  { name: "07/2024", ytd: 139790.01, capital: 549000 },
  { name: "08/2024", ytd: 173667.57, capital: 549000 },
  //   { name: "09/2024", ytd: 203667.57, capital: 549000 },
  //   { name: "10/2024", ytd: 303667.57, capital: 549000 },
  //   { name: "11/2024", ytd: 473667.57, capital: 549000 },
  //   { name: "12/2024", ytd: 573667.57, capital: 549000 },
  //   { name: "01/2025", ytd: 673667.57, capital: 549000 },
  //   { name: "02/2025", ytd: 773667.57, capital: 549000 },
  //   { name: "03/2025", ytd: 873667.57, capital: 549000 },
  //   { name: "04/2025", ytd: 973667.57, capital: 549000 },
];

const BreakevenChart = () => {
  return (
    <div className="bg-slate-100 p-8 rounded-lg">
      <h2 className="text-xl font-bold text-black">Breakeven Charts</h2>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorCapital" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff0000" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#ff0000" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="colorYtd" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00F000" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#00F000" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            style={{
              fontSize: "0.8rem",
            }}
          />
          <YAxis
            axisLine={false}
            style={{
              fontSize: "0.8rem",
            }}
            tickCount={4}
            tickFormatter={(number) => {
              //   const formatter = new Intl.NumberFormat("en-US", {
              //     style: "currency",
              //     currency: "MYR",
              //   });
              const formatNumber = (num: number, precision = 0): string => {
                const map = [
                  { suffix: "T", threshold: 1e12 },
                  { suffix: "B", threshold: 1e9 },
                  { suffix: "M", threshold: 1e6 },
                  { suffix: "K", threshold: 1e3 },
                  { suffix: "", threshold: 1 },
                ];

                const found = map.find((x) => Math.abs(num) >= x.threshold);
                if (found) {
                  const formatted =
                    (num / found.threshold).toFixed(precision) + found.suffix;
                  return formatted;
                }

                return num.toString();
              };
              //   return formatter.format(number).slice(3);
              return formatNumber(number);
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area
            type="monotone"
            dataKey="ytd"
            stroke="#008000"
            // fill="url(#colorYtd)"
            fill="#00F000"
          />
          <Area
            type="monotone"
            dataKey="capital"
            stroke="#ff0000"
            fill="url(#colorCapital)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BreakevenChart;
