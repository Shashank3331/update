export default function ClassState(){
    const items = ["Aashish",28,"Greater Noida","Uttar Pradesh",201310]
  return(
       <div>
             <h3>Dynamic Data Render</h3>
             <table border={3}>
              <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>State</th>
                <th>Pincode</th>
              </tr>
              </thead>
              <tbody>
              <tr>
             {items.map((item,index)=><td key={index}>{item}</td>)}
             </tr>
             </tbody>
             </table>
       </div>
  )
}