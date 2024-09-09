import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full">
             <Helmet>
                <title>ErrorPage</title>
            </Helmet>
            <h1 className="mt-52 font-bold text-2xl text-red-600">This is not found</h1>
            <img className="" src="./404.png" alt="" />
            <Link to ="/"><button className="btn btn-primary text-white font-bold">GO TO HOME</button></Link>
        </div>
    );
};

export default ErrorPage;