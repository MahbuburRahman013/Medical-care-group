import { Button } from "@mui/material";
import BannerCard from "../bannerCard/BannerCard";

const Banner = () => {
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/7Qk1Jpw/Group-94-Photo-Room.png')] h-[80vh] bg-no-repeat bg-cover bg-center flex items-center">
                <div className="md:w-[50%] md:ml-32 ml-10">
                    <p className="text-[#159EEC] text-2xl font-semibold">Caring for Life</p>
                    <h1 className="text-[#1F2B6C] text-3xl md:text-6xl font-bold">Leading the Way<br /> in Medical Excellence</h1>

                    <Button sx={{ borderRadius: '25px', marginTop: '40px', padding: '10px 30px', backgroundColor: '#BFD2F8', color: 'black' }} variant="contained">Our Services</Button>
                </div>
            </div>
            <div className="absolute hidden lg:block container left-10 bottom-[-40px]">
                <BannerCard></BannerCard>
            </div>
        </div>
    );
};

export default Banner;