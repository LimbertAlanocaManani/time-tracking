import React from 'react';
import image from '../Images/image-jeremy.png';
import '../Profile/style.css'
function Profile(){
    return(
        <header className="header">
          <div className="profile-header">
            <div className="profile-container">
              <img className="image-jeremy" src={image} alt="jeremy" />
              <div className="text-container">
                <h4 className="info"> Report for</h4>
                <h2 className="name">Jeremy Robson</h2>
              </div>
            </div>  
            <div className="profile-content">
              <span className="profile daily">Daily</span>
              <span className="profile weekly">Weekly</span>
              <span className="profile monthly">Monthly</span>
            </div>
          </div>
        </header>
        
    )
}
export default Profile;