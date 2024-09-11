
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[400px] lg:h-[300px] mt-4">
                <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
                    <div className='flex flex-col lg:flex-row-reverse  justify-between items-center gap-3 h-full mx-auto'>
                        <div className='h-full rounded-md'>
                            <img
                                src="https://i.ibb.co/yQy183N/villa-1737168-640.jpg"
                                className=" w-[800px] lg:w-[1200px] h-[200px] lg:h-full rounded-md" />
                        </div>
                        <div className=' flex justify-center items-center h-full rounded-md border border-blue-600'>
                            <div className=' lg:ml-16 md:ml-16 px-5 py-3  space-y-2'>
                                
                                <p className="text-slate-700">A spacious family room with two queen-size beds, a kitchenette, and a city view. Ideal for families or groups of friends.</p>
                            </div>
                        </div>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>



                <div id="slide2" className="carousel-item relative w-full flex justify-center items-center">
                    <div className='flex flex-col lg:flex-row-reverse  justify-between items-center gap-3 h-full mx-auto'>
                        <div className='h-full rounded-md'>
                            <img
                                src="https://i.ibb.co/hCL5fk9/hotel-1749602-640.jpg"
                                className=" w-[600px] lg:w-[1200px] h-[200px] lg:h-full rounded-md" />
                        </div>
                        <div className='border flex justify-center items-center h-full rounded-md  border-blue-600 '>
                            <div className=' lg:ml-16 md:ml-16 px-5 py-3 space-y-2 '>
                                
                                <p className="text-slate-600">
                                An elegant single room with a modern design, featuring a comfortable single bed, a work desk, and a city view. Ideal for business travelers.</p>
                            </div>
                        </div>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full flex justify-center items-center">
                    <div className='flex flex-col lg:flex-row-reverse  justify-between items-center gap-3 h-full mx-auto'>
                        <div className='h-full rounded-md'>
                            <img
                                src="https://i.ibb.co/ggDbDLH/indoors-4234071-640.jpg"
                                className=" w-[600px] lg:w-[800px] h-[200px] lg:h-full rounded-md" />
                        </div>
                        <div className='border flex justify-center items-center h-full rounded-md border-blue-600'>
                            <div className=' lg:ml-16 md:ml-16 px-5 py-3  '>
                                
                                <p className="text-slate-600">A premium suite with panoramic views of the city, featuring a king-size bed, a luxurious bathroom, and a private rooftop terrace.</p>
                            </div>
                        </div>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full flex justify-center items-center">
                    <div className='flex flex-col lg:flex-row-reverse  justify-between items-center gap-3 h-full mx-auto'>
                        <div className='h-full rounded-md'>
                            <img
                                src="https://i.ibb.co/ggDbDLH/indoors-4234071-640.jpg"
                                className=" w-[600px] lg:w-[800px] h-[200px] lg:h-full rounded-md" />
                        </div>
                        <div className='border flex justify-center items-center h-full rounded-md border-blue-600'>
                            <div className=' lg:ml-16 md:ml-16 px-5 py-3  '>
                                
                                <p className="text-slate-600">A deluxe double room with mountain views, offering two double beds, a spacious living area, and a private balcony.</p>
                            </div>
                        </div>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Banner;