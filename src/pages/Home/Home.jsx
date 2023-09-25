import { useLoaderData } from "react-router-dom";
import DonationCard from "../../components/DonationCard/DonationCard";


const Home = () => {
    const donations = useLoaderData();
    // console.log(donations);

    return (
        <div className="py-5 px-4 md:px-6 lg:px-20 xl:px-32">
            <DonationCard donations={donations}></DonationCard>
        </div>
    );
};

export default Home;