import Navbar from "../components/Fragments/Navbar";
import HeadTitle from "../components/Elements/HeadTitle";
import FormKonsultasi from "../components/Fragments/FormKonsultasi";
import Footer from "../components/Fragments/Footer";
import StylizedFrame from "../components/Elements/StylizedFrame";
import useVerifyUser from "../hooks/useVerifyUser";
import SectionHead from "../components/Elements/SectionHead";
import FormKonsul from "../components/Fragments/FormKonsul";

const Konsultasi = () => {
  const user = useVerifyUser();
  return (
    <div className="pt-16">
      <Navbar user={user} />
      <section className="h-auto">
        <div className="py-14 bg-head px-6">
          <SectionHead
            classname="md:text-start md:text-3xl"
            content={[
              { title: "Kami Disini Untuk ", classname: "" },
              { title: "Membantu ", classname: "text-primary" },
              { title: "Anda ", classname: "" },
            ]}
          />
          <p className="mt-5 w-full text-xs font-body leading-4 text-dark px-[12px] text-center">
            Wujudkan ide brilian Anda dengan bantuan tim kami. kontak kami
            sekarang untuk memulai pencapaian sukses aplikasi Anda! 🚀
          </p>
        </div>
      </section>
      <section className="h-auto">
        <div className="px-[14px]">
          <FormKonsul></FormKonsul>
        </div>
      </section>
      {/* <div className="relative pb-[550px] md:pb-[350px] lg:pb-[400px]">
        <StylizedFrame
          urlImage="../images/stylized-frame-2-right.png"
          classname="hidden absolute right-[90px] top-[80px] md:block md:w-[100px] lg:w-[139px]"
        ></StylizedFrame>
          <div className="flex justify-center w-full px-4">
            <div className="w-full p-2 lg:px-28">
              <FormKonsultasi></FormKonsultasi>
            </div>
          </div>
        <StylizedFrame
          urlImage="../images/stylized-frame-3-left.png"
          classname="hidden absolute left-0 bottom-[380px] md:block md:w-[50px] lg:w-[210px]"
        ></StylizedFrame>
      </div> */}
      <Footer></Footer>
    </div>
  );
};

export default Konsultasi;
