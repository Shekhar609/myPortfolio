// // import { Col } from "react-bootstrap";
// // //import {Link} from "react-router-dom"
// // export const ProjectCard = ({ title, description, imgUrl1 }) => {
// //   return (
// //     <Col size={12} sm={6} md={4}>
// //       <div className="proj-imgbx">
        
// //         <img src={imgUrl1} />
// //         <div className="proj-txtx">
// //           <h4>{title}</h4>
// //           <span>{description}</span>
// //         </div>
// //       </div>
// //     </Col>
// //   )
// // }
// import { Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export const ProjectCard = ({ title, description, projects=[]}) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         {projects.map((project, index) => (
//           <Link key={index} to={project.link}>
//             <img src={project.imgUrl} alt={`${title} ${index + 1}`} />
//           </Link>
//         ))}
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   );
// };
// export default ProjectCard;
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Link to={link}>
      <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </Link>
    </Col>
  );
};

export default ProjectCard;
