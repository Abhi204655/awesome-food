import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search';
import Food from '../../Assets/Images/Img1.jpg'
import Heart from '../../Assets/Icons/../../Assets/Icons/Icon feather-heart-color.png';
import Star from '../../Assets/Icons/Icon awesome-star.png';
import Back from '../../Assets/Icons/back-arrow.png';
import './detail.css';

export default function Detail() {
    const rating = parseInt(Math.random() * (5 - 1) + 1);
    let result = []
    for (let i = 0; i < rating; i++) {
        result.push(<img key={i} src={Star} className="star" alt="star" />);
    }
    return (
        <div className="detail-page">
            <div className="detail-top">
                <Search />
                <Link to="/" id="link">
                    <div className="go-back">
                        <img src={Back} alt="back" />
                        <p>Go Back</p>
                    </div>
                </Link>
            </div>
            <div className="detail-box">
                <div className="detail-left">
                    <img src={Food} alt="food" />
                    <div className="ingredients">
                        <h2>Ingredients:</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, inventore magnam quibusdam illo, voluptatum sit totam mollitia repellat nulla amet reiciendis iure quas accusamus eligendi dolorem exercitationem, nam beatae ducimus. Velit suscipit cumque dolorum consequuntur a perferendis? Natus aspernatur recusandae possimus laborum dignissimos. Tenetur eum fuga dolores sunt. Perspiciatis, odit quas. Temporibus nam sed, ipsam perspiciatis accusantium voluptatem iure tempore itaque repudiandae eveniet, perferendis harum placeat corporis dolorum facere neque amet. Eveniet eius excepturi, numquam ut saepe neque eligendi commodi! Accusamus nihil dolores magnam atque. Animi atque distinctio dignissimos ducimus exercitationem velit, soluta odit aperiam explicabo ipsam! At, nihil fuga.</p>
                    </div>

                    <div className="ingredients">
                        <h2>How to prepare:</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate cumque accusamus fuga repudiandae atque molestiae, assumenda voluptas? Eum, sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus similique qui praesentium laudantium placeat consequuntur vitae recusandae id quas? Dolorem voluptatum praesentium quo quaerat numquam.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur assumenda nesciunt illo adipisci cupiditate odit iure magni. Delectus, unde voluptate quis iure voluptatibus sed ad sint consectetur, reprehenderit accusantium sequi deserunt harum mollitia! Labore quis suscipit accusantium aut autem!</p>
                    </div>
                </div>

                <div className="detail-right">
                    <p id="recipe-title">RECIPE</p>
                    <h1>Cheese Burst</h1>
                    <div className="rating">
                        <div className="rating-box">{rating}/5</div>
                        {result}
                    </div>
                    <div className="description">
                        <p id="desc">Description:</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum non praesentium perspiciatis deserunt quod animi magnam provident eligendi dolores dolorem eius at maxime ab molestiae possimus, delectus libero repellat iure tenetur obcaecati! Earum neque similique blanditiis, voluptates dignissimos fuga architecto suscipit illo accusantium aperiam aspernatur, laboriosam nisi tenetur pariatur.</p>
                    </div>
                    <div className="stats">
                        <div className="circle">
                            <h2>8</h2>
                            <h3>Ingredients</h3>
                        </div>

                        <div className="circle">
                            <h2>{parseInt(Math.random() * (400 - 200) + 200)}</h2>
                            <h3>Bucks</h3>
                        </div>

                        <div className="circle">
                            <h2>{parseInt(Math.random() * (45 - 15) + 15)}</h2>
                            <h3>Minutes</h3>
                        </div>
                    </div>
                    <div className="favourite">
                        <p>FAVOURITE THIS RECIPE</p>
                        <img src={Heart} alt="heart" />
                    </div>
                </div>

            </div>

        </div>
    )
}
