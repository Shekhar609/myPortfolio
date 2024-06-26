// import React from 'react'
// import {Row} from 'react-bootstrap'
// import {Col} from 'react-bootstrap'
// import { Container } from 'react-bootstrap';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import meter1 from '../assets/img/meter1.svg'
// import meter2 from '../assets/img/meter2.svg'
// import meter3 from '../assets/img/meter3.svg'
// import colorshape from '../assets/img/color-sharp.png'



// const Skills = () => {
//     const responsive = {
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3,
//           slidesToSlide: 3 // optional, default to 1.
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2,
//           slidesToSlide: 2 // optional, default to 1.
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1,
//           slidesToSlide: 1 // optional, default to 1.
//         }
//       };
//   return (
//     <div className='skill' id="skills">
//         <Container>
//             <Row >
//                 <Col>
//                 <div className='skill-bx'>
//                    <h2>Skills</h2>
//                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nobis tempora ab dolores inventore veniam! Natus veniam inventore doloribus, enim voluptate quibusdam odit, perspiciatis minima vel in sunt magnam rerum.</p>
//                    <Carousel responsive={responsive} infinite={true} className='skill-slider'></Carousel>
//                    <div className='item'>
//                     <img src={meter1} alt="Image"  />
//                     <h5>Machine Learning</h5>
//                    </div>
//                    <div className='item'>
//                     <img src={meter2} alt="Image"  />
//                     <h5>Web Developement</h5>
//                    </div>
//                    <div className='item'>
//                     <img src={meter3} alt="Image"  />
//                     <h5>web Designer</h5>
//                    </div>
//                    <div className='item'>
//                     <img src={meter1} alt="Image"  />
//                     <h5>Artificial Intelligence</h5>
//                    </div>
//                 </div>
//                 </Col>
//             </Row>
//         </Container>
//         <img className='background-image-left'  src={colorshape} />
      
//     </div>
//   )
// }

// export default Skills
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorshape from '../assets/img/color-sharp.png';

const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className='skill' id="skills">
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nobis tempora ab dolores inventore veniam! Natus veniam inventore doloribus, enim voluptate quibusdam odit, perspiciatis minima vel in sunt magnam rerum.</p>
              <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                <div className='item'>
                  <img src={meter1} alt="Machine Learning" />
                  <h5>Machine Learning</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt="Web Development" />
                  <h5>Web Development</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt="Web Designer" />
                  <h5>Web Designer</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt="Artificial Intelligence" />
                  <h5>Artificial Intelligence</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorshape} alt="Background" />
    </div>
  );
}

export default Skills;

