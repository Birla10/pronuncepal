import {
    Tooltip,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Line,
    LineChart
  } from "recharts";
function LineGraphAnalytics({lineData}){
    


    return(

        <>
        <br/><br/>
        <center> <h4>Analysis Of Last Five Day Practise</h4></center>
        <br/><br/>
            <LineChart
          width={500}
          height={300}
          data={lineData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="marks" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </>
   
    )
}
export default LineGraphAnalytics