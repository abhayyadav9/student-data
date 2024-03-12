// src/Card.js
function Card({ name, role, course, year }) {
    return (
      <div className="card">
        <h3>{name}</h3>
        <h6>{role}</h6>
        <h6>{course}</h6>
        <h6>{year}</h6>
      </div>
    );
  }
  
  export default Card;
  