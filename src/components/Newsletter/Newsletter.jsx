// import React from "react";
// import "./newsletter.css";
// import { Container, Row, Col } from "reactstrap";

// const Newsletter = () => {
//   return (
//     <section className="subs">
//       <Container className="newsletter">
//         <Row>
//           <Col lg="12" className="text-center">
//             <h2 className="mb-4">Subscribe Our Packages</h2>
//             <div className="subscribe">

//               <button className="btn">Subscribe</button>
//             </div> 
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Newsletter;
// Newsletter.jsx

import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";


const Newsletter = () => {
  return (
    <section className="subs">
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
          <h2 className="mb-4">
       Get the <span className="highlight">visibility</span> you <br/> need
      </h2>
            <button className="subscribe-btn">Get started for free</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
