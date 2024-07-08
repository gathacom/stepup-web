const CardPortfolio = (props) => {
  const { desc, title, image, image2 } = props;
  return (
    <div className="flex flex-col mt-8">
      <div className="relative">
        <img src={image} alt="mockup" className="w-[310px] lg:w-[500px]" />
      </div>
      <h2 className="text-xs text-slate-400 mt-1 lg:text-lg lg:mt-4">{desc}</h2>
      <h1 className="text-base font-semibold lg:text-xl">{title}</h1>
    </div>
  );
};

export default CardPortfolio;
