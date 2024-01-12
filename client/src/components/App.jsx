import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Header from './Header';
import Checklist from './Checklist';
import Weather from './Weather';


const App = () => {
  const [data, setData] = useState("");

  const getData = async() =>{
    const response = await Axios.get("http://localhost:3000/test");
    setData(response.data);
  }
  useEffect(() => {
    getData()
  }, []);

  return (
  <div>
    <Header />
    
    <div class="row align-items-md-stretch">
      <Checklist />
      <Weather />
    </div>

    
  </div>)
}

export default App;
