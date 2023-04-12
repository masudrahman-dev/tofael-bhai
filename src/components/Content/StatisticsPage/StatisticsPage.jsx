import React from "react";
import { useLoaderData } from "react-router-dom";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const StatisticsPage = () => {
const data = useLoaderData()
  return (
    <section>
      <div className="container mx-auto dark:text-slate-50">
        <div className="flex justify-center items-center">

        <div style={{ width: "100%", height: 500 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="value" data={data} fill="#8884d8" label />
            </PieChart>
          </ResponsiveContainer>
        </div>
        </div>
        <p className="text-center my-12 text-3xl">Assignment Marks </p>
      </div>
    </section>
  );
};

export default StatisticsPage;
