import React from "react"
import {} from "react-icons"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";


function Footer(){
    return(
        <section id="footer">
            <div className="w-full justify-center lg:h-10 bg-[#cccccc] flex flex-col lg:flex-row items-center mt-20">
                <div className="my-2 lg:my-0 lg:w-full flex flex-row items-center text-sm lg:text-md lg:pl-16">
                    Contact Me:
                    {/* <button className=""> */}
                        <a href="mailto:ankitkokane77@gmail.com" className="flex flex-row items-center">
                        <MdEmail className="h-6 lg:h-9 w-6 lg:w-9"/>
                        ankitkokane77@gmail.com
                        </a>
                    {/* </button> */}
                </div>
                <div className="flex flex-row items-center my-2 lg:my-0">
                    <button >
                        <a href="https://github.com/thedudeontitan">
                            <AiFillGithub className="h-6 lg:h-9 w-6 lg:w-9 lg:my-0"/>
                        </a>
                    </button>
                    <button >
                        <a href="https://www.linkedin.com/in/ankit-kokane-795162197/">
                            <AiFillLinkedin className="ml-5 h-6 lg:h-9 w-6 lg:w-9"/>
                        </a>
                    </button>
                    {/* <button >
                        <a href="">
                            <MdEmail className="ml-5 h-9 w-9"/>
                        </a>
                    </button> */}
                    
                </div >
                <div className="lg:w-full text-sm lg:text-md lg:text-right lg:mr-16 font-serif my-2 lg:my-0">
                    <p >
                        Designed & Developed by Ankit Kokane.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer;