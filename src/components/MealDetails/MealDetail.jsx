import React from 'react';
import { useNavigate } from 'react-router-dom';

const MealDetail = ({ meal }) => {
    // console.log(meal)
    const { idMeal, strCategory, strMeal, strInstructions, strMealThumb } = meal;
    const navigate = useNavigate()
    return (

        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={strMealThumb} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p>{strInstructions.length > 100 ? strInstructions.slice(0, 100) : strInstructions}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate(`/meal/${idMeal}`)} className="btn btn-base-300">Show Details</button>
                </div>
            </div>
        </div>

    );
};

export default MealDetail;