import { Outlet } from 'react-router-dom';
import Header from '../pages/Share/Header/Header';
import Footer from '../pages/Share/Footer/Footer';

const Main = () => {
    return (
        <div className="w-full bg-[#424242]">
            <Header/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;