import "./Header.css"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
export default function () {
    const [open, setOpen] = useState(false)
    function opendio() {
        console.log("hi")
        if (open === true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    return (
        <div>
            <Dialog className="Dialogcss" 
            onClose={() => setOpen(false)}
            open={open}
                sx={{ zIndex: 99999, }}>
                
                <div className="condio">
                <Button onClick={()=>{setOpen(false)}} className="close"><CloseIcon className="closeIcon" /></Button>
                <ul style={{display:"flex",flexDirection: "column",border: "none",color: "black",width: "400px",height: "200px",top:"end"}}>
                        <li><a href="">About</a></li>
                        <li><a href="">Articles</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Speaking</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
            </div>
        </Dialog>
        <div className="all">
                <div className="container-header">
                    <Button className="burger" onClick={opendio}><MenuIcon /></Button>
                <div className="nav">
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Articles</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Speaking</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    
                </div>    
                <Button><Brightness4Icon></Brightness4Icon> </Button>
            </div>   
            </div>
        </div>
    )
}