import "./Body.css"
import Button from '@mui/material/Button';
import Card from "./card"
import Color from "./Image/Color.webp";
import HangMan from "./Image/HangMan.jpg";
import ImageEditor from "./Image/ImageEditor.png";
import Movie from "./Image/Movie.webp";
import srollwebsites from "./Image/scroll-websites.png";
import Shoppingvif from "./Image/Shoppingavif.avif";
import Todolists from "./Image/Todolists.jpg";
import Graduate from "./Image/Gradute.jpeg";
import Inventory from "./Image/Inventory.jpg";
import { useState } from "react";
export default function () {
  const [pro , setpro]=useState("all")
    let arr = [
    {
    proName: "Graduate",
    proImage: Graduate,
    proDesc: "Graduation project",
    type : "js"
  },
  {
    proName: "Color Changer",
    proImage: Color,
    proDesc: "Change page colors dynamically",
    type : "js"
  },
  {
    proName: "Hang Man",
    proImage: HangMan,
    proDesc: "Classic word guessing game",
        type : "js"
  },
  {
    proName: "Image Editor",
    proImage: ImageEditor,
    proDesc: "Simple and fast image editing",
        type : "js"
  },
  {
    proName: "Movie",
    proImage: Movie,
    proDesc: "Browse and explore movie details",
        type : "react"
  },
  {
    proName: "Scroll Websites",
    proImage: srollwebsites,
    proDesc: "Smooth scrolling website examples",
    type:"js"
  },
  {
    proName: "Shopping",
    proImage: Shoppingvif,
    proDesc: "Online shopping web \n application",
    type:"js"
  },
  {
    proName: "Todo Lists",
    proImage: Todolists,
    proDesc: "Manage daily tasks efficiently",
    type:"react"
    },
    {
    proName: "Iventory Website",
    proImage: Inventory,
    proDesc: "Manage Prodect and Places",
    type:"react"
    },
];
  let  show;
    if (pro === "all") {
      show = arr;
    } else {
      show = arr.filter((p)=>p.type ===pro)
    }
    let cards = show.map(pro => {
        return <Card image={pro.proImage} name={pro.proName} dis={pro.proDesc} />
    })
    return (
        <div>   
            <div className="Conteener">
                <div className="Side-button">
                    <Button className="btn" onClick={()=>(setpro("all"))} variant="outlined">All Projects</Button>
                    <Button className="btn" onClick={()=>(setpro("js"))} variant="outlined">HTML,CSS & JavaScript</Button>
                    <Button className="btn" onClick={()=>(setpro("react"))} variant="outlined">React & Mui</Button>
                </div>
                <div className="Projects">

                    <div className="project">
                        {cards}
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}