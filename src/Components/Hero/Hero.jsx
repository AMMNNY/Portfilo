import "./Hero.css"
import Image from "../../../public/Portfillo-image.png"
import VerifiedIcon from '@mui/icons-material/Verified';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default function () {
    return (
        <div id="about">
            <div className="cont">
                <div className="disc">
                    <div style={{display:"flex"}}>
                        <img style={{ width: "75px", height: "75px" }} src={Image} alt="" />
                        <div style={{display:"flex",alignItems:"end"}}><VerifiedIcon className="icon" /></div>
                    </div>
                        <section className="word">
                            <h1>Front-End Developer & Aspiring Full-Stack Engineer</h1>
                            <p>
                            I create responsive, accessible, and visually clean web interfaces with a
                            strong focus on user experience.
                            </p>
                            <p>
                            Passionate about building interactive
                            digital products using HTML, CSS, JavaScript, and React — and
                            currently expanding my skills into backend development with C#.
                            I aim to write clean and scalable code while constantly learning new technologies to
                            deliver better performance and modern user experiences.
                            </p>
                    </section>
                    <div className="links">
                        <ul>
                            <li style={{marginLeft:0}}><a target="_blank" href="https://x.com/ammnny_?s=11"><XIcon/></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/ammnny1/"><InstagramIcon /></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/ayman-zahran-b9b702238/"><LinkedInIcon /></a></li>
                            <li><a target="_blank" href="https://github.com/AMMNNY"><GitHubIcon /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="video">
                    <DotLottieReact
                        style={{marginLeft:"60px"}}
                        src="https://lottie.host/786e60d7-23a8-443b-84a3-e18c4067c273/IATQc7uIP6.lottie"
                        loop
                        autoplay
                    />
                </div>
            </div>
        </div>
    )
}