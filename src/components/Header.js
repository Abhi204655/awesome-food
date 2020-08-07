import React from 'react'
import Search from './Search';

export default function Header({ text, textChange }) {
    return (
        <div className="header-container">

            <Search text={text} textChange={textChange} />
            <div className="category">
                <div className="category-inner">
                    <p>CATEGORY</p>
                    <h2>Pizza & Noodles</h2>
                </div>
            </div>
        </div>
    )
}
