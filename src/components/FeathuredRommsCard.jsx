import React, { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';
import { Link } from 'react-router-dom';

const FeathuredRommsCard = ({ room }) => {
    const {user} = useContext(AuthContext);
    console.log(room);
    return (
        <div>
            <form action="#">
                <div data-aos="fade-up" data-aos-duration="8000" className="card bg-base-100  w-96 shadow-xl mb-4">
                    <figure className='h-60'>
                        <img
                            className='h-60'
                            src={room.roomImage}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <p className='h-28'>{room?.roomDescription?.slice(0, 102)}</p>
                        <div className="card-actions justify-start">
                           {
                            user ? <div> <Link to = "/rooms"><button className="btn btn-secondary">Book Now</button></Link></div> :  <div> <Link to = "/rooms"><button className="btn btn-secondary">Book Now</button></Link></div>
                           }
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FeathuredRommsCard;