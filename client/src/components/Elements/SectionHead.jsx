import PropTypes from "prop-types";

const SectionHead = (props) => {
  const { content = [], subsec = false } = props;

  return (
    <h1 className="font-bold text-black text-center font-body lg:text-[34px]">
      {content.map((item, index) => (
        <span
          key={index}
          className={`${item.classname} ${
            subsec ? "text-lg" : "text-2xl"
          } md:text-[32px] lg:text-[40px]`}
        >
          {item.title}
        </span>
      ))}
    </h1>
  );
};

SectionHead.propTypes = {
  content: PropTypes.array.isRequired,
  subsec: PropTypes.bool,
};

export default SectionHead;
