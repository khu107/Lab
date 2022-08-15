import React, { useState } from "react";
import styles from "./style.module.css";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { users } from "../../../constant/users";
import { useDispatch } from "react-redux";
import { login } from "../../../store/userSlice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#main');

function LoginModal({ visibe, onClsoe }) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const matched = users.find(
      ({ email, password }) =>
        email === data.email && password === data.password
    );

    if (matched) {
      dispatch(login(matched));
      navigate("/user");
    }
  };

  function closeModal() {
    onClsoe();
  }

  return (
    <Modal
      ariaHideApp={false}
      isOpen={visibe}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Login"
    >
      <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
        <div>
          <p>Email</p>
          <input
            {...register("email")}
            type="email"
            className={styles.inputt}
            placeholder="email"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            {...register("password")}
            type="password"
            className={styles.inputt}
            placeholder="password"
          />
        </div>
        <div>
          <input className={styles.btn} type="submit" value="Login" />
        </div>
      </form>
    </Modal>
  );
}

export default LoginModal;
