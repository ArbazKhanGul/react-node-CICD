import './App.css';
import axios from 'axios';
import {useState,useEffect} from "react"
function App() {

        const [userName,setUserName]=useState('');
        useEffect(()=>{
          getNames();
        },[])

        const getNames=async ()=>{ 
const response=await axios.get("/names");

console.log(response)
setUserName(response.data)

        }
  return (
    <>
    <h1>My Webiste Running</h1>
    <h3>My name is {userName}</h3>
    </>
  );
}

export default App;
