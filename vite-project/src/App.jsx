import { Card1 } from './components/Card1/Card1';
import './App.css'
import { useEffect } from 'react';
import { NavbarMenu } from './components/Navbar/NavbarMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { MainService } from './components/Services/MainService';
import { Features } from './components/Container/Features';
import {DevSer} from './components/DevlopmentService/DevSer';
import { Expertise } from './components/Expertise/Expertise';
import { WWD } from './components/What we Do/WWD';
import { Footers } from './components/Footer/Footers';
import { useState } from 'react';
// import { CiDark, CiLight } from 'react-icons/ci';

function App() {
  const [icons, setIcons] = useState("light");

  const [mode, setMode] = useState(()=>{
    const initialTheme = localStorage.getItem("mode");
		return initialTheme ? initialTheme : "light";
  });


  function getThemeFromLocalStorage() {
		const savedTheme = localStorage.getItem("mode");
		if (savedTheme) {
			setMode(savedTheme);
		}
	}

  
 

  const toggleMode = () => {
  
    setMode((prevTheme) => {
			const newTheme = prevTheme === "light" ? "dark" : "light";
			localStorage.setItem("mode", newTheme);
      localStorage.setItem("icons", newTheme);
			return newTheme;
		});

    if (mode === 'light') {
      setMode('dark')
      // document.body.style.backgroundColor = "#1c252d"

    } else {
      setMode('light')
      // document.body.style.backgroundColor = "white"
    }

  }

  useEffect(() => {
		getThemeFromLocalStorage();
	}, [mode]);

  useEffect (()=>{
   
    const icons = localStorage.getItem("icons")
   if(icons ===null)
   {
    const icons = localStorage.setItem("icons", "light")
   }
   else {
    const icons = localStorage.getItem("icons")
   }
    setIcons(icons)
  },[icons])



  const handleChange = () => {
    setIcons((previousImg) => {
      toggleMode()
      return !previousImg
    }
    )
  }

  return (
    <>
    <Container fluid className={`${mode}`}>
    
    <NavbarMenu mode={mode} icons={icons} handleChange={handleChange}  />  
    </Container> 
   

    

    <Container fluid className={`${mode}`} >

    <Card1  />
    
      <MainService  />
      
   
    
    <Features />
   
    

    <DevSer />
    
    
    <Expertise  />
    
    
    <WWD  />
    
    
    <Footers/>
    </Container>
    
    </>
  )
}

export default App
