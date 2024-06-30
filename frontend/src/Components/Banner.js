// import React from 'react'
// import { useState, useEffect } from 'react';
// import { Container,Row ,Col} from 'react-bootstrap'
// import { ArrowRightCircle } from 'react-bootstrap-icons'
// import headerImg from '../assets/img/header-img.svg';
// const Banner = () => {
//     const [loopnum, setloopnum]=useState(0);
//     const[isDeleting,setisDeleting] = useState(false);
//     const [text, settext]=useState('');
//     const toRotate=['Web Developer', 'Web Designer','Machine learning'];
//     const[Delta, setDelta]  = useState(300-Math.random()*100);
//     const period=2000;
//     useEffect(()=>{
//         let ticker =setInterval(()=>{
//             tick();
//         },Delta)
//        return()=>{ clearInterval(ticker);
//    }
// }, [text])
// const tick=()=>{
//     let i=loopnum % toRotate.length;
//     let fulltext= toRotate[i];
//     let updatetext= isDeleting ? fulltext.substring(0,text.length-1):fulltext.substring(0,text.length+1);
//     settext(updatetext);

//     if(isDeleting)
//     {
//       setDelta(prevDelta=> prevDelta/2); 
//     }
//     if(!isDeleting && updatetext === fulltext)
//     {
//         setisDeleting(true);
//         setDelta(period);

//         }
//         else if(isDeleting && fulltext==='')
//         {
//             setisDeleting(false);
//             setloopnum(loopnum+1);
//             setDelta(500);
//         }
// };

//   return (
//     <div className='banner' id ="home"> 
//       <Container>
//        <Row className='align-items-center'>
//        <Col xs={12} md={6} xl={7}>
//           <span className='tagline'>Welcome to my Portfolio</span>
//           <h1>{'Hi I am Shekhar Kumar Artficilial Engineer and '}<span className='wrap'>{text}</span></h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cum laborum cupiditate. Itaque exercitationem, tempora molestias nesciunt eius sunt culpa ad expedita pariatur magnam excepturi officiis eveniet ducimus recusandae neque!</p>
//           <button onClick={()=>{console.log('connect')}}>Let's Connect <ArrowRightCircle size={25}/></button>
//        </Col>
//        <Col xs={12} md={6} xl={7}>
//         <span className='header Img'>
//             <img src={headerImg} alt="header Img"/>

//         </span>
//        </Col>
//        </Row>
//       </Container>
//     </div>
//   )
// }

// export default Banner


// import React from 'react'
// import { useState, useEffect } from 'react';
// import { Container,Row ,Col} from 'react-bootstrap'
// import { ArrowRightCircle } from 'react-bootstrap-icons'
// import headerImg from '../assets/img/header-img.svg';
// const Banner = () => {
//     const [loopnum, setloopnum]=useState(0);
//     const[isDeleting,setisDeleting] = useState(false);
//     const [text, settext]=useState('');
//     const toRotate=['Web Developer', "Buisness Consultant",'Machine learning'];
//     const[Delta, setDelta]  = useState(300-Math.random()*100);
//     const period=2000;
//     useEffect(()=>{
//         let ticker =setInterval(()=>{
//             tick();
//         },Delta)
//        return()=>{ clearInterval(ticker);
//    }
// }, [text])
// const tick=()=>{
//     let i=loopnum % toRotate.length;
//     let fulltext= toRotate[i];
//     let updatetext= isDeleting ? fulltext.substring(0,text.length-1):fulltext.substring(0,text.length+1);
//     settext(updatetext);

//     if(isDeleting)
//     {
//       setDelta(prevDelta=> prevDelta/2); 
//     }
//     if(!isDeleting && updatetext === fulltext)
//     {
//         setisDeleting(true);
//         setDelta(period);

//         }
//         else if(isDeleting && fulltext==='')
//         {
//             setisDeleting(false);
//             setloopnum(loopnum+1);
//             setDelta(500);
//         }
// };

//   return (
//     <div className='banner' id ="home"> 
//       <Container>
//        <Row className='align-items-center'>
//        <Col xs={12} md={6} xl={7}>
//           <span className='tagline'>Welcome to my Portfolio</span>
//           <h1>{'Hi I am Shekhar Kumar Artficilial Engineer and '}<span className='wrap'>{text}</span></h1>
//           <p>I am a third-year B.Tech Computer Science student with internships in Data Science, Data Analytics, and Web Development. Passionate about entrepreneurship, I develop solutions for business growth. I continuously learn new technologies to stay ahead. In my free time, I enjoy creating innovative concepts.</p>
//           <button onClick={()=>{console.log('connect')}}>Let's Connect <ArrowRightCircle size={25}/></button>
//        </Col>
//        <Col xs={12} md={6} xl={7}>
//         <span className='header Img'>

//         </span>
//        </Col>
//        </Row>
//       </Container>
//     </div>
//   )
// }

// export default Banner


import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const toRotate = ['Web Developer', 'Business Consultant', 'Machine Learning'];
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => { clearInterval(ticker); };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updateText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className='banner' id="home">
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>{'Hi I am Shekhar, Artificial Intelligence Engineer and '}<span className='wrap'>{text}</span></h1>
            <p>I am a third-year B.Tech Computer Science student with internships in Data Science, Data Analytics, and Web Development. Passionate about entrepreneurship, I develop solutions for business growth. I continuously learn new technologies to stay ahead. In my free time, I enjoy creating innovative concepts.</p>
            <button onClick={() => { console.log('connect'); }}>Let's Connect <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <span className='header Img'>
              <img src={headerImg} alt="Header Image" />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;

