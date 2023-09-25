import { Link } from "react-router-dom";

const DonationCart = ({donation}) => {
    // console.log(donation);
    const {id, image, category, card_bg, title, btn_bg, text_btn_color} = donation || {};

    return (
        
        <Link to={`/donation/${id}`}>
            <div style={{ backgroundColor: card_bg }}>
                <img className="w-full" src={image} alt="" />
                <div className="py-4 px-2">
                    <button style={{ backgroundColor: btn_bg, color: text_btn_color }} className="text-sm font-medium mb-2 px-5 py-1">{category}</button>
                    <h2 style={{ color: text_btn_color }} className="text-base font-semibold ">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default DonationCart;