import { useEffect, useState } from "react";
import DonationFavorites from "./DonationFavorites";
import './Donations.css';

const Donations = () => {
    const [donationWish, setDonationWish] = useState([]);
    const [noDonationFind, setNoDonationFind] = useState(false);

    const [isShowAll, setIsShowAll] = useState(false);

    useEffect(() => {
        const getDonationLists = JSON.parse(localStorage.getItem('donation_list'));
        if(getDonationLists){
            setDonationWish(getDonationLists);
        }else{
            setNoDonationFind("No donation list found here...");
        }
    }, [])
    // console.log(donationWish);

    return (
        <div className="py-5 px-4 md:px-6 lg:px-20 xl:px-32">
            {
                noDonationFind ? <p className="text-center h-[60vh] flex justify-center items-center">{noDonationFind}</p> 
                :
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        isShowAll ? 
                        donationWish?.map((wish, idx) => <DonationFavorites key={idx} wish={wish}></DonationFavorites>)
                        :
                        donationWish?.slice(0,2).map((wish, idx) => <DonationFavorites key={idx} wish={wish}></DonationFavorites>)
                    }
                    </div>
                    <div className="flex justify-center items-center text-center mt-10 no_show">
                        <button onClick={() => {setIsShowAll(!isShowAll)}} className="bg-[#009444] text-sm font-medium mb-2 px-5 py-2 rounded-md text-white">{isShowAll ? "See Less" : "See All"}</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Donations;