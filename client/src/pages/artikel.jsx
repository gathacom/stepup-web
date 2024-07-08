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

const Artikel = () => {
  const [articles, setArticles] = useState([]);
  const [ids, setIds] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [latestArticle, setLatestArticle] = useState([]);
  const user = useVerifyUser();

  useEffect(() => {
    getArticles((res) => {
      if (res) {
        setArticles(res.articles);
        setIds(res.articles.map((article) => article._id));
      } else {
        console.log(res);
      }
    });
  }, [articles]);

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
        <div className="py-14 bg-head px-6">
          <div className="px-[4px] phone375:px-[10px]">
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
          <p className="mt-5 w-full text-xs font-body leading-4 text-dark px-[12px] text-center">
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
        <div className="pt-8 px-6">
          <InputWithIcon
            type="text"
            icon="search"
            placeholder="Cari"
            name="article"
            id="article"
          />
          <div className="md:grid md:grid-cols-3 md:gap-4">
            {articles.map((article, index) => (
              <CardArtikel key={ids[index]} id={ids[index]} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* <img src={`${image}`} alt="" /> */}
      {/* <h2 className="mt-[30px] px-[12px] font-bold text-xl text-center">
        Postingan Terbaru
      </h2> */}
      {/* <LatestCardArticle /> */}
      {/* <div className="w-full">
        {latestArticle.map((article, index) => (
          <LatestCardArticle key={ids} id={ids[index]} {...article} />
        ))}
      </div> */}
      {/* memanggil object semua artikel */}
      {/* <h2 className="mt-[30px] px-[12px] font-bold text-xl text-center ">
        Postingan Lainnya
      </h2> */}

      <Footer />
      <FloatWhatsapp />
    </div>
  );
};

export default Artikel;
