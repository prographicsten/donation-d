import { Link } from "react-router-dom";

const DonationCart = ({donation}) => {
    // console.log(donation);
    const {image, category, card_bg, title} = donation || {};

    return (
        <div >
            <img className="w-full" src={image} alt="" />
            <div className="py-4 px-2">
                <Link>
                    <button className="text-sm font-medium mb-2">{category}</button>
                </Link>
                <h2 className="text-base font-semibold">{title}</h2>
            </div>
        </div>
    );
};

export default DonationCart;