import Home from './home';
import {Navigate, Route, Routes} from 'react-router';

let PageRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Navigate to='/home'/>} />
        </Routes>
    )
};

export default PageRoutes;
