import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetail from "../DonationDetail/DonationDetail";

const DonationDetails = () => {
    const [details, setDetails] = useState({});
    
    const {id} = useParams();
    console.log(id);

    const donationDetails = useLoaderData();
    console.log(donationDetails);

    useEffect(() => {
        const findDetails = donationDetails?.find(detail => detail.id === id);
        console.log(findDetails);
        setDetails(findDetails);
    }, [])

    return (
        <div>
            <DonationDetail key={details.id} details={details}></DonationDetail>
        </div>
    );
};

export default DonationDetails;