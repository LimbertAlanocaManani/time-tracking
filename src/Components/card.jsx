import ellipsis from "../Images/icon-ellipsis.svg";
import "./style.css";

function Card({ icon, name, number, hrs, names }) {
  const cardClass = `card ${names}`;
  return (
    <div className="card-content">
      <div className={cardClass}>
        <img
          className="icon"
          src={require(`../Images/icon-${icon}.svg`)}
          alt={icon}
        />
      </div>
      <div className="card-container">
        <div className="cards">
          <h2 className="name-card">{name}</h2>
          <img className="ellipsis" src={ellipsis} alt="ellipsis" />
        </div>
        <div className="card-text">
          <div className="time">{hrs}hrs</div>
          <div className="week">Last Week - {number}hrs</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
