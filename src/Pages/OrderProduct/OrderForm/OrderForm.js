import React from "react";
import { useForm } from "react-hook-form";
import { Container } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const OrderForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
    const { img, name, price } = props.orderProduct;
    const { displayName, email } = user;

  const onSubmit = (data) => {
    data.proName = name;
    data.price = price;
    data.email = user.email;
    data.img = img;
    data.status = "Pending";
    fetch("https://whispering-bayou-91525.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      alert("Your Order Has been Placed")
      reset();
    });
  };

  return (
    
      <Container
        fluid
        style={{
          backgroundColor: "#3C3C3C",
          color: "#DFDFDF",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Name</label>
            <input defaultValue={displayName} {...register("custName")} />
            {errors.custName?.type === "required" && "Please enter your name"}
            <label>Email</label>
            <input readOnly defaultValue={email} />
            <label>Product</label>
            <input readOnly defaultValue={name} />
            <label>Product Price</label>
            <input readOnly defaultValue={price} />
            <label>Address</label>
            <textarea {...register("address")} />
            {errors.address?.type === "required" && "Please enter your address"}
            <label>Phone Number</label>
            <input type="number" {...register("phNumber")} />
            {errors.phnumber?.type === "required" &&
              "Please enter your phone number"}
            <input type="hidden" defaultValue={img} />
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
    
  );
};

export default OrderForm;
