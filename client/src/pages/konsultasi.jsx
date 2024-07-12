import Navbar from "../components/Fragments/Navbar";
import HeadTitle from "../components/Elements/HeadTitle";
import FormKonsultasi from "../components/Fragments/FormKonsultasi";
import Footer from "../components/Fragments/Footer";
import StylizedFrame from "../components/Elements/StylizedFrame";
import useVerifyUser from "../hooks/useVerifyUser";
import SectionHead from "../components/Elements/SectionHead";
import FormKonsul from "../components/Fragments/FormKonsul";
import FloatWhatsapp from "../components/Fragments/FloatWhatsapp";

const Konsultasi = () => {
  const user = useVerifyUser();
  return (
    <div className="pt-16">
      <Navbar user={user} />
      <section className="h-auto">
        <div className="py-14 lg:pt-32 bg-head px-6">
          <div className="px-[4px] phone375:px-[10px] md:px-44">
            <SectionHead
              classname="md:text-start md:text-3xl"
              content={[
                { title: "Kami Disini Untuk ", classname: "" },
                { title: "Membantu ", classname: "text-primary" },
                { title: "Anda ", classname: "" },
              ]}
            />
          </div>
          <p className="mt-5 w-full text-xs md:text-base lg:text-lg font-body leading-4 text-dark px-3 md:px-16 lg:px-28 text-center">
            Wujudkan ide brilian Anda dengan bantuan tim kami. kontak kami
            sekarang untuk memulai pencapaian sukses aplikasi Anda! 🚀
          </p>
        </div>
      </section>
      <section className="h-auto">
        <div className="px-[14px] md:px-24 lg:px-[335px]">
          <FormKonsul></FormKonsul>
        </div>
      </section>
      <Footer />
      <FloatWhatsapp />
    </div>
  );
};

export default Konsultasi;
