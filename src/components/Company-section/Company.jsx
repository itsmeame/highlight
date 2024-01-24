
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



