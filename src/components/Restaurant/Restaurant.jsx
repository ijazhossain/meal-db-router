import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MealDetail from '../MealDetails/MealDetail';

const Restaurant = () => {
    const meals = useLoaderData();
    // console.log(meals.meals);
    return (
        <div className='w-[80%] mx-auto '>
            <h1 className='text-center text-3xl text-gray-800 font-bold my-12'>Welcome to my restaurant</h1>
            <div className='grid md:grid-cols-2 gap-8'>
                {
                    meals.meals.map(meal => <MealDetail
                        key={meal.idMeal}
                        meal={meal}
                    />)
                }
            </div>
        </div>
    );
};

export default Restaurant;