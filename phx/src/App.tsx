import './App.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from './components/home/hero'
import Main from './components/home/main';
function App(){
    useEffect(() => {
    AOS.init({ once: true }); 
  }, []);
  return (
    <>
      <Hero/>
      <Main/>
    </>
  )
}

export default App
