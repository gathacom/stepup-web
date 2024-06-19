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
    <footer className="w-full flex flex-col mt-20 text-dark font-body ">
      <div className="flex justify-center items-center bg-[#151411] relative h-[184px] px-8">
        <p className="text-white font-bold text-lg text-center">
          Transformasi digital Anda dengan pengembangan web dan edukasi IT kami.
        </p>
        <img
          src="./images/footer-vector1.png"
          alt=""
          className="absolute bottom-0 h-16 w-full"
        />
      </div>
      <section className="px-6 py-2 mb-2 md:px-20 bg-light md:flex md:justify-between lg:px-36">
        {/* Bagian logo ddan button konsultasi */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row items-center gap-3 mt-6">
            <img
              src="../../../images/logo.png"
              alt=""
              className="w-[41px] lg:w-[62px]"
            />
            <h3 className="text-xl font-bold lg:text-[30px]">Step Up</h3>
          </div>
          <div className="w-[230px] mt-4 lg:w-[300px]">
            <p className="text-xs text-center">
              Kami percaya pada talenta untuk menciptakan solusi digital
              unggulan. Dengan tim pengembang terampil, kami realisasikan ide
              Anda. Juga, kami tawarkan layanan edukasi IT untuk perkembangan
              teknologi Anda.
            </p>
          </div>
        </div>
        {/* bagian navigasi */}
        <div className="hidden md:block mt-4">
          <div className="flex flex-col">
            <div className="flex mb-[5px]">
              <h4 className="text-base font-medium place-items-center">
                Navigation
              </h4>
            </div>
            <img
              src="../svg/curly-style.svg"
              alt="curly style gajelas"
              className="w-8 mb-[9px]"
            />
            {navigation.map((nav) => (
              <div
                key={nav.title}
                className="flex flex-row gap-1 items-center mb-2 "
              >
                <img
                  src="../../../svg/arrow-right.svg"
                  alt="arrow"
                  className="w-2"
                />
                <Link to={nav.link} className=" text-xs text-start">
                  {nav.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* bagian information */}
        <div className="flex items-center justify-center mt-4">
          <div className="flex flex-col">
            {contacts.map((item) => (
              <div key={item.title} className="flex flex-row items-center mb-2 mt-2 gap-2">
                <div className="flex w-6 h-4 justify-left items-center fill-primary">
                  <img src={item.image} alt={item.title} />
                </div>
                <p className="text-xs text-start">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative">
        <img
          className="absolute right-8 md:bottom-[16px] md:right-[14px] lg:bottom-[24px] lg:right-[18px]"
          src="../images/frame-footer-2.png"
          alt="frame-footer"
        />
        <img
          className="w-full md:hidden"
          src="../images/frame-footer.png"
          alt="frame-footer"
        />
        <img
          className="w-full md:block lg:h-[52px]"
          src="../images/frame-footer-md.png"
          alt="frame-footer-md"
        />
      </section>
    </footer>
  );
};

export default Footer;
