import React from 'react'
import { useState, useEffect } from 'react';
import { Container,Row ,Col} from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg';
const Banner = () => {
    const [loopnum, setloopnum]=useState(0);
    const[isDeleting,setisDeleting] = useState(false);
    const [text, settext]=useState('');
    const toRotate=['Web Developer', 'Web Designer','Machine learning'];
    const[Delta, setDelta]  = useState(300-Math.random()*100);
    const period=2000;
    useEffect(()=>{
        let ticker =setInterval(()=>{
            tick();
        },Delta)
       return()=>{ clearInterval(ticker);
   }
}, [text])
const tick=()=>{
    let i=loopnum % toRotate.length;
    let fulltext= toRotate[i];
    let updatetext= isDeleting ? fulltext.substring(0,text.length-1):fulltext.substring(0,text.length+1);
    settext(updatetext);

    if(isDeleting)
    {
      setDelta(prevDelta=> prevDelta/2); 
    }
    if(!isDeleting && updatetext === fulltext)
    {
        setisDeleting(true);
        setDelta(period);

        }
        else if(isDeleting && fulltext==='')
        {
            setisDeleting(false);
            setloopnum(loopnum+1);
            setDelta(500);
        }
};

  return (
    <div className='banner' id ="home"> 
      <Container>
       <Row className='align-items-center'>
       <Col xs={12} md={6} xl={7}>
          <span className='tagline'>Welcome to my Portfolio</span>
          <h1>{'Hi I am Shekhar Kumar Artficilial Engineer and '}<span className='wrap'>{text}</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cum laborum cupiditate. Itaque exercitationem, tempora molestias nesciunt eius sunt culpa ad expedita pariatur magnam excepturi officiis eveniet ducimus recusandae neque!</p>
          <button onClick={()=>{console.log('connect')}}>Let's Connect <ArrowRightCircle size={25}/></button>
       </Col>
       <Col xs={12} md={6} xl={7}>
        <span className='header Img'>
            <img src={headerImg} alt="header Img"/>

        </span>
       </Col>
       </Row>
      </Container>
    </div>
  )
}

export default Banner
