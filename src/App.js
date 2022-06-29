//import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import './App.css';

function App() {

const [data, setData] = useState([])

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{

      result.json().then((resp)=>{
      
      //console.warn("result", resp)
      setData(resp)
      
      })
      
        })

  },[])

 //console.warn(data)


  return (
    <div className="App">
      <h1>Get API Method</h1>
<table border="1">
<tbody>
<tr>
<td>id</td>
<td>name</td>
<td>username</td>
<td>email</td>
<td>phone</td>
<td>website</td>
</tr>
{

data.map((item)=>


<tr  key={item.id}>
<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.username}</td>
<td>{item.email}</td>
<td>{item.phone}</td>
<td>{item.website}</td>
</tr>

)


}


</tbody>
</table>

    </div>
  );
}

export default App;
