
import { useLoaderData } from "react-router-dom";
import FeathuredRommsCard from "./FeathuredRommsCard";

const FeathuredRooms = () => {
    const roomsLoaderData = useLoaderData();
    return (
        <div>
            <div className="my-16">
                <h1 className='text-3xl font-bold my-14 text-center'>Featured Rooms</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4"> 
                    {roomsLoaderData?.map((room, index) => <FeathuredRommsCard key={index} room={room} />)}
                </div>
            </div>
        </div>
    );
};

export default FeathuredRooms;