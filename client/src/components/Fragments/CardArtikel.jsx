import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import HTMLReactParser from "html-react-parser";
import { destroyArticle } from "../../services/article.service";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import { DateConverter } from "../Elements/DateConverter";
const CardArtikel = ({ id, image, title, author, content, published_at, to }) => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      if (cookies.jwt) {
        const { data } = await axios.post(
          `http://localhost:8080/`,
          {},
          { withCredentials: true }
        );
        setUser(data.user);
        // if (!data.status) {
        //   removeCookie("jwt");
        //   navigate("/login");
        // }
      }
    };
    verifyUser();
  }, [cookies, removeCookie]);
  const handleDeleteArticle = (event) => {
    event.preventDefault();
    destroyArticle(id, (status, res) => {
      if (status) {
        console.log(res);
      } else {
        console.log(res);
      }
    });
  };
  
  return (
    <div className="block max-w-[300px] md:max-w-[409px] mx-auto mt-[43px] rounded-xl font-body overflow-hidden shadow-lg box-border">
      <img
        src={image}
        alt="Cards"
        className="w-full h-[254px] object-fit"
      />
      <div className="px-[14px] py-3 box-border leading-3">
        <div className="flex flex-row items-center">
          <DateConverter date={published_at} />
          <h2 className="text-xs ">, By {author ? author : "Step-Up"}</h2>
        </div>
          <h3 className="text-base font-bold text-left my-[11px]">{title}</h3>
        
        <div className="word-wrap my-4 text-left text-xs ">
          {content}
        </div>
        <Link to={to} target="blank">
        <div className="flex flex-row items-center mt-5">
          <p className="text-primary">Selengkapnya </p>
          <IoIosArrowRoundForward color="#FFB10A" size="30px"/>
        </div>
        </Link>
      </div>
      {user ? (
        <div className="flex justify-end gap-4 pe-3 pb-3">
          <Link to={`/developer/article/edit/${id}`}>
            <img src="svg/edit.png" alt="" />
          </Link>
          <form onSubmit={handleDeleteArticle}>
            <button type="submit">
              <img src="svg/delete.png" alt="" />
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CardArtikel;
