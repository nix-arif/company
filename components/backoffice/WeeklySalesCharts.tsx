"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
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

    const income = formatter(payload?.[0].value);
    const expenses = formatter(payload?.[1].value);
    const diff = formatter(payload?.[2].value);

    return (
      <div className="custom-tooltip bg-slate-200 p-4 rounded-lg shadow-lg">
        <p className="label text-[#008000] font-semibold">{`Income : ${income}`}</p>
        <p className="label text-[#ff0000] font-semibold">{`Expenses : ${expenses}`}</p>
        <p className="label text-[#dda000] font-semibold">{`Diff : ${diff}`}</p>
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }

  return null;
};

const data = [
  {
    name: "11/2023",
    income: 12000,
    expenses: 32073.64,
    diff: -20073.64,
  },
  {
    name: "12/2023",
    income: 8000,
    expenses: 33268.97,
    diff: -25268.97,
  },
  {
    name: "01/2024",
    income: 10500,
    expenses: 19371.3,
    diff: -8871.3,
  },
  {
    name: "02/2024",
    income: 48750,
    expenses: 14262.05,
    diff: 34487.95,
  },
  {
    name: "03/2024",
    income: 39900,
    expenses: 66009.94,
    diff: -26109.94,
  },
  {
    name: "04/2024",
    income: 24850,
    expenses: 26246.1,
    diff: -1396.1,
  },
  {
    name: "05/2024",
    income: 92765.31,
    expenses: 47726.36,
    diff: 45038.95,
  },
  {
    name: "06/2024",
    income: 45000,
    expenses: 23402.78,
    diff: 21597.22,
  },
  {
    name: "07/2024",
    income: 92521.3,
    expenses: 39429.23,
    diff: 53092.07,
  },
  {
    name: "08/2024",
    income: 154356.72,
    expenses: 120479.16,
    diff: 33877.56,
  },
];

const WeeklySalesCharts = () => {
  //   const data = {
  //     labels: [
  //       new Date(30 - 11 - 2023),
  //       new Date(31 - 12 - 2023),
  //       new Date(31 - 1 - 2024),
  //     ],
  //   };

  //   const [data, setData] = useState([
  //     new Date("2023/11/30"),
  //     new Date("2023/12/31"),
  //     new Date("2024/1/31"),
  //     new Date("2024/2/29"),
  //     new Date("2024/3/31"),
  //     new Date("2024/4/30"),
  //     new Date("2024/5/31"),
  //     new Date("2024/6/30"),
  //     new Date("2024/7/31"),
  //     new Date("2024/8/31"),
  //   ]);

  return (
    <div className="bg-slate-100 p-8 rounded-lg mb-8">
      <h2 className="text-xl font-bold text-black">Income & Expenses</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            style={{
              fontSize: "0.8rem",
            }}
          />
          <YAxis
            style={{
              fontSize: "0.8rem",
            }}
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
          <Tooltip
            // formatter={(value, name) => {
            //   const formatter = new Intl.NumberFormat("en-US", {
            //     style: "currency",
            //     currency: "MYR",
            //   });
            //   return formatter.format(value);
            // }}
            content={<CustomTooltip />}
          />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="income" fill="#008000" />
          <Bar dataKey="expenses" fill="#ff0000" />
          <Bar dataKey="diff" fill="#dda000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklySalesCharts;
