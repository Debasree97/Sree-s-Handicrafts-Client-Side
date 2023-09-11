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
    fetch("https://sreescraft.onrender.com/addproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        alert("New Product Has Been added");
        reset();
      }
    });
  };

  return (
    <Container sx={{ my: 5 }}>
      <h1 style={{ textAlign: "center" }}>
        Carefully Fill Up the Form to Add new Product
      </h1>
      <Container
        fluid
        style={{
          backgroundColor: "#3C3C3C",
          color: "#DFDFDF",
          padding: "20px",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Product Name</label>
            <input {...register("name")} />
            {errors.name?.type === "required"}

            <label>Price</label>
            <input {...register("price")} />
            {errors.price?.type === "required"}

            <label>Product Description</label>
            <textarea {...register("description")} />
            {errors.description?.type === "required"}

            <label>Product Image URL</label>
            <input {...register("img")} />
            {errors.img?.type === "required"}

            <input
              className="btn-style"
              style={{
                marginTop: "50px",
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
