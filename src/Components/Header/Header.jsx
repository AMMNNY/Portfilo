import "./Header.css"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
export default function () {
    const [scroll, setScroll] = useState(0);
    const [theme , setTheme]=useState(JSON.parse(localStorage.getItem("theme") ?? "dark"))
    const [open, setOpen] = useState(false)
    useEffect(() => {
        localStorage.setItem("theme",JSON.stringify(theme))
        if (theme ==="light") {
        document.body.classList.remove("dark")
        document.body.classList.add("light")
        } else {
        document.body.classList.remove("light")
        document.body.classList.add("dark")
        }   
    },[theme])

    function opendio() {
        console.log("hi")
        if (open === true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    return (
        <div id="head">
            <Dialog  className="Dialogcss" 
            onClose={() => setOpen(false)}
            open={open}
                sx={{ zIndex: 99999, }}>
                
                <div className="condio">
                <Button onClick={()=>{setOpen(false)}} className="close"><CloseIcon className="closeIcon" /></Button>
                <ul style={{display:"flex",flexDirection: "column",border: "none",color: "black",height: "200px",top:"end"}}>
                        <Button onClick={()=>{setOpen(false)}} ><li><a href="#about">About</a></li></Button>
                        <Button onClick={()=>{setOpen(false)}} ><li><a href="#projects">Projects</a></li>  </Button>
                        <Button onClick={()=>{setOpen(false)}} > <li><a href="#email">Send Email</a></li>  </Button>
                        <Button onClick={()=>{setOpen(false)}} >  <li><a href="#contact">Contact</a></li>  </Button>
                    </ul>
            </div>
        </Dialog>
        <div className="all">
                <div className="container-header">
                    <Button  style={{border:"none"}} className="burger" onClick={opendio}><MenuIcon /></Button>
                <div className="nav">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#email">Send Email</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    
                </div>    
                <Button className="theme-toggle" onClick={()=>{setTheme(theme === "light" ? "dark" :"light")}}><Brightness4Icon ></Brightness4Icon> </Button>
            </div>   
            </div>
        </div>
    )
}