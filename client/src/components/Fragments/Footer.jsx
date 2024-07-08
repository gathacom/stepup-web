import Button from "../Elements/Button/Button";
import { Link } from "react-router-dom";
const Footer = () => {
  const contacts = [
    {
      title: "email",
      content: "stepup.project6@gmail.com",
      image: "../svg/email.png",
    },
    {
      title: "instagram",
      content: "stepup.project",
      image: "../svg/instagram.png",
    },
    {
      title: "whatsapp",
      content: "082262191159",
      image: "../svg/whatsapp.png",
    },
    {
      title: "location",
      content: "Sleman, Yogyakarta 55282",
      image: "../svg/location.png",
    },
  ];
  const navigation = [
    {
      title: "Beranda",
      link: "/",
    },
    {
      title: "Tentang Kami",
      link: "/about",
    },
    {
      title: "Layanan Kami",
      link: "/services",
    },
    {
      title: "Article",
      link: "/article",
    },
    {
      title: "Portfolio",
      link: "/portfolio",
    },
    {
      title: "Konsultasi",
      link: "/konsultasi",
    },
  ];

  return (
    <footer className="w-full flex flex-col mt-20 text-dark font-body  ">
      <div className="flex justify-center items-center bg-[#151411] relative h-[184px] px-8 lg:py-[120px]">
        <p
          className="text-white font-semibold text-lg text-center md:text-[24px] md:px-20 md:leading-[40px]
        lg:text-[30px] lg:px-80 lg:leading-[50px]"
        >
          Transformasi digital Anda dengan pengembangan web dan edukasi IT kami.
        </p>
        <img
          src="./images/footer-vector1.png"
          alt=""
          className="hidden absolute bottom-0 h-16 w-full md:block"
        />
        <img
          src="./images/footer-vector2.png"
          alt=""
          className="absolute bottom-0 h-16 w-full md:hidden"
        />
      </div>
      <section className="px-6 py-2 mb-2  bg-light md:flex md:justify-between md:py-[50px] md:px-28  lg:px-40 lg:pt-[60px] lg:pb-[100px] border border-yellow-500">
        {/* Bagian logo ddan button konsultasi */}
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between  lg:pe-24 lg:items-start lg:w-full ">
          <div className="flex flex-row items-center gap-3 mt-6 lg:mt-0">
            <img
              src="../../../images/logo.png"
              alt=""
              className="w-[41px] lg:w-[62px]"
            />
            <h3 className="text-xl font-bold lg:text-[30px]">Step Up</h3>
          </div>
          <div className="w-[230px] mt-4 lg:w-[420px]">
            <p className="text-xs text-center lg:text-left lg:text-base">
              Kami percaya pada talenta untuk menciptakan solusi digital
              unggulan. Dengan tim pengembang terampil, kami realisasikan ide
              Anda. Juga, kami tawarkan layanan edukasi IT untuk perkembangan
              teknologi Anda.
            </p>
          </div>
        </div>
        {/* bagian information */}
        <div className="flex items-center justify-center mt-4">
          <div className="flex flex-col">
            {contacts.map((item) => (
              <div
                key={item.title}
                className="flex flex-row items-center mb-2 mt-2 gap-2 lg:gap-3"
              >
                <div className="flex w-6 h-4 justify-center items-center bg-primary lg:w-10 lg:h-10 lg:rounded-full">
                  <img src={item.image} alt={item.title} className="lg:w-10" />
                </div>
                <p className="text-xs text-start lg:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
