import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const BannerCard = () => {
    return (
        <div className='mx-auto flex justify-center items-center gap-10'>
            <div className='py-6 px-10 bg-[#1F2B6C] hover:bg-[#29357e] text-white flex rounded-md cursor-pointer  items-center gap-2'>
                <p className='text-xl font-semibold'>Book an Appointment</p>
                <div><CalendarMonthIcon sx={{fontSize:'50px'}}></CalendarMonthIcon></div>
            </div>
            <div className='py-6 px-10 bg-[#BFD2F8] hover:bg-[#9cb0d9] flex rounded-md cursor-pointer  items-center gap-2'>
                <p className='text-xl font-semibold'>Book an Appointment</p>
                <div><CalendarMonthIcon sx={{fontSize:'50px'}}></CalendarMonthIcon></div>
            </div>
            <div className='py-6 px-10 bg-[#159EEC] hover:bg-[#1391d9] text-white flex rounded-md cursor-pointer items-center gap-2'>
                <p className='text-xl font-semibold'>Book an Appointment</p>
                <div><CalendarMonthIcon sx={{fontSize:'50px'}}></CalendarMonthIcon></div>
            </div>
        </div>
    );
};

export default BannerCard;