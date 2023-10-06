import banner from "../../../../assets/banner.jpg";

const Banner = () => {
    return (
        <div>
            <div>
                <img src={banner} alt="" className="" />
            </div>
            <div className="absolute md:top-1/2 md:right-1/2 md:pl-5 p-5 md:p-0 md:mt-0">
                <h1 className="md:text-6xl text-2xl font-bold text-blue-950">
                    Experience a learning <br /> platform that take you <br /> next level
                </h1>
                <p className="md:text-2xl text-xl my-2 md:my-5">
                    World-class training and development programs developed by top teachers
                </p>
                <button className="bg-cyan-300 px-5 py-4 text-xl rounded-md">
                    Explore All Courses
                </button>
            </div>            
        </div>
    );
};

export default Banner;