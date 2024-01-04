import React from 'react';

import './open.css'; 
import GitHubLogo from '../../assests/images/opemIMg1.png'; 
import DiscordLogo from '../../assests/images/openImg.png';



 const Opens=()=>{

 

  return (
    <div className="community-box">
      <div className='inner-box'>
        <h3>
          Join our <span className="highlight">open source</span> community
        </h3>

        <p>
          Have a feature request? Or want to help build the future of Highlight?<br/>
          Check us out and join the fun!
        </p>
        <div className="bttons">
        <button className="git-button">
          <img src={GitHubLogo} alt="GitHub" className="log" />
          GitHub
        </button>

        <button className="disc-button">
          <img src={DiscordLogo} alt="Discord" className="log" />
          Discord
        </button>
      </div>

        
         
        </div>
      </div>

  );
};

export default Opens;
