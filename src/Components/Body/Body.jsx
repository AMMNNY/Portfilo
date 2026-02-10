import "./Body.css"
import Button from '@mui/material/Button';
import Card from "./card"
import Color from "./Image/Color.webp"
import HangMan from "./Image/HangMan.jpg";
import ImageEditor from "./Image/ImageEditor.png";
import Movie from "./Image/Movie.webp";
import srollwebsites from "./Image/scroll-websites.png";
import Shoppingavif from "./Image/Shoppingavif.avif";
import TodoLists from "./Image/TodoLists.jpg";
import Graduate  from "./Image/Gradute.jpeg";
import { v4 as uuidv4 } from 'uuid';
import Inventory from "./Image/Inventory.jpg";
import Portfilo from "./Image/PortfiloImg.png"
import { useState } from "react";
export default function () {
  const [pro , setpro]=useState("all")
    let arr = [
    {
    proName: "Graduate",
    proImage: Graduate,
    proDesc: "Graduation project",
    type : "js",
    id:uuidv4(),
  },
  {
    proName: "Color Changer",
    proImage: Color,
    proDesc: "Change page colors dynamically",
    type : "js",
    id:uuidv4(),
  },
  {
    proName: "Hang Man",
    proImage: HangMan,
    proDesc: "Classic word guessing game",
        type : "js",
    id:uuidv4(),
  },
  {
    proName: "Image Editor",
    proImage: ImageEditor,
    proDesc: "Simple and fast image editing",
        type : "js",
    id:uuidv4(),
  },
  {
    proName: "Movie",
    proImage: Movie,
    proDesc: "Browse and explore movie details",
        type : "react",
    id:uuidv4(),
  },
  {
    proName: "Scroll Websites",
    proImage: srollwebsites,
    proDesc: "Smooth scrolling website examples",
    type:"js",
    id:uuidv4(),
  },
  {
    proName: "Shopping",
    proImage: Shoppingavif,
    proDesc: "Online shopping web \n application",
    type:"js",
    id:uuidv4(),
  },
  {
    proName: "Todo Lists",
    proImage: TodoLists,
    proDesc: "Manage daily tasks efficiently",
    type:"react",
    id:uuidv4(),
    },
    {
    proName: "Iventory Website",
    proImage: Inventory,
    proDesc: "Manage Prodect and Places",
    type:"react",
    id:uuidv4(),
    },
    {
    proName: "Ayman Protilo",
    proImage: Portfilo,
      proDesc: `My personal portfolio showcasing 
      my projects and skills in web
      development and programming.`,
    type:"react",
    id:uuidv4(),
    },
];
  let  show;
    if (pro === "all") {
      show = arr;
    } else {
      show = arr.filter((p)=>p.type ===pro)
    }
    let cards = show.map(pro => {
        return <Card key={pro.id} image={pro.proImage} name={pro.proName} dis={pro.proDesc} />
    })
    return (
        <div id="projects">   
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