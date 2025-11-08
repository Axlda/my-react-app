import { useState } from 'react'
import ProfileCard from './ProfileCard';

import StaggeredMenu from './StaggeredMenu';
import { div } from 'three/tsl';




function App() {
  const [count, setCount] = useState(0)


  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Projects', ariaLabel: 'View our services', link: '/services' },

  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://x.com/abodjalal_' },
    { label: 'Instgram', link: 'https://www.instagram.com/abodjalal_/' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/abdulkader-jalal-718379341/' }
  ];




  return (
    <>

         
           {/* ProfileCard */}
         <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-white text-6xl mb-10 z-10 font-sans-serif">Abdo's Blog</h1>
        <ProfileCard
          name="Abdulkader
            Jalal"
          title="Software Engineering Student"
          handle="Freshman Software Engineering student at IUS | Passionate about coding."
          status=""
          contactText=""
          avatarUrl="/A.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={true}
          onContactClick={() => console.log('Contact clicked')}
          className="z-10"
          innerGradient="linear-gradient(10deg,#03162e 0%,#03272e 10%)"
          behindGlowEnabled={true}
        />
      </div>

      
      
      
      
      {/* Staggered Menu */}
      <div style={{ height: '100vh', background: '#010616ff' }}>
        <StaggeredMenu
          position="left"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={false}
          logoUrl = "/react.svg"
          menuButtonColor="#ffffffff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#a6f17bff', '#9aff27ff']}
          //logoUrl="src/assets/react.svg"
          accentColor="#021a63ff"
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
          
   
    
        />
      </div>
    </>

    

  )
}

export default App
