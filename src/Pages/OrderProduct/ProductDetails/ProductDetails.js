import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import OrderForm from "../OrderForm/OrderForm";

const ProductDetails = () => {
    const { id } = useParams();
    const [orderProduct, setOrderProduct] = useState({});

    useEffect(() => {
      const url = `https://whispering-bayou-91525.herokuapp.com/orderproduct/${id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setOrderProduct(data);
        });
    }, [id]);

    const { name, price } = orderProduct;
    return (
      <div>
        <h1>
          {name}
          {price}
            </h1>
            <OrderForm orderProduct={orderProduct}></OrderForm>
      </div>
    );
};

export default ProductDetails;