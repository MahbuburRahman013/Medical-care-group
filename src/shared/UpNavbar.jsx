import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const UpNavbar = () => {
    return (
        <div className="h-[60px] container mx-auto justify-around flex items-center">
            <h1 className="uppercase text-3xl font-semibold">Medical <span className="text-[#159EEC]">Care</span></h1>

            <div className="flex gap-7">
                <div className="flex gap-1 items-center">
                    <CallIcon sx={{ fontSize: '35px' }}></CallIcon>
                    <div>
                        <p>Emergency</p>
                        <p className="text-[#159EEC]">(237) 681-812-255</p>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <AccessTimeIcon sx={{ fontSize: '35px' }}></AccessTimeIcon>
                    <div>
                        <p>Emergency</p>
                        <p className="text-[#159EEC]">(237) 681-812-255</p>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <LocationOnIcon sx={{ fontSize: '35px' }}></LocationOnIcon>
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