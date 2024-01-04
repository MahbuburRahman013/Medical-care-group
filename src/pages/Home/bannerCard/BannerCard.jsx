import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const BannerCard = () => {
    return (
        <div className='container mx-auto flex justify-center items-center gap-10'>
            <div className='py-6 px-10 bg-gray-400 flex rounded-md cursor-pointer  items-center gap-2'>
                <p className='text-xl font-semibold'>Book an Appointment</p>
                <div><CalendarMonthIcon sx={{fontSize:'50px'}}></CalendarMonthIcon></div>
            </div>
            <div className='py-6 px-10 bg-gray-400 flex rounded-md cursor-pointer  items-center gap-2'>
                <p className='text-xl font-semibold'>Book an Appointment</p>
                <div><CalendarMonthIcon sx={{fontSize:'50px'}}></CalendarMonthIcon></div>
            </div>
            <div className='py-6 px-10 bg-gray-400 flex rounded-md cursor-pointer items-center gap-2'>
                <p className='text-xl font-semibold'>Book an Appointment</p>
                <div><CalendarMonthIcon sx={{fontSize:'50px'}}></CalendarMonthIcon></div>
            </div>
        </div>
    );
};

export default BannerCard;