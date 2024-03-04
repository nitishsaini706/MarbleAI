import { useEffect, useState } from 'react';
import './App.css';
import DashboardComponent from './components/Dashboard';
import ShimmerEffect from './components/Shimmer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data,setdata]=useState([]);
  const [startDate,setStartDate]=useState("2022-10-01");
  const [endDate,setEndDate]=useState("2023-12-31");
  const [active, setActive] = useState(0);

  function getRandomNumber() {
    return Math.floor(Math.random() * 28001);
  }

  useEffect(()=>{
    const t= setTimeout(()=>{
      setdata([
        { name: 'Oct 2022', prev:getRandomNumber(),value: 25000 },
        { name: 'Dec 2022', prev:getRandomNumber(),value: 7000 },
        { name: 'Feb 2023', prev:getRandomNumber(),value: 15000 },
        { name: 'Apr 2023', prev:getRandomNumber(),value: 20000 },
        { name: 'Jun 2023', prev:getRandomNumber(),value: 800 },
        { name: 'Aug 2023', prev:getRandomNumber(),value: 25000 },
        { name: 'Oct 2023', prev:getRandomNumber(),value: 22000 },
        { name: 'Dec 2023', prev:getRandomNumber(),value: 15000 },
      ]);
    },3000);
    return ()=>{clearTimeout(t)};
  },[]);


  // this is static data, if we have real data from API, we can display it on our chart
  useEffect(() => {
    setdata([
      { name: 'Oct 2022', prev: getRandomNumber(), value: getRandomNumber() },
      { name: 'Dec 2022', prev: getRandomNumber(), value: getRandomNumber() },
      { name: 'Feb 2023', prev: getRandomNumber(), value: getRandomNumber() },
      { name: 'Apr 2023', prev: getRandomNumber(), value: getRandomNumber() },
      { name: 'Jun 2023', prev: getRandomNumber(), value: getRandomNumber() },
      { name: 'Aug 2023', prev: getRandomNumber(), value: getRandomNumber() },
      { name: 'Oct 2023', prev: getRandomNumber(), value: getRandomNumber() },
      { name: 'Dec 2023', prev: getRandomNumber(), value: getRandomNumber() },
    ]);
  }, [startDate,endDate,active])

  useEffect(() => {
    setdata([
      { name: 'Oct 2022', prev: getRandomNumber(), value: 25000 },
      { name: 'Dec 2022', prev: getRandomNumber(), value: 7000 },
      { name: 'Feb 2023', prev: getRandomNumber(), value: 15000 },
      { name: 'Apr 2023', prev: getRandomNumber(), value: 20000 },
      { name: 'Jun 2023', prev: getRandomNumber(), value: 800 },
      { name: 'Aug 2023', prev: getRandomNumber(), value: 25000 },
      { name: 'Oct 2023', prev: getRandomNumber(), value: 22000 },
      { name: 'Dec 2023', prev: getRandomNumber(), value: 15000 },
    ]);
  }, [active])
  return (
    <div className="App">
      <h1 style={{textAlign:"center",padding:"20px"}}>Marble.AI Dashboard</h1>
      {data.length ? <DashboardComponent data={data} startDate={startDate} endDate={endDate} setEndDate={setEndDate} setStartDate={setStartDate} active={active} setActive={setActive}/>: <ShimmerEffect /> }
    </div>
  );
}

export default App;
