import React from 'react';
import './statistics.css';


const randomColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}



export const Statistics = ({ title = '', stats}) => {
 return ( 
  <section className="statistics">
  <h2 className="title">{title !== '' && title}</h2>

   <ul className="stat-list" >
    {stats.map((stat) => {
     return <li className="item" key={stat.id} style={{backgroundColor: randomColor()}}>
      <span className="label">{ stat.label}</span>
      <span className="percentage">{ stat.percentage}%</span>
    </li>
    })}
   
  </ul>
</section>
  )
}