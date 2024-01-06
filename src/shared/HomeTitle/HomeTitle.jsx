

const HomeTitle = ({title,subTitle}) => {
    return (
        <div>
             <p className="text-[#159EEC] text-center text-xl font-semibold uppercase">{subTitle}</p>
                <h1 className="text-[#1F2B6C] text-center text-5xl font-bold mt-3">{title}</h1>
        </div>
    );
};

export default HomeTitle;