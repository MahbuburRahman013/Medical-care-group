import { Button } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Welcome = () => {
    return (
        <div className="mt-32">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <p className="text-[#159EEC] text-center text-xl font-semibold uppercase">Welcome to Medical Care Hospital</p>
                <h1 className="text-[#1F2B6C] text-center text-5xl font-bold mt-3">A Great Place to Receive Care</h1>
                <p className="w-[53%] text-center mt-1 text-gray-500 text-base font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                <Button sx={{ fontSize: '16px', color: '#159EEC', fontWeight: '600', marginTop: '25px' }} endIcon={<ArrowRightAltIcon />} color="secondary">Secondary</Button>
            </div>

            <div className="container mx-auto">
                <div className="relative h-[150px] w-[90%] mx-auto lg:h-[350px] md:h-[250px] mt-11 md:mt-24">
                    <img src="https://i.ibb.co/1068h1B/Blackdoctors-1.png" alt="" className="h-full w-full absolute object-fill" />
                </div>
                <div className="h-2 w-[90%] mx-auto bg-[#BFD2F8]">
                    <div className="h-2 bg-[#1F2B6C] w-[90%] mx-auto"></div>
                </div>
            </div>

        </div>
    );
};

export default Welcome;