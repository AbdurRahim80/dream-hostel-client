import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyBookings = () => {
    const { user} = useContext(AuthContext);
    const [bookingData, setBookingData] = useState(useEffect(() => {
        fetch(`https://dream-hostel-server.vercel.app/bookings/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                setBookingData(data)
            })
    }, [user]))

    if(bookingData == ""){
        return <div className="flex justify-center items-center h-full">
            <h1 className="mt-52 font-bold text-2xl text-red-600">No Bookings</h1>
        </div>
    }

    // console.log("da", room?._id);

    // const deleteHandle = _id => {
    //     console.log(_id);
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {


    //             fetch(`https://dream-hostel-server.vercel.app/bookings/${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log("data", data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Your spot has been deleted.',
    //                             'success'
    //                         )
    //                         const remaining = bookingData.filter(rm => rm._id !== _id);
    //                         setBookingData(remaining);
    //                     }
    //                 })

    //         }
    //     })
    // }

    const handleDelete = _id => {
        console.log("_id", _id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://dream-hostel-server.vercel.app/bookings/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("data", data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your spot has been deleted.',
                                'success'
                            )
                            const remaining = bookingData.filter(rm => rm._id !== _id);
                            setBookingData(remaining);
                        }
                    })

            }
        })

    }

    return (
        <div data-aos="fade-zoom-in" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="600" className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-4">
             <Helmet>
                <title>MyBookings</title>
            </Helmet>
            {
                bookingData?.map(item => (
                    <div key={item?._id}>
                        <div className="card bg-base-100  w-96 shadow-xl mb-4">
                            <figure className='h-60'>
                                <img
                                    className='h-60'
                                    src={item.roomImage}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <p className='h-28'>{item?.roomDescription?.slice(0, 102)}</p>
                                <p>Date: {item?.startDate}</p>
                                <div className="card-actions justify-start">
                                    <Link to="/update"><button className="btn btn-secondary">Update date </button></Link>
                                    <button onClick={() => handleDelete(item?._id)} className="btn bg-red-600 text-white hover:bg-red-600">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            {/* <div className="card bg-base-100  w-96 shadow-xl mb-4">
                <figure className='h-60'>
                    <img
                        className='h-60'
                        src={room.roomImage}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <p className='h-28'>{room?.roomDescription?.slice(0, 102)}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-secondary">Book Now</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default MyBookings;