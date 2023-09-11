import { Container } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://sreescraft.onrender.com/addadmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        alert("Admin Member Has Been added");
        reset();
      }
    });
  };

  return (
    <Container sx={{ my: 5 }}>
      <h1 style={{ textAlign: "center" }}>
        Carefully Enter Email Address to Make Admin
      </h1>
      <Container
        fluid
        style={{
          backgroundColor: "#3C3C3C",
          color: "#DFDFDF",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label style={{ marginTop: "20px" }}></label>
            <input type="email" {...register("email")} />
            {errors.email?.type === "required"}

            <input
              className="btn-style"
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                padding: "5px 0",
                backgroundColor: "#E75B00",
                color: "#191919",
                fontWeight: "bold",
              }}
              type="SUBMIT"
            />
          </div>
        </form>
      </Container>
    </Container>
  );
};

export default AddProduct;
