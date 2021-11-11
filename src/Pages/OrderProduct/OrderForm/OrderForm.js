import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
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
  //   const history = useHistory();
    const { img, name, price } = props.orderProduct;
    const { displayName, email } = user;

  const onSubmit = (data) => {
    data.proName = name;
    data.price = price;
    data.email = user.email;
    data.img = img;
    fetch("https://whispering-bayou-91525.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      reset();
      //   history.push("/myorders");
    });
  };

  return (
    <Container>
      <h1>Please Fill Up the Form below to Submit Your Booking Request</h1>
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
              style={{
                marginTop: "50px",
                padding: "5px 0",
                backgroundColor: "#E75B00",
                color: "#DFDFDF",
              }}
              type="SUBMIT"
            />
          </div>
        </form>
      </Container>
    </Container>
  );
};

export default OrderForm;
