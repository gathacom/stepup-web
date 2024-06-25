const ShowPoint = ({ point }) => {

  return (
    <div className="flex flex-row gap-3 justify-items-start">
      <img src="./svg/tick.svg" alt="" className="" />
      <p className="text-sm text-black/80">{point}</p>
    </div>
  );
};

export default ShowPoint;
