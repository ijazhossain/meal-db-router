import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleMealDetails = () => {
    const meal = useLoaderData();
    const { idMeal, strYoutube, strMealThumb, strInstructions, strMeal } = meal.meals[0]
    console.log(meal.meals)
    return (
        <div>
            <div className="card w-[50%] glass mx-auto pt-8">
                <figure><img src={strMealThumb} alt="meal" /></figure>
                <div className="card-body">
                    <h2 className="card-title">This is the info of meal : {idMeal}</h2>
                    <h2 className='text-3xl my-8 text-gray-800 font-bold'>{strMeal}</h2>
                    <p>{strInstructions}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-base-300"><a target='_blank' href={strYoutube}>See video</a></button>
                    </div>
                </div>
            </div>
            <h1></h1>

        </div>
    );
};

export default SingleMealDetails;