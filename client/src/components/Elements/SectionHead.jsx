import PropTypes from "prop-types";
const SectionHead = (props) => {
  const { content, subsec = false } = props;

  return (
    <>
        <h1
          className={`font-bold text-black text-center font-body lg:text-[34px]`}
          >
          {content.map((item) => (
            <span className={`${item.classname} ${subsec ? "text-lg" : "text-2xl"}`}>{item.title}</span>
            ))}
        </h1>
    </>
  );
};

export default SectionHead;
