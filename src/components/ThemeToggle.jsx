import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utilities';

const ThemeToggle = () => {
    const[isDarkmode,setIsDarkmode] = useState(false);

    useEffect(()=>{
      const storedTheme = localStorage.getItem("theme");
      if(storedTheme==="dark"){
        setIsDarkmode(true);
          document.documentElement.classList.add("dark");
      }else{
        setIsDarkmode(false);
          localStorage.setItem("theme","light");
               setIsDarkmode(false);
      }
    },[])

    const toggleThemeFunction =()=>{
        if(isDarkmode){
            document.documentElement.classList.remove("dark");
             localStorage.setItem("theme","light");
               setIsDarkmode(false);
        }else{
              document.documentElement.classList.add("dark");
              localStorage.setItem("theme","dark");
              setIsDarkmode(true)
        }

        
    }
  return (
     <button onClick={toggleThemeFunction} className={cn("fixed mx-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
     )}>
    {isDarkmode ?  <Sun className='h-6 w-6 text-yellow-300'/>:<Moon className='h-6 w-6 text-blue-900'/>}
     </button>
  )
}

export default ThemeToggle
