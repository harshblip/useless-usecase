import './App.css';
import ChartCard from './ChartCard';

function App() {
  const chartOptions = {
    chart1: {
      title: {
        text: "Sales Overview",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: ["Jan", "Feb", "Mar", "Apr", "May"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Sales",
          type: "bar",
          data: [120, 200, 150, 80, 70],
          itemStyle: {
            color: "#5470C6",
          },
        },
      ],
    },

    chart2: {
      title: {
        text: "Market Share",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Share",
          type: "pie",
          radius: "50%",
          data: [
            { value: 40, name: "Product A" },
            { value: 30, name: "Product B" },
            { value: 20, name: "Product C" },
            { value: 10, name: "Others" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    },
  }
  
  return (
    <div className="App">
      <ChartCard
        chartId={1}
        option={chartOptions.chart1}
      />
      <ChartCard
        chartId={2}
        option={chartOptions.chart2}
      />
    </div>
  );
}

export default App;
