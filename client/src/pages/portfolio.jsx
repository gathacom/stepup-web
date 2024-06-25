import { useState } from "react";
import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import CardPortfolio from "../components/Fragments/CardPortfolio";
import SectionHead from "../components/Elements/SectionHead";
import useVerifyUser from "../hooks/useVerifyUser";
import { websites, educations } from "../data/portfolio.js";

const Portfolio = () => {
  const user = useVerifyUser();
  const [selectedCategory, setSelectedCategory] = useState("websites");
  const [showContent, setShowContent] = useState(true);

  const handleCategoryChange = (category) => {
    setShowContent(false);
    setTimeout(() => {
      setSelectedCategory(category);
      setShowContent(true);
    }, 300); // Duration matches the fade-out transition
  };

  const dataToDisplay = selectedCategory === "websites" ? websites : educations;

  return (
    <div className="relative">
      <NavBar user={user} />
      <main className="box-border md:px-20 ">
        <section className="mt-[62px] pt-14 pb-8 bg-head-tr-to-bl-20 px-5">
          <SectionHead
            classname="md:text-start md:text-3xl"
            content={[
              { title: "Solusi ", classname: "text-primary" },
              {
                title: "Kami yang Dengan Senang Kami Tunjukkan Kepada Anda  ",
                classname: "",
              },
            ]}
          />
          <p
            className="mt-[20px] w-full text-xs font-body leading-4 text-black px-[2px] text-center
        md:mb-[60px] lg:text-lg"
          >
            Jelajahi portofolio inovatif kami, solusi digital untuk efisiensi
            bisnis dan produktivitas maksimal. Sambut era digital dengan inovasi
            kami
          </p>
        </section>
        <section>
          <div className="flex justify-center">
            <button
              onClick={() => handleCategoryChange("websites")}
              className={`px-4 py-2 text-sm border-[2px] transition-colors duration-300 ${
                selectedCategory === "websites"
                  ? "text-yellow-500 border-b-yellow-500"
                  : "text-black border-b-[#F1F1F1]"
              } border-x-transparent border-t-transparent`}
            >
              Website
            </button>
            <button
              onClick={() => handleCategoryChange("educations")}
              className={`px-4 py-2 text-sm border-[2px] transition-colors duration-300 ${
                selectedCategory === "educations"
                  ? "text-yellow-500 border-b-yellow-500"
                  : "text-black border-b-[#F1F1F1]"
              } border-x-transparent border-t-transparent`}
            >
              Edukasi IT
            </button>
          </div>
          <div
            className={`pl-6 md:relative md:z-30 md:grid md:grid-cols-2 md:gap-4 md:gap-y-0 lg:grid-cols-3 lg:gap-y-4 transition-all duration-300 
            ${
              showContent
                ? "opacity-100 translate-x-0"
                : selectedCategory === "websites"
                ? "opacity-0 translate-x-5"
                : "opacity-0 -translate-x-5"
            }`}
          >
            {dataToDisplay.map((portfolio) => (
              <div key={portfolio.id}>
                <CardPortfolio {...portfolio} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
