import {React,useState} from "react";
import { Link } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md"


function Navbar() {
  let [open, setOpen] = useState(false);
  let menu;
  if(open){
    menu =<MdClose className="w-10 h-10"/>
  }
  else{
    menu = <MdMenu className="w-10 h-10"/>
  }
  return (
    <div>
            <nav className="fixed text-primary top-0 text-lg font-mono font-semibold text-center z-10 w-screen mt-0 ">
                <div class="flex w-screen content-center justify-center">
                  <div onClick={()=>setOpen(!open)} className="absolute right-6 top-6 cursor-pointer lg:hidden">
                    {menu}
                  </div>
                    <ul class={`flex flex-col lg:flex lg:flex-row lg:items-center lg:pb-0 pb-2 absolute lg:static lg:z-auto z-[-1] items-start w-full lg:w-screen lg:justify-center lg:pl-0 pl-9 backdrop-filter  backdrop-blur-sm shadow-blackish transition-all duration-500 ease-in ${open ? 'pt-20':'top-[-490px]'}`}>
                        <li class="inline-block my-2 lg:p-3">
                            <Link to="/resume">Resume</Link>
                        </li>
                        <li class="inline-block my-2 lg:p-3">
                            <Link to="/technologies">TechStack</Link>
                        </li>
                        <li class="inline-block my-2 lg:p-5">
                            <Link  to="/">Home</Link>
                        </li>
                        <li class="inline-block my-2 lg:p-3">
                            <Link  to="/projects">Projects</Link>
                        </li>
                        <li class="inline-block my-2 lg:p-3">
                            <a href="https://github.com/thedudeontitan">Github</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
  );
}
export default Navbar;