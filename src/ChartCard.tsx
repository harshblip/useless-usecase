import ReactECharts  from "echarts-for-react";

export default function ChartCard({ chartId, option }: { chartId: number, option: any }) {

    const handleExportClick = () => {
        const url = `${window.location.origin}/embed/${chartId}`;
        navigator.clipboard.writeText(url);
        alert(`Chart URL copied: ${url}`);
    };

    return (
        <div className="p-4 border">
            <ReactECharts option={option} />
            <button onClick={handleExportClick}>Export to PowerPoint</button>
        </div>
    );
}
