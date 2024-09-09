import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./provider/AuthProvider";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";

const RoomsDetails = () => {
    const { user } = useContext(AuthContext);
    const detailData = useLoaderData();
    const [startDate, setStartDate] = useState(new Date());
    const { roomSize, roomDescription, pricePerNight, availability, roomImage, specialOffers, reviews } = detailData;
    console.log(detailData);
    //     ● RoomDescription
    //  ● Price per Night
    //  ● RoomSize
    //  ● Availability
    //  ● RoomImages
    //  ● Special Offers (if available)




    const handleBookings = e => {
        e.preventDefault();
        const email = user?.email;
        const bookings = { roomImage, startDate, roomDescription, email, specialOffers, reviews, availability, pricePerNight }
        console.log(bookings);

        Swal.fire({
            title: "Are you sure?",
            text: `${roomDescription} ,Price:  ${pricePerNight}Tk`,
            // text: `${pricePerNight}`,
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('http://localhost:5000/bookings', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(bookings)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("data", data);
                        if (data?.insertedId) {
                            Swal.fire({
                                title: "Book",
                                text: "Booking successful",
                                icon: "success"
                            });
                        }

                    })

            }
        });


    }



    return (
        <div>
             <Helmet>
                <title>RoomDetails</title>
            </Helmet>
            {/* <h1>{roomSize}</h1> */}
            <h1 className="text-3xl font-bold text-teal-700 text-center my-8">Rooms Details </h1>
            <form onSubmit={handleBookings}>
                <div data-aos="flip-left" data-aos-delay="100" data-aos-anchor=".example-selector" className="card bg-base-100 shadow-2xl mb-4">
                    <figure className='h-60'>
                        <img
                            className='w-full h-[500px]'
                            src={roomImage}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <p className=''>{roomDescription}</p>
                        <div className="flex">
                            <p>Price PerNight: {pricePerNight} Tk</p>
                            <p>Room Size: {roomSize}</p>
                        </div>
                        <div>
                            <div>
                                <p className="underline">Availability</p>
                                <p>Start Date: {availability?.startDate}</p>
                                <p>End Date: {availability?.endDate}</p>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className=" w-10 h-10">
                            <DatePicker className="border" selected={startDate} onChange={date => setStartDate(date)} />
                        </div>
                        <div className="card-actions justify-start">
                            <button className="btn btn-secondary">Book Now</button>
                        </div>

                    </div>
                </div>
            </form>

        </div>
    );
};

export default RoomsDetails;