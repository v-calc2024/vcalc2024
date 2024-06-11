import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function MultiBarChart({
  data,
  height = 800,
  axisHeight = 385,
  oneElement = false,
  elementName = null,
}: any) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} barSize={30}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          height={axisHeight}
          angle={-80}
          textAnchor="end"
          interval={0}
        />
        <YAxis />
        <Tooltip />
        <Legend
          verticalAlign="bottom"
          align="center"
          layout="horizontal"
          iconType="circle"
          formatter={(value, entry) => (
            <span style={{ color: entry.color }}>{value}</span>
          )}
        />
        {oneElement ? (
          <Bar
            dataKey={elementName}
            fill="#FFBB28"
            activeBar={<Rectangle fill="#FFBB28" stroke="#FFBB28" />}
          />
        ) : (
          <>
            <Bar
              dataKey="firstMonth"
              fill="#0088FE"
              activeBar={<Rectangle fill="#0088FE" stroke="#0088FE" />}
            />
            <Bar
              dataKey="secondMonth"
              fill="#00C49F"
              activeBar={<Rectangle fill="#00C49F" stroke="#00C49F" />}
            />
            <Bar
              dataKey="thirdMonth"
              fill="#FFBB28"
              activeBar={<Rectangle fill="#FFBB28" stroke="#FFBB28" />}
            />
          </>
        )}
      </BarChart>
    </ResponsiveContainer>
  );
}
