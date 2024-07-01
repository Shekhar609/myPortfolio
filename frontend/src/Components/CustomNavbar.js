// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import logo from '../assets/icon/logo.svg'
// import menu from '../assets/icon/menu.svg'


// const CustomNavbar = () => {
//   const[activeLink, setactiveLink] =useState("home");
//   const[scrolled,setScrolled] =useState(false);
//   useEffect(()=>{
//    const onScroll=()=>{
//     if(window.scrollY>50)
//     {
//       setScrolled(true);
//     }
//     else{
//       setScrolled(false);
//     }
//    }
//    window.addEventListener("scroll",onScroll);
//    return()=>{window.removeEventListener("scroll",onScroll)}
//   },[])
//   const onupdateActiveLink=(value)=>{
//       setactiveLink(value);
//   }
//   return (
//     <div>
//       <Navbar expand="lg" className = {scrolled? "scrolled":""}>
//         <Container>
//           <Navbar.Brand href="#home">Home 
//           <img src={''} alt="logo" className="src" />
//         </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" >
//             <span className='navbar-toggler-icon'></span>
//             </Navbar.Toggle>
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#home" className={activeLink=='home'?'active navbar-Link':'navbar-Link'} onClick={()=>onupdateActiveLink('home')}>Home</Nav.Link>
//               <Nav.Link href="#Skills" className={activeLink=='skills'?'active navbar-Link':'navbar-Link'} onClick={()=>onupdateActiveLink('skills')}>Skills</Nav.Link>
//               <Nav.Link href="#Projects" className={activeLink=='projects'?'active navbar-Link':'navbar-Link'} onClick={()=>onupdateActiveLink('projects')}>Projects</Nav.Link>
//               <Nav.Link href="#About" className={activeLink=='about'?'active navbar-Link':'navbar-Link'} onClick={()=>onupdateActiveLink('about')}>About</Nav.Link>
//             </Nav>
//             <span className="navbar-text">
//               <div className="social-icon">
//                <a href="#" img src={menu} alt=""/></a>
//                <a href="#" img src={} alt=""/></a>
//                <a href="#" img src={} alt=""/></a>
//                </div>
//               <button className="vvd" onClick={()=>console.log('connect')><span>let's connect</span>}></button>
//             </span>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default CustomNavbar;
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Shekhar_logo from "../assets/img/Shekhar_logo_1.png";
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <div>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={Shekhar_logo} alt="logo" className="src" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-Link' : 'navbar-Link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#Skills" className={activeLink === 'skills' ? 'active navbar-Link' : 'navbar-Link'} onClick={() => onUpdateActiveLink('Skills')}>Skills</Nav.Link>
              <Nav.Link href="#Projects" className={activeLink === 'projects' ? 'active navbar-Link' : 'navbar-Link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#About" className={activeLink === 'about' ? 'active navbar-Link' : 'navbar-Link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/shekhar-kumar-60a030233/"><img src={navIcon1} alt="Linkedin"/></a>
                <a href="https://www.facebook.com/shekhar.gupta.7798574"><img src={navIcon2} alt="Facebook"/></a>
                <a href="#"><img src={navIcon3} alt="social icon" /></a>
              </div>
              <button className="vvd" onClick={() => console.log('connect')}><span>let's connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
