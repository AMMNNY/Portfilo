import Header from "./Components/Header/Header.jsx"
import Hero from "./Components/Hero/Hero.jsx"
import Body from "./Components/Body/Body.jsx"
import Button from '@mui/material/Button';
import Footer from "./Components/Footer/Footer.jsx"
import { useEffect, useState } from "react";
import Contact from "./Components/Contact/Contact.jsx"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

function App() {
  const [show , setShow]=useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY>=100) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
  },[])
  return (
    <div className="container">
      <Header />
      <div className="divider" />
      <Hero />
        <Button style={{opacity:show ? 1 :0, transition:"0.5s"}} className="up"
  onClick={() => {
    document.getElementById("head")?.scrollIntoView({ behavior: "smooth" });
  }}
  sx={{
    position: "fixed",
    right: "20px",
    bottom: "20px",
    minWidth: "auto",
    padding: 0,
    zIndex: 1000,

  }}
>
  <ExpandCircleDownIcon
    sx={{
      transform: "rotate(180deg)",
      width: 40,
      height: 40,
    }}
  />
</Button>
      <div className="divider" />
      <Body />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
    </div>
  )
}

export default App
