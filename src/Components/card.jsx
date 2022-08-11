import react from 'react';
import ellipsis from '../Images/icon-ellipsis.svg';

import './style.css';
import '../Objetc/objetos.jsx';
 
function Card ({icon, name, number, hrs, names }){
	const cardClass = `card ${names}`
    return(
        <header className="header">
          <div className="card-content">
            <div className={cardClass}>
				<img className='icon'
          		src={require(`../Images/icon-${icon}.svg`)}
          		alt={icon}			
          		/>
            </div>
            <div className='card-container'>
				<div className='cards'>
					<h2 className='name-card'>{name}</h2>
					<span className='time'>{hrs}hrs</span>
				</div>
				<div className='card-text'>
					<img className='ellipsis' src={ellipsis} alt="ellipsis" />
					<span className='week'>Last Week - {number}hrs</span>
				</div>
	        </div>
          </div>
        </header>
    )

}

export default Card;