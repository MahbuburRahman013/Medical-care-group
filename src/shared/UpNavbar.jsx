import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const UpNavbar = () => {
    return (
        <div className="lg:h-[60px] container mx-auto justify-around flex lg:items-center">
            <h1 className="uppercase hidden lg:block lg:text-3xl text-xl font-semibold">Medical <span className="text-[#159EEC]">Care</span></h1>

            <div className="flex text-sm flex-wrap lg:gap-7 gap-3">
                <div className="flex gap-1 items-center">
                    <CallIcon sx={{ fontSize: { xs: '16px', sm: '35px' } }}></CallIcon>
                    <div>
                        <p>Emergency</p>
                        <p className="text-[#159EEC]">(237) 681-812-255</p>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <AccessTimeIcon  sx={{ fontSize: { xs: '16px', sm: '35px' } }}></AccessTimeIcon>
                    <div>
                        <p>Emergency</p>
                        <p className="text-[#159EEC]">(237) 681-812-255</p>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <LocationOnIcon  sx={{ fontSize: { xs: '16px', sm: '35px' } }}></LocationOnIcon>
                    <div>
                        <p>Emergency</p>
                        <p className="text-[#159EEC]">(237) 681-812-255</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpNavbar;