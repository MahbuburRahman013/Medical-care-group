import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { Button } from '@mui/material';
import { useState } from 'react';
import '../../../index.css'
import CircleIcon from '@mui/icons-material/Circle';
import HomeTitle from '../../../shared/HomeTitle/HomeTitle';

const OurServices = () => {

    const freeCheckup = [
        {
            title: 'Free Checkup',
            Icon: <MedicalServicesIcon sx={{ fontSize: '40px' , color:'#159EEC'}} />
        },
        {
            title: 'Free Checkup',
            Icon: <MedicalServicesIcon sx={{ fontSize: '40px' , color:'#159EEC'}} />
        },
        {
            title: 'Free Checkup',
            Icon: <MedicalServicesIcon sx={{ fontSize: '40px' , color:'#159EEC'}} />
        },
        {
            title: 'Free Checkup',
            Icon: <MedicalServicesIcon sx={{ fontSize: '40px' , color:'#159EEC'}} />
        },
        {
            title: 'Free Checkup',
            Icon: <MedicalServicesIcon sx={{ fontSize: '40px' , color:'#159EEC'}} />
        },
        {
            title: 'Free Checkup',
            Icon: <MedicalServicesIcon sx={{ fontSize: '40px' , color:'#159EEC'}} />
        }
    ];

    const [isTrue, setIsTrue] = useState(true);




    return (
        <div className="container px-5 mx-auto mt-20">
            <div className="mb-16">
               <HomeTitle title={'Our Services'} subTitle={'Care you can believe in'}></HomeTitle>
            </div>

            <div className='flex lg:justify-between justify-center items-center'>
                <div className='border border-gray-400 lg:h-[506px] no-scrollbar overflow-y-auto'>
                    {isTrue ?
                        <div>
                            <div className='grid lg:grid-cols-1 md:grid-cols-3 grid-cols-2'>
                            {
                                freeCheckup.slice(0, 4).map((item, index) => {
                                    const { title, Icon } = item;

                                    return <div className='py-6 hover:bg-[#1F2B6C] hover:text-gray-50 transition ease-in-out cursor-pointer delay-100 duration-200 text-gray-600 px-7 text-center' key={index}>
                                        {Icon}
                                        <h1 className='text-xl'>{title}</h1>
                                    </div>
                                }
                                )
                            }
                            </div>
                            <Button onClick={() => setIsTrue(!isTrue)} sx={{ width: '100%', backgroundColor: '#1F2B6C', borderRadius: '0px', fontSize: '16px' }} variant="contained">View All</Button>
                        </div> :
                        <div>
                            <div className='grid lg:grid-cols-1 md:grid-cols-3  grid-cols-2'>
                            {
                                freeCheckup.map((item, index) => {
                                    const { title, Icon } = item;

                                    return <div className='py-6 hover:bg-[#1F2B6C] hover:text-gray-50 transition ease-in-out delay-100 cursor-pointer duration-200 text-gray-600 px-7 text-center' key={index}>
                                        {Icon}
                                        <h1 className='text-xl'>{title}</h1>
                                    </div>
                                }
                                )
                            }
                            </div>
                            <Button onClick={() => setIsTrue(!isTrue)} sx={{ width: '100%', backgroundColor: '#1F2B6C', borderRadius: '0px', fontSize: '16px' }} variant="contained">See Less</Button>
                        </div>

                    }
                </div>
                <div className='w-[50%] lg:block hidden'>
                    <h1 className="text-3xl font-semibold text-gray-600">A passion for putting patients first.</h1>
                    <div className="grid grid-cols-2 gap-x-10 gap-y-1 mt-12">
                        <p className="flex items-center gap-4"><CircleIcon sx={{color:'#159EEC'}}/> <span className="text-xl text-gray-500">A Passion for Healing</span></p>
                        <p className="flex items-center gap-4"><CircleIcon sx={{color:'#159EEC'}}/> <span className="text-xl text-gray-500">5-Star Care</span></p>
                        <p className="flex items-center gap-4"><CircleIcon sx={{color:'#159EEC'}}/> <span className="text-xl text-gray-500">All our best</span></p>
                        <p className="flex items-center gap-4"><CircleIcon sx={{color:'#159EEC'}}/> <span className="text-xl text-gray-500">Believe in Us</span></p>
                        <p className="flex items-center gap-4"><CircleIcon sx={{color:'#159EEC'}}/> <span className="text-xl text-gray-500">A Legacy of Excellence</span></p>
                        <p className="flex items-center gap-4"><CircleIcon sx={{color:'#159EEC'}}/> <span className="text-xl text-gray-500">Always Caring</span></p>
                    </div>
                    <p className="text-base text-gray-600 mt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                    <p className="text-base text-gray-600 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
                </div>
                <div className="lg:flex flex-col gap-y-5 hidden">
                    <div className='relative'>
                        <img src="https://i.ibb.co/th8dsfL/Rectangle-14.png" alt="" />
                        <div className="h-2 mx-auto bg-[#BFD2F8]">
                            <div className="h-2 bg-[#1F2B6C] w-[80%] mx-auto"></div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="https://i.ibb.co/q0bmFtV/Rectangle-13.png" alt="" />
                        <div className="h-2 mx-auto bg-[#BFD2F8]">
                            <div className="h-2 bg-[#1F2B6C] w-[80%] mx-auto"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;