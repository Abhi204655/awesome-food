import React from 'react'
import Header from '../Header';
import Spinner from '../Spinner/Spinner';
import Card from '../Card';

export default function Main({ dishes, text, textChange }) {
    return (
        <div>
            <Header text={text} textChange={textChange} />
            <div className="card-container">
                {dishes.length === 0 ? (
                    <Spinner />
                ) : (
                        dishes.map(dish => <Card key={dish.id} dish={dish} />)
                    )}

            </div>
        </div>
    )
}
