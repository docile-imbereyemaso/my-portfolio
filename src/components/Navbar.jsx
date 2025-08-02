import React, { use, useEffect, useState } from 'react';
import { cn } from '../lib/utilities';

const Navbar = () => {
 const[isScroll,setIsSCroll] = useState(false);

 useEffect(()=>{
    const handleScroll=()=>{
        setIsSCroll(window.screenY>10);
    }

    window.addEventListener("scroll",handleScroll);
    return ()=>removeEventListener("scroll",handleScroll)
 },[])
    const navItems =[
        {name:"Home",href:"#hero"},
        {name:"About",href:"#about"},
        {name:"Skills",href:"#skills"},
        {name:"Projects",href:"#projects"},
        {name:"Contacts",href:"#contacts"},
    ]
  return (
   <nav className={cn("fixed w-full z-40 transition-all duration-300",
     isScroll ?"py-3 bg-background/80 backdrop-blur-md shadow-xs":"py-5"
   )}>
              <div className='container flex items-center justify-between'>
                         <a href="#hero" className='text-xl font-bold text-primary flex items-center' >

                            <span  className='relative z-10'>
                                                             <span className='text-glow text-foreground mr-2'>Docile Imbereyemaso</span> Porfolio

                            </span>
                         </a>


                         {/* desktop nav */}
                         <div className='hidden md:flex space-x-8'>
                               {navItems.map((item,key)=>(
                            <a href={item.href} key={key} className='text-foreground/80 hover:text-primary transition-colors duration-300'>{item.name}</a>
                           ))}
                         </div>
                          

                         {/* mobile nav */}
              </div>
   </nav>
  )
}

export default Navbar
