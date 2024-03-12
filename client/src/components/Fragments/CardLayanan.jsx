import PropTypes from "prop-types";

const CardLayanan = ({ image, title, content }) => {

  CardLayanan.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
  }

  return (
    <div className="relative max-w-[267px] h-[290px] mx-auto mt-[43px] rounded-[10px] font-body overflow-hidden shadow-lg box-border">
      <img src={image} alt="Cards" className="w-[57px] mx-auto mt-[26px]" />
      <h1 className="text-[16px] font-bold text-center mb-5 mt-[14px]">{title}</h1>
      <p className="word-wrap px-[13px] text-center text-xs">{content}</p>
      <div className="absolute bottom-0 w-full border border-[#FFB10A]"></div>
    </div>
  );
};


export default CardLayanan;
