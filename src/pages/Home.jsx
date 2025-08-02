import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StartBackground from '../components/StartBackground'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* Theme toggle */}
   <ThemeToggle/>

        {/* Background Effect */}
                <StartBackground/>
        {/* Navbar */}

            {/* Main Content */}


                  {/* Footer */}
    </div>
  )
}

export default Home
