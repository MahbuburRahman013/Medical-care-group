import HomeTitle from "../../../shared/HomeTitle/HomeTitle";
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';


const OurSpeciality = () => {

    const specials = [
        {
            icon: <HeartBrokenIcon sx={{ fontSize: '50px',}} />,
            title: 'Neurology',
        },
        {
            icon: <HeartBrokenIcon sx={{ fontSize: '50px',}} />,
            title: 'Neurology',
        },
        {
            icon: <HeartBrokenIcon sx={{ fontSize: '50px',}} />,
            title: 'Neurology',
        },
        {
            icon: <HeartBrokenIcon sx={{ fontSize: '50px',}} />,
            title: 'Neurology',
        },
        {
            icon: <HeartBrokenIcon sx={{ fontSize: '50px',}} />,
            title: 'Neurology',
        },
        {
            icon: <HeartBrokenIcon sx={{ fontSize: '50px',}} />,
            title: 'Neurology',
        },
        {
            icon: <HeartBrokenIcon sx={{ fontSize: '50px',}} />,
            title: 'Neurology',
        },
        {
            icon: <HeartBrokenIcon sx={{ fontSize: '50px',}} />,
            title: 'Neurology',
        },
        {
            icon: <HeartBrokenIcon sx={{ fontSize: '50px',}} />,
            title: 'Neurology',
        },
        {
            icon: <HeartBrokenIcon sx={{ fontSize: '50px',}} />,
            title: 'Neurology',
        },
        {
            icon: <HeartBrokenIcon sx={{ fontSize: '50px',}} />,
            title: 'Neurology',
        },
        {
            icon: <HeartBrokenIcon sx={{ fontSize: '50px',}} />,
            title: 'Neurology',
        }
    ];


    return (
        <div className="mt-28 container mx-auto px-5">
            <HomeTitle subTitle={'Always Caring'} title={'Our Specialties'}></HomeTitle>

            <div className="mt-20 grid grid-cols-4 border-t border-l border-r">
                {
                    specials.map((item, index) => {
                        return <div className="border-r border-b flex justify-center items-center flex-col py-10 px-7 text-xl hover:bg-[#1F2B6C] hover:text-gray-50 hover:rounded transition ease-in-out cursor-pointer delay-100 duration-200" key={index}>
                              
                              <span className="text-[#159EEC]">{item.icon}</span>
                              <h1>{item.title}</h1>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default OurSpeciality;

