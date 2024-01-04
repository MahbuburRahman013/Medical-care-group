import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const MainLayout = () => {
	return (
		<>
			<div>
				<Navbar/>
				<div className='md:mt-[64px] mt-[58px]'><Outlet /></div>
				<Footer />
			</div>
		</>
	);
};

export default MainLayout;
