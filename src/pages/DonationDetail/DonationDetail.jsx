import { Link } from "react-router-dom";
import swal from "sweetalert";
import './DonationDetail.css'


const DonationDetail = ({details}) => {
    console.log(details);
    const {image, title, description, text_btn_color, price} = details || {};

    const handleDonationConfirm = () => {
        const addDonationLists = [];
        const getDonationLists = JSON.parse(localStorage.getItem('donation_list'));

        if(!getDonationLists) {
            addDonationLists.push(details);
            localStorage.setItem('donation_list', JSON.stringify(addDonationLists));
            swal("Good job Donation!", "Donation added succesfully", "success");
        }else {
            const isExists = getDonationLists?.find(details => details.id === id);

            if(!isExists) {
                addDonationLists.push(...getDonationLists, details)
                localStorage.setItem('donation_list', JSON.stringify(addDonationLists));
                swal("Good job Donation!", "Donation added succesfully", "success");
            }else{
                swal("Already added!", "Donation added succesfully", "error");
            }
        }
    };

    return (
        <div>
            <div className="py-5 px-4 md:px-6 lg:px-20 xl:px-32">
                <section className="">
                    <img className="w-full" src={image} alt="" />
                    <div className="relative -mt-[85px]">
                        <div className="overlay py-5">
                            <Link>
                            <button onClick={handleDonationConfirm} style={{ backgroundColor: text_btn_color, }} className="text-white font-semibold text-lg px-5 py-2 ml-5">Donate ${price}</button>
                            </Link>
                        </div>
                    </div>
                </section>
                <div className="my-12">
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">{title}</h2>
                    <p className="mt-5"><small>{description}</small></p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetail;