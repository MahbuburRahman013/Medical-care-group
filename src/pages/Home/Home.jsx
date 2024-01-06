import Banner from "./banner/Banner";
import Booking from "./booking/Booking";
import OurSpeciality from "./ourSpeciality/OurSpeciality";
import OurServices from "./our_services/OurServices";
import Welcome from "./welcome/Welcome";

const Home = () => {
	return (
		<>
			<Banner></Banner>
			<Welcome></Welcome>	
			<OurServices></OurServices>
			<OurSpeciality></OurSpeciality>
			<Booking></Booking>
		</>
	);
};

export default Home;
