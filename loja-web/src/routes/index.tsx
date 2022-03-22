import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Main from '../pages/Main';
import Profile from '../pages/Profile';
import Games from '../pages/Games';

const RoutesOfApp: React.FC = () => {
    return(
        <Routes>
            <Route path='/'  element={<Main />}/>
            <Route path='/profile'  element={<Profile />}/>
            <Route path='/games'  element={<Games />}/>
        </Routes>
    );
}

export default RoutesOfApp;