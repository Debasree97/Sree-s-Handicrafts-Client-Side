import { Container } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";

const GiveReview = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    data.custname = user.displayName;
    fetch("https://whispering-bayou-91525.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      reset();
      alert("Thank You For Your Feedback!");
    });
  };

  return (
    // <Container>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <div style={{ display: "flex", flexDirection: "column" }}>
    //       <label>Review Box</label>
    //       <textarea
    //         placeholder="Write Your Review Here"
    //         {...register("review")}
    //       />
    //       <label>Rating</label>
    //       <input
    //         placeholder="Please Enter a number between 1-5"
    //         type="number"
    //         {...register("rating", {
    //           min: 1,
    //           max: 5,
    //         })}
    //       />
    //       {errors.rating?.type === "required"}
    //       <input type="submit" />
    //     </div>
    //   </form>
    // </Container>

    <Container sx={{ my: 5 }}>
      <h1 style={{ textAlign: "center" }}>Please Leave Us a Review!</h1>
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
            <label style={{paddingTop:"20px"}}>Review Box</label>
            <textarea
              {...register("review")}
            />
            <label>Rating</label>
            <input
              placeholder="Please Enter a number between 1-5"
              type="number"
              {...register("rating", {
                min: 1,
                max: 5,
              })}
            />
            {errors.rating?.type === "required"}

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

export default GiveReview;
