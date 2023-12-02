import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar
  } from "recharts";
function BarGraphAnalytics({barData}) {
    
   
    return (
        <>
            <br /><br />
            <center> <h4>Number of Practices in Last Five Days</h4></center>
            <br /><br />
            <BarChart
                width={500}
                height={300}
                data={barData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 80,
                    bottom: 5,
                }}
                barSize={20}
            >
                <XAxis
                    dataKey="dateUpload"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                    label={{ value: 'Date', position: 'insideBottom', offset: 0 }} 
                    
                />
                <YAxis label={{ value: 'No.of Tries', angle: -90, position: 'insideLeft' }}/>
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="Number Of Tries" fill="#8884d8" background={{ fill: "#eee" }} />
            </BarChart>
        </>
    )
}
export default BarGraphAnalytics
