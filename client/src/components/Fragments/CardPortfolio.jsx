const CardPortfolio = (props) => {
  const { desc, title, image, image2 } = props;
  return (
    <div className="flex flex-col mt-8">
      <div className="relative">
        <img src={image} alt="mockup" className="" />
        <img
          src={image2}
          alt="mockup"
          className="w-[100px] h-[100px] absolute bottom-5 right-9"
        />
      </div>
      <h2 className="text-xs font-semibold text-slate-400 mt-1">{desc}</h2>
      <h1 className="text-base font-semibold">{title}</h1>
    </div>
  );
};

export default CardPortfolio;