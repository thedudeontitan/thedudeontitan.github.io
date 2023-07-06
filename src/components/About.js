import React from "react";
import pic from "../assests/Pythonguy.svg"

function About(){
    return(
        <section id="about">
            <div className="flex flex-col lg:flex-row items-center">
            <div className="text-center mx-5 lg:mx-0 lg:text-justify mb-32 lg:ml-36 lg:mb-56 text-lg lg:text-2xl">
                <h1 className="font-bold text-4xl md:text-5xl mb-10">
                    ABOUT ME
                </h1>
                <h1>
                    Hello!
                </h1>
                <text>
                    I am Ankit Kokane, I am a 
                    <span class="text-primary"> Python Developer</span>, 
                    <span class="text-primary"> Fullstack Developer</span>.
                    <br/> Aspiring 
                    <span class="text-primary"> Data scientist </span>and 
                    <span class="text-primary"> Machine learning Engineer</span>.
                </text>
                <br/>
                <br/>
                <text>
                    My field of Interest are  
                    <span class="text-primary"> Machine Leanring</span>, 
                    <span class="text-primary"> Data Science </span> and 
                    <span class="text-primary"> Web Development</span>.

                </text>
                <br/>
                <br/>
                <text>
                    I am also passionate
                    <span class="text-primary"> Open source </span>Contributor and 
                    <span class="text-primary"> GNU/Linux </span>enthusiast.
                </text>
            </div>
            <div className="flex justify-center lg:right-0">
                <img src={pic} alt="pic"/>
            </div>
            </div>
            
        </section>
    )
}


export default About;