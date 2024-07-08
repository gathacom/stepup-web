const ShowPoint = ({ point }) => {
  return (
    <div className="flex flex-row gap-3 justify-items-start lg:px-8">
      <img src="./svg/tick.svg" alt="" className="" />
      <p className="text-sm text-black/80 lg:text-xl">{point}</p>
    </div>
  );
};

export default ShowPoint;
