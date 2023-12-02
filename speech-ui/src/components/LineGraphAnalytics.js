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
  
  const generateDataWithSerialNumbers = (lineData) => {
    return lineData.map((entry, index) => ({
      ...entry,
      serialNumber: index + 1,
    }));
  };

  const dataWithSerialNumbers = generateDataWithSerialNumbers(lineData);

    return(

        <>
        <br/><br/>
        <center> <h4>Analysis Of Last Five Practises</h4></center>
        <br/><br/>
            <LineChart
          width={500}
          height={300}
          data={dataWithSerialNumbers}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="index" label={{ value: 'Tries', position: 'insideBottom', offset: 0 }} />
          <YAxis label={{ value: 'Marks', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </>
   
    )
}
export default LineGraphAnalytics