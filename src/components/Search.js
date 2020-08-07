import React, { useState, useEffect } from 'react'
import className from 'classnames';
import SrhIcon from '../Assets/Icons/Icon feather-search.png';

export default function Search({ text, textChange }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            console.log('opened');
        }
    }, [open])
    return (
        <div className="header">
            <div className="search-bar">
                <div className="input-box">
                    <input type="text" placeholder="Search your favourite recipe..." value={text} onChange={(e) => textChange(e)} className={className({
                        "search-open": open
                    })} />
                    <img src={SrhIcon} alt="search" className="srh-icon" onClick={() => setOpen(!open)} />
                </div>
                <p className={className({
                    'hide-search': open
                })}>Search your favourite recipe...</p>
            </div>
        </div>
    )
}
