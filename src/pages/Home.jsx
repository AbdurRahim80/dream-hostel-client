import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import FeathuredRooms from "../components/FeathuredRooms"

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner/>
            <FeathuredRooms/>
        </div>
    );
};

export default Home;