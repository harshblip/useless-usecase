import React from "react";
import { useParams } from "react-router-dom";
import ReactECharts from "echarts-for-react";

const chartsData: Record<string, any> = {
  1: {
    title: { text: "Sales Overview" },
    tooltip: { trigger: "axis" },
    xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr"] },
    yAxis: { type: "value" },
    series: [{ name: "Sales", type: "bar", data: [120, 200, 150, 80] }],
  },

  2: {
    title: { text: "Market Share" },
    tooltip: { trigger: "item" },
    series: [
      {
        name: "Share",
        type: "pie",
        radius: "50%",
        data: [
          { value: 40, name: "Product A" },
          { value: 30, name: "Product B" },
          { value: 20, name: "Product C" },
        ],
      },
    ],
  },
};

export const EmbedChart: React.FC = () => {
  const { chartId } = useParams<{ chartId: string }>();

  // Convert chartId string to number and fetch chart
  const chartOption = chartsData[Number(chartId)];

  if (!chartOption) {
    return <div style={{ padding: 20 }}>Invalid chart ID</div>;
  }

  return (
    <div style={{ width: "100%", height: "100vh", margin: 0 }}>
      <ReactECharts option={chartOption} style={{ height: "100%" }} />
    </div>
  );
};
