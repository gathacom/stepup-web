import ShowPoint from "./ShowPoint";

const CardLayanan = (props) => {
  const { title, images, classname, value, points } = props;

  return (
    <div
      className={`flex justify-center items-center w-[312px] mt-16 md:w-[580px] md:h-[496px] lg:w-[570px] lg:h-[620px]`}
    >
      <div className="flex flex-col pb-12 items-center h-full w-full px-4 pt-12 rounded-2xl mb-8 border-[1px] border-slate-300 relative">
        <img
          src={images}
          alt={title}
          className="w-[66px] h-[66px] mb-3 absolute left-[50%] -top-8 translate-x-[-50%] lg:w-[101px] lg:h-[101px] lg:-top-12"
        />
        <h3 className="text-lg font-bold mb-3 lg:text-2xl lg:mt-8">{title}</h3>
        <p className="text-sm text-center lg:text-xl lg:px-[70px]">{value}</p>
        <div className="w-full flex flex-col items-start justify-start gap-2 mt-8 px-4">
          {points.map((point, index) => (
            <ShowPoint key={index} point={point} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardLayanan;
