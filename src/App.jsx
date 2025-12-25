import { useState } from 'react'
import ProfileCard from './ProfileCard';
import BubbleMenu from './BubbleMenu'
//import StaggeredMenu from './StaggeredMenu';
import { div } from 'three/tsl';




function App() {
  const [count, setCount] = useState(0)


  // const menuItems = [
  //   { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  //   { label: 'Projects', ariaLabel: 'View our services', link: '/services' },

  // ];

  // const socialItems = [
  //   { label: 'Twitter', link: 'https://x.com/abodjalal_' },
  //   { label: 'Instgram', link: 'https://www.instagram.com/abodjalal_/' },
  //   { label: 'LinkedIn', link: 'https://www.linkedin.com/in/abdulkader-jalal-718379341/' }
  // ];


  const items = [
    {
      label: 'home',
      href: '#',
      ariaLabel: 'Home',
      rotation: -8,
      hoverStyles: { bgColor: '#1e34f8ff', textColor: '#ffffff' }
    },
    {
      label: 'projects',
      href: '#',
      ariaLabel: 'Projects',
      rotation: 8,
      hoverStyles: { bgColor: '#1e34f8ff', textColor: '#ffffff' }
    },
    {
      label: 'Instgram',
      href: 'https://www.instagram.com/abodjalal_/',
      ariaLabel: 'Blog',
      rotation: 8,
      hoverStyles: { bgColor: '#1e34f8ff', textColor: '#ffffff' }
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abdulkader-jalal-718379341/',
      ariaLabel: 'Contact',
      rotation: -8,
      hoverStyles: { bgColor: '#1e34f8ff', textColor: '#ffffff' }
    }
  ];

  return (
    <>



      <BubbleMenu
        logo={<span style={{ fontWeight: 700 }}>Abdo's Blog</span>}
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />



      {/* ProfileCard */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-white text-6xl mb-10 z-10 font-sans-serif"></h1>
        <ProfileCard
          name="Abdulkader
            Jalal"
          title="Software Engineering Student"
          handle="Freshman Software Engineering student at IUS | Passionate about coding................."
          status=""
          grainUrl='<Placeholder for grain URL>'
          mobileTiltSensitivity={1}
          contactText=""
          iconUrl='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cleanpng.com%2Ffree%2Fcode-icon.html&psig=AOvVaw0BOpMq_u20UoC_4oblrFjz&ust=1762719015778000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiD6Jiu45ADFQAAAAAdAAAAABAL'
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
      {/* <div style={{ height: '100vh', background: '#010616ff' }}>
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
      </div> */}
    </>



  )
}

export default App