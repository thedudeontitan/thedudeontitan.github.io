import React, { useEffect, createContext, useState,useContext } from "react";
import Typed from "react-typed"
import { Switch } from "@headlessui/react";
import About from "./About";
import {
    SiGithub,
    SiLinkedin
} from "react-icons/si"
import {FiSun,FiMoon} from "react-icons/fi"

const ThemeContext = createContext();

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    // Default theme is taken as dark-theme
    localStorage.setItem("theme", "light-theme");
    return "light-theme";
  } else {
    return theme;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

function Header(){
    // const [enabled, setEnabled] = useState(false)
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
        <section id="header">
            
            <div className="flex pt-20 flex-col">
                <div className="mt-52 lg:mt-64 mb-60 flex flex-col items-center">
                {/* <div className="mt-52 lg:mt-64 mb-80 lg:ml-36 lg:flex-grow lg:w-1/2 lg:pr-24 flex flex-col lg:items-start items-center"> */}
                    <h1 className="title-font md:text-5x1 text-4xl mb-4 font-bold text-primary">
                        ANKIT
                    </h1>
                    <h1 className="title-font md:text-5x1 text-4xl mb-4 font-bold text-black">
                        KOKANE
                    </h1>
                    <role className="text-center font-bold text-3xl md:text-4xl pb-4">
                        <Typed
                            className="typed-text"
                            strings={["Mahine Learning", "Data Science","Web Development","Automation"]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                        />
                    </role>
                    <div className="flex flex-row">
                        <a href="https://www.linkedin.com/in/ankit-kokane-795162197/">
                            <SiLinkedin className="w-10 h-10 mr-5"/>
                        </a>
                        <a href="https://github.com/thedudeontitan">
                            <SiGithub className="w-10 h-10 ml-5"/>
                        </a>
                    </div>
                    <Switch
                        checked={theme}
                        onChange={toggleTheme}
                        onClick={() => getTheme(theme)}
                        className={`${
                            theme==="dark-theme" ? 'bg-[grey]' : 'bg-black'
                        } relative inline-flex h-10 w-20 items-center rounded-full mt-12`}
                        >
                        
                        <span
                            className={`${
                                theme==="dark-theme" ? 'translate-x-11' : 'translate-x-1'
                            } inline-block h-8 w-8 transform rounded-full bg-white transition`}
                        />
                        <span className="absolute flex flex-row justify-start ml-2">
                            <FiSun className={`${theme==="dark-theme" ? 'flex':'hidden'} w-7 h-7`} />
                        </span>
                        <span className="absolute flex flex-row right-0 mr-2">
                            <FiMoon className={`${theme==="dark-theme" ? 'hidden':'flex'} text-white w-7 h-7`} />
                        </span>
                    </Switch>
                    
                    </div>
             </div>
             <About/>
        </section>
        
    );
}

export {Header, ThemeContext, ThemeProvider};