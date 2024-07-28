import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import CardLayanan from "../components/Fragments/CardLayanan";
import SectionHead from "../components/Elements/SectionHead";
import useVerifyUser from "../hooks/useVerifyUser";
import FloatWhatsapp from "../components/Fragments/FloatWhatsapp";

const Layanan = () => {
  const user = useVerifyUser();
  const services = [
    {
      title: "Aplikasi Web",
      images: "../../../images/layanan-website.png",
      value:
        "Step Up Project adalah mitra terpercaya dalam pembuatan dan pengelolaan website. Developer kami siap mewujudkan ide Anda menjadi aplikasi yang fungsional, menarik, dan sesuai kebutuhan bisnis.",
      points: [
        "Konsultasi secara gratis",
        "Desain & Fitur yang inovatif",
        "User Friendly & Responsive",
        "SEO Friendly",
        "Termasuk Domain ( .com / .id )",
        "Hosting yang aman dan cepat",
        "3 bulan pemeliharaan website",
        "Garansi 6 bulan",
      ],
    },
    {
      title: "Edukasi IT",
      images: "../../../images/layanan-edukasi.png",
      value:
        "Step Up Project menyediakan layanan edukasi IT, termasuk kursus, artikel, dan konten digital untuk mengembangkan keterampilan dan pengetahuan teknologi terupdate.",
      points: ["Mini Course", "Konten Digital", "Artikel"],
    },
  ];
  return (
    <div className="relative ">
      <NavBar user={user} />
      <section className="mt-[62px] pt-14 pb-8 bg-head-tr-to-bl-20 px-4  md:pt-20 md:pb-10 ">
        <div className="sm:px-[10px] md:px-44 md:leading-[40px] lg:px-[360px] lg:leading-[55px] phone390:px-[40px]">
          <SectionHead
            classname="md:text-start md:text-3xl"
            content={[
              { title: "Solusi ", classname: "text-primary" },
              {
                title: "Digital Yang  ",
                classname: "",
              },
              { title: "Terbaik ", classname: "text-primary" },
              {
                title: "Untuk Anda.",
                classname: "",
              },
            ]}
          />
        </div>
        <p
          className="mt-[20px] w-full text-xs font-body leading-4 text-black px-[12px] text-center
        md:mb-[60px] md:text-base md:px-20 md:mt-[28px] lg:text-xl lg:px-[320px] lg:mt-[32px]"
        >
          Hadirkan solusi digital untuk mendukung efisiensi dan produktivitas
          bisnis. Sambut era digital bersama inovasi kami
        </p>
      </section>
      {/* memanggil object services */}
      <div className="flex flex-col md:w-full md:col-span-2 md:flex-row md:gap-14 md:px-10 md:items-center md:justify-center items-center mt-2 ">
        {services.map((service) => (
          <CardLayanan key={service.title} {...service}></CardLayanan>
        ))}
      </div>
      <Footer />
      <FloatWhatsapp />
    </div>
  );
};
export default Layanan;
