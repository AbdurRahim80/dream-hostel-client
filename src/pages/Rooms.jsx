// import { data } from "autoprefixer";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const Rooms = () => {
    const roomsData = useLoaderData();


    
    return (
        <div>
             <Helmet>
                <title>Rooms</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center my-4">Available Rooms</h1>
            <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    roomsData?.map((roomData, index) => (
                        <div key={index}>
                            <div className="card bg-base-100  w-96 shadow-xl mb-4">
                                <Link to = {`/roomdetail/${roomData?._id}`}>
                                    <figure className='h-60'>
                                        <img
                                            className='h-60 cursor-pointer'
                                            src={roomData.roomImage}
                                            alt="Shoes" />
                                    </figure>
                                </Link>
                                <div className="card-body">
                                    <p className='h-28'>{roomData?.roomDescription?.slice(0, 102)}</p>
                                   
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Rooms;