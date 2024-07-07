import SectionHead from "../components/Elements/SectionHead";
import VideoPlayer from "../components/Elements/VideoPlayer";
import Footer from "../components/Fragments/Footer";
import Navbar from "../components/Fragments/Navbar";
import TeamCard from "../components/Fragments/TeamCard";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";
import useVerifyUser from "../hooks/useVerifyUser";
import { Link as LinkScroll } from "react-scroll";
import { teamLists } from "../data/teams.js";
import FloatWhatsapp from "../components/Fragments/FloatWhatsapp.jsx";

const About = () => {
  const user = useVerifyUser();
  const values = [
    "Mengutamakan kerjasama tim dalam segala proses pengembangan proyek",
    "Membangun lingkungan dengan poduktivitas yang konsisten",
    "Mengutamakan fokus dalam bekerja",
  ];
  const values2 = [
    "Menjalin komunikasi yang terbuka",
    "Mengembangkan skill individu & tim",
    "Memastikan tim berorientasi pada proses & hasil",
  ];
  return (
    <>
      <Navbar user={user} />
      <div className="relative ">
        <main className="font-body md:relative">
          <section className="mt-[61px] bg-head-tr-to-bl-20 md:mb-10 ">
            <div className="bg-head-tl-to-br-10 via-transparent md:bg-transparent md:py-4 lg:py-10 ">
              <div className="pt-[61px] md:px-[200px] lg:px-[450px]">
                <SectionHead
                  classname="md:text-start md:text-3xl"
                  content={[
                    {
                      title: "Kami adalah tim kecil dengan ",
                      classname: "",
                    },
                    {
                      title: "visi ",
                      classname: "text-primary ",
                    },
                    {
                      title: "besar.",
                      classname: "",
                    },
                  ]}
                />
              </div>
              <p className="mt-6 w-full text-sm text-center px-4 mb-5 md:text-base md:px-20 lg:text-xl lg:px-[340px] lg:mt-8 lg:mb-14">
                Kami membekali tim dengan pengetahuan, keterampilan, dan
                disiplin yang diperlukan untuk mencapai kesuksesan 10 kali
                lipat.
              </p>
              <LinkScroll
                to="teams"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                <button className="flex flex-row mb-[60px] justify-center mx-auto gap-4 items-center w-[190px] h-[50px] text-sm font-normal mt-8 text-white bg-primary rounded-full lg:text-xl lg:w-[210px]">
                  Tim Kami{" "}
                  <span className="p-1 rounded-full bg-slate-200/50 lg:ml-1">
                    <FaArrowRight />
                  </span>
                </button>
              </LinkScroll>
            </div>
          </section>
          <article className="md:mb-10">
            <div className="md:px-28 md:leading-10 lg:px-80 lg:leading-[55px]">
              <SectionHead
                classname="md:text-start md:text-3xl"
                content={[
                  {
                    title: "Misi Kami adalah Mendukung ",
                    classname:
                      "font-semibold text-lg md:text-[28px] lg:text-[32px]",
                  },
                  {
                    title: "Kemajuan Digital ",
                    classname:
                      "text-primary font-semibold text-lg md:text-[28px] lg:text-[32px]",
                  },
                  {
                    title: "Anda.",
                    classname:
                      "font-semibold text-lg md:text-[28px] lg:text-[32px]",
                  },
                ]}
              />
            </div>
            <section className=" lg:flex lg:gap-2 lg:justify-center lg:mt-4">
              <div className="w-full mt-5 flex justify-center items-center box-border lg:w-[50%] lg:mt-0 ">
                <VideoPlayer></VideoPlayer>
              </div>
              <div
                className="text-sm text-black/80 font-normal px-6 mt-[4px] md:text-[16px] md:leading-5 md:text-center md:px-12 lg:w-[50%] 
              lg:text-left lg:px-0 lg:text-xl lg:pt-6 lg:pe-36 "
              >
                <p>
                  Step Up Project adalah sebuah komunitas yang bergerak untuk
                  digitalisasi bisnis dan organisasi melalui pengembangan dan
                  pengelolaan aplikasi web yang professional dan terpercaya.
                  Step Up Project juga hadir sebagai edukasi seputar dunia IT
                  dengan informasi terupdate yang disajikan dalam artikel dan
                  konten digital kami.
                </p>
                <p className="mt-4">
                  Semua itu kami capai dengan menggunakan teknologi dan proses
                  terbaik seuai dengan perkembangan dunia IT. Hal ini memastikan
                  layanan yang kami berikan adalah solusi terbaik untuk anda.
                </p>
              </div>
            </section>
          </article>
          <article className="relative h-[340px] mt-[30px] ">
            <div className="absolute z-10 w-full h-[200px] bg-head-tl-to-br-30 "></div>
            <section className="absolute z-20 pt-8 pb-10 w-full ps-5 pe-10 lg:pt-0  lg:pb-0 md:py-10 lg:mt-10 lg:px-20  ">
              <SectionHead
                classname="md:text-start md:text-3xl"
                content={[
                  {
                    title: "Nilai ",
                    classname:
                      "text-primary font-semibold text-lg md:text-[28px] lg:text-[32px] ",
                  },
                  {
                    title: "Yang Kami Terapkan",
                    classname:
                      "font-semibold text-lg md:text-[28px] lg:text-[32px]",
                  },
                ]}
              />
              <div className="lg:w-full lg:flex lg:justify-center ">
                <div className="mt-[30px] md:px-10  lg:w-full ">
                  {values.map((value, index) => (
                    <div key={index} className="mb-2 lg:mb-4">
                      <Value value={value} />
                      {index !== values.length - 1}
                    </div>
                  ))}
                </div>
                <div className="md:px-10 lg:mt-[30px]  lg:w-full">
                  {values2.map((value, index) => (
                    <div key={index} className="mb-2 lg:mb-4">
                      <Value value={value} />
                      {index !== values.length - 1}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </article>
          <section className="h-auto mt-8 md:mt-2 lg:mt-16 ">
            <div className="w-full px-2  bg-white">
              <SectionHead
                subsec={true}
                content={[
                  {
                    title: "Tim ",
                    classname:
                      "text-primary font-semibold text-lg md:text-[28px] lg:text-[32px] ",
                  },
                  {
                    title: "Kami yang Luar Biasa",
                    classname:
                      "font-semibold text-lg md:text-[28px] lg:text-[32px] ",
                  },
                ]}
              />
              <div className="grid grid-cols-2 md:grid-cols-3 place-items-center mt-6">
                {teamLists.map((item) => (
                  <TeamCard key={item.id} {...item}></TeamCard>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer></Footer>
        <FloatWhatsapp></FloatWhatsapp>
      </div>
    </>
  );
};

const Value = ({ value }) => {
  Value.propTypes = {
    value: PropTypes.string.isRequired,
  };

  return (
    <div className="flex flex-row gap-3 lg:justify-start lg:items-start  ">
      <img src="./svg/tick.svg" alt="" className="lg:mt-2" />
      <p className="text-sm text-black/80 lg:text-xl">{value}</p>
    </div>
  );
};

export default About;
