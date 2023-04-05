import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const Home = () => {
    const navigation = useNavigation()
    return (
        <div className='container mx-auto'>
            <Header />
            <div className='text-center'>
                {
                    navigation.state === 'loading' && <Spinner />
                }
            </div>
            <Outlet />
        </div>
    );
};

export default Home;