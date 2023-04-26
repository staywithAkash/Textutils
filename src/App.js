import React,{useState} from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
 import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          setAlert(null);
        },1500);
  }
  const toggleFunction=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#272829'
      showAlert("Dark mode is enabled","success");
      // setTimeout(showAlert(" "," "),1000);
    }
    else{
      setMode('light'); 
      document.body.style.backgroundColor='white';
    }
  }
  return ( 
   <>
  <Navbar title="Textutils" about="about textutils" mode1={mode} toggleFunction={toggleFunction}></Navbar>
  <Alert alert={alert} mode1={mode}/>
  <div className="container my-3" >
  <TextForm heading="Enter The Text To Analyse" alertFn={showAlert} mode1={mode} ></TextForm>
  {/* <About/> */}
  </div>
   </> 
    );
}
export default App;
