import React from "react";
import { konsultasi } from "../../services/konsultasi.service";
import InputWithIcon from "../Elements/Input/InputWithIcon";
import Button from "../Elements/Button/Button";
import { ToastContainer, toast } from "react-toastify";

const FormKonsul = () => {
  const handleAddKonsul = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.fullname.value,
      email: event.target.email.value,
      question: event.target.pertanyaan.value,
    };
    konsultasi(data, (status, res) => {
      if (status) {
        generateSuccess(res.message);
      } else {
        generateError(res.message);
      }
    });
  }
  const generateError = (error) => {
    toast.error(error, {
      position: "bottom-right",
    });
  };
  const generateSuccess = (success) => {
    toast.success(success, {
      position: "bottom-right",
    });
  }
  return (
    <>
      <form onSubmit={handleAddKonsul}>
        <div className="flex flex-col gap-5 px-2.5">
          <InputWithIcon
            type="text"
            icon="user"
            placeholder="Full Name"
            name="fullname"
            id="fullname"
          />
          <InputWithIcon
            type="email"
            icon="mail"
            placeholder="Email"
            name="email"
            id="email"
          />
          <textarea
            name="pertanyaan"
            id=""
            cols="30"
            rows="10"
            placeholder="Bagaimana kami bisa membantu anda?"
            className="px-6 py-[14px] border-2 border-slate-400 focus:border-primary/50 focus:outline-none rounded-lg"
          ></textarea>
          <Button
            type="submit"
            classname="py-3 mt-6 w-full bg-primary rounded-full"
          >
            Kirim
          </Button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default FormKonsul;
