import { useEffect, useState } from "react";


const UpdateBooking = () => {
    const [update, setUpdate] = useState(useEffect(()=>{
        fetch('https://dream-hostel-server.vercel.app/bookings')
        .then(res=>res.json())
        .then(data=>{
            data.map(book => setUpdate(book))
            
        })

    },[]));

    console.log(update?._id);
    
    return (
        <div>
            Update
        </div>
    );
};

export default UpdateBooking;