import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import className from 'classnames';
import Heart from '../Assets/Icons/Icon feather-heart.png';
import Clock from '../Assets/Icons/Icon feather-clock.png';


export default function Card({ dish }) {

    const [full, setFull] = useState(false);

    return (
        <div className="card" onMouseEnter={() => setFull(true)} onMouseLeave={() => setFull(false)}>
            <div className="card-img">
                <div className="tag">In {dish.category}</div>
                <img src={dish.image} alt="food" className="food-image" />
            </div>
            <div className="card-data">
                <div className="card-data-top">
                    <div className="card-top-left">
                        <h2 className="card-title">{dish.name}</h2>
                        <div className="card-timing">
                            <img src={Clock} alt="clock-icon" />
                            <p className="time">{parseInt(Math.random() * (40 - 15) + 15)} mins</p>
                        </div>
                    </div>
                    <div className="card-top-right">
                        <img src={Heart} alt="heart-icon" className="heart" />
                    </div>
                </div>
                <div className="card-desc">
                    {dish.description}
                </div>
            </div>
            <div className={className("card-hover-container", {
                "card-hover-container-show": full
            })}>
                <div className={className("card-hover")}>
                    <Link to={`/${dish.id}`}>VIEW MORE</Link>
                    <Link to={`/${dish.id}`}>QUICK VIEW</Link>
                </div>
            </div>
        </div>
    )
}
