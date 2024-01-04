// import React from "react";
// import { Container, Row, Col } from "reactstrap";

// const Company = () => {
//   return (
//     <section>
//       <Container>
//         <Row>
//           <Col lg="2" md="3" sm="4" xs="6">
//             <h3 className=" d-flex align-items-center gap-1">
//               <i class="ri-vimeo-line"></i> Vimeo
//             </h3>
//           </Col>

//           <Col lg="2" md="3" sm="4" xs="6">
//             <h3 className=" d-flex align-items-center gap-1">
//               <i class="ri-pinterest-line"></i> Pinterest
//             </h3>
//           </Col>

//           <Col lg="2" md="3" sm="4" xs="6">
//             <h3 className=" d-flex align-items-center gap-1">
//               <i class="ri-dribbble-line"></i> Dribble
//             </h3>
//           </Col>

//           <Col lg="2" md="3" sm="4" xs="6">
//             <h3 className=" d-flex align-items-center gap-1">
//               {" "}
//               <i class="ri-apple-fill"></i> Apple
//             </h3>
//           </Col>

//           <Col lg="2" md="3" sm="4" xs="6">
//             <h3 className=" d-flex align-items-center gap-1">
//               {" "}
//               <i class="ri-finder-fill"></i> Finder
//             </h3>
//           </Col>

//           <Col lg="2" md="3" sm="4" xs="6">
//             <h2 className=" d-flex align-items-center gap-1">
//               {" "}
//               <i class="ri-google-fill"></i> Google
//             </h2>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Company;
import React from 'react';
import PipeLogo from '../../assests/images/pipe.png'; // Replace with actual paths for other logos
import PortalLogo from '../../assests/images/portal.png';
import DriposLogo from '../../assests/images/dripos.png';
import KnockLogo from '../../assests/images/knock.png';
import HightouchLogo from '../../assests/images/hightouch.png';
import BasedashLogo from '../../assests/images/basedash.png';
import ImpiraLogo from '../../assests/images/impira.png';
import MageLogo from '../../assests/images/mage.png';
import AirplaneLogo from '../../assests/images/airplane.png';
import SecodaLogo from '../../assests/images/secoda.png';
import "./company-section.css";
const Company = () => {
  const customers = [
    {  logo: PipeLogo },
    { logo: PortalLogo },
    {  logo: DriposLogo },
    {  logo: KnockLogo },
    {  logo: HightouchLogo },
    {  logo: BasedashLogo },
    {  logo: ImpiraLogo },
    {  logo: MageLogo },
    {  logo: AirplaneLogo },
    {  logo: SecodaLogo},

    
  ];

  return (
    <div className='company-header'>
      <h2>Our Customers</h2>
      <p>Highlight powers forward-thinking companies.<span className="more-about-btn">More about our customers →</span></p>
      <div className='logos-container'>
        {customers.map((customer, index) => (
          <CustomerBox key={index}  logo={customer.logo} />
        ))}
      </div>
    </div>
  );
};

const CustomerBox = ({logo }) => {
  return (
    <div>
     
      <img src={logo} alt={"Customer Logo"} />
    </div>
  );
};

export default Company;



