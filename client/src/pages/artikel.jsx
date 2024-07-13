import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import Footer from "../components/Fragments/Footer";
import CardArtikel from "../components/Fragments/CardArtikel";
import Button from "../components/Elements/Button/Button";
import LatestCardArticle from "../components/Fragments/LatestCardArticle";
import axios from "axios";
import Navbar from "../components/Fragments/Navbar";
import useVerifyUser from "../hooks/useVerifyUser";
import {
  getArticles,
  destroyArticle,
  getLatestArticle,
} from "../services/article.service";
import SectionHead from "../components/Elements/SectionHead";
import InputWithIcon from "../components/Elements/Input/InputWithIcon";
import FloatWhatsapp from "../components/Fragments/FloatWhatsapp";
import articles from "../utils/article"

const Artikel = () => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [latestArticle, setLatestArticle] = useState([]);
  const user = useVerifyUser();

  useEffect(() => {
    getLatestArticle((res) => {
      if (res) {
        setLatestArticle(res.articles);
      } else {
        console.log(res);
      }
    });
  }, []);

  return (
    <div className="pt-16">
      <Navbar user={user} />
      <section className="h-auto">
        <div className="py-14 lg:pt-32 bg-head px-6">
          <div className="px-[4px] phone375:px-[10px] md:px-44">
            <SectionHead
              classname="md:text-start md:text-3xl"
              content={[
                { title: "Temukan ", classname: "" },
                { title: "Wawasan ", classname: "text-primary" },
                { title: "dan ", classname: "" },
                { title: "Informasi ", classname: "text-primary" },
                {
                  title: "Digital Terkini. ",
                  classname: "",
                },
              ]}
            />
          </div>
          <p className="mt-5 w-full text-xs md:text-lg lg:text-xl font-body leading-4 text-dark px-[12px] md:px-24 lg:px-44 text-center">
            Jelajahi dunia teknologi terkini dengan artikel kami! Perkembangan
            terbaru, kecerdasan buatan, dan solusi paling inovatif.
          </p>
        </div>
      </section>
      {user ? (
        <Link
          to="/developer/article/create"
          className="md:flex md:w-full md:justify-center"
        >
          <Button
            type="submit"
            classname={`w-full md:w-[50%] my-10 py-3 bg-primary rounded-full shadow-lg shadow-slate-500 hover:shadow-md hover:shadow-dark transition duration-300 `}
          >
            Buat Artikel
          </Button>
        </Link>
      ) : (
        <></>
      )}
      <section className="h-auto">
        <div className="pt-8 px-6 lg:px-24">
          <InputWithIcon
            type="text"
            icon="search"
            placeholder="Cari"
            name="article"
            id="article"
          />
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
            {articles.map((article, index) => (
              <CardArtikel key={article.ids} id={article.ids} {...article} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatWhatsapp />
    </div>
  );
};

export default Artikel;
