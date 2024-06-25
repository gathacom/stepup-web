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
    "Menjalin komunikasi yang terbuka",
    "Mengembangkan skill individu & tim",
    "Memastikan tim berorientasi pada proses & hasil",
  ];
  return (
    <>
      <Navbar user={user} />
      <div className="relative ">
        <main className="font-body md:relative">
          <section className="mt-[61px] bg-head-tr-to-bl-20 md:px-20 ">
            <div className="bg-head-tl-to-br-10 via-transparent">
              <div className="pt-[61px]">
                <SectionHead
                  classname="md:text-start md:text-3xl"
                  content={[
                    {
                      title: "Kami adalah tim kecil dengan ",
                      classname: "",
                    },
                    { title: "visi ", classname: "text-primary" },
                    {
                      title: "besar.",
                      classname: "",
                    },
                  ]}
                />
              </div>
              <p className="mt-6 w-full text-sm text-center px-4 mb-5">
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
                <button className="flex flex-row mb-[60px] justify-center mx-auto gap-4 items-center w-[190px] h-[50px] text-sm font-normal mt-8 text-white bg-primary rounded-full">
                  Tim Kami{" "}
                  <span className="p-1 rounded-full bg-slate-200/50">
                    <FaArrowRight />
                  </span>
                </button>
              </LinkScroll>
            </div>
          </section>
          <article>
            <SectionHead
              classname="md:text-start md:text-3xl"
              content={[
                {
                  title: "Misi Kami adalah Mendukung ",
                  classname: "font-semibold text-lg",
                },
                {
                  title: "Kemajuan Digital ",
                  classname: "text-primary font-semibold text-lg",
                },
                {
                  title: "Anda.",
                  classname: "font-semibold text-lg",
                },
              ]}
            />
            <div className="w-full mt-5 flex justify-center items-center box-border ">
              <VideoPlayer></VideoPlayer>
            </div>
            <div className="text-sm text-black/80 font-normal px-6 mt-[4px]">
              <p>
                Step Up Project adalah sebuah komunitas yang bergerak untuk
                digitalisasi bisnis dan organisasi melalui pengembangan dan
                pengelolaan aplikasi web yang professional dan terpercaya. Step
                Up Project juga hadir sebagai edukasi seputar dunia IT dengan
                informasi terupdate yang disajikan dalam artikel dan konten
                digital kami.
              </p>
              <p className="mt-4">
                Semua itu kami capai dengan menggunakan teknologi dan proses
                terbaik seuai dengan perkembangan dunia IT. Hal ini memastikan
                layanan yang kami berikan adalah solusi terbaik untuk anda.
              </p>
            </div>
          </article>
          <article className="relative h-[340px] mt-[30px]">
            <div className="absolute z-10 w-full h-[200px] bg-head-tl-to-br-30"></div>
            <section className="absolute z-20 pt-8 pb-10 w-full ps-5 pe-10  lg:w-[50%] lg:pt-0 lg:pe-28 lg:pb-0">
              <SectionHead
                classname="md:text-start md:text-3xl"
                content={[
                  {
                    title: "Nilai ",
                    classname: "text-primary font-semibold text-lg",
                  },
                  {
                    title: "Yang Kami Terapkan",
                    classname: "font-semibold text-lg",
                  },
                ]}
              />
              <div className="mt-[30px]">
                {values.map((value, index) => (
                  <div key={index} className="mb-2">
                    <Value value={value} />
                    {index !== values.length - 1}
                  </div>
                ))}
              </div>
            </section>
          </article>
          <section className="h-auto mt-8 ">
            <div className="w-full px-2  bg-white">
              <SectionHead
                subsec={true}
                content={[
                  { title: "Tim ", classname: "text-primary" },
                  {
                    title: "Kami yang Luar Biasa",
                    classname: "",
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
    <div className="flex flex-row gap-3 justify-items-start">
      <img src="./svg/tick.svg" alt="" className="" />
      <p className="text-sm text-black/80">{value}</p>
    </div>
  );
};

export default About;
