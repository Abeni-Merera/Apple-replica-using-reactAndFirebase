import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../NavComponents/Iphone.css";

function Iphone() {
  const [collProducts, setProducts] = useState([]);
  useEffect(() => {
    fetch("/iphones.json")
      .then((res) => res.json()) // converting to JS Object
      .then((x) => {             // (x) converted data
        setProducts(x.products); // Storing converted Object (data)
      })
      .catch(() => console.log("Error: unble to fetch"));
  }, []);
  console.log(collProducts);

  let order = 1;
  return (
    <div className="iphone">
      <h1 className="iphone__info">Iphones</h1>
      <p className="iphone__brief">The best for the brightest.</p>

      {collProducts?.map((eachArry) => {
        let id = eachArry.product_url;
        let title = eachArry.product_name;
        let img = eachArry.product_img;
        let brief = eachArry.product_brief_description;
        let startPrice = eachArry.starting_Price;
        let priceRange = eachArry.price_range;
        let productPage = "/iphone/" + id;

        let order1 = 1;
        let order2 = 2;
        if (order !== 1) {
          order1 = 2;
          order2 = 1;
          order--;
        } else {
          order++;
        }

        let productPlace = (
          <div
            key={id}
            className="row justify-content-center text-center product-holder h-100 top-100 bottom-100
          "
          >
            <div className={`  col-sm-12 col-md-6 my-auto order-${order1}`}>
              <div className="iphone__title">{title}</div>
              <div className="">{brief}</div>
              <div className="">{` Start at ${startPrice}`}</div>
              <div>{priceRange}</div>
              <div>
                <ul>
                  <li className="list-unstyled">
                    <Link to={productPage}>Learn more</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={` col-sm-12 col-md-6 order-${order2}`}>
              <div>
                <img src={img} />
              </div>
            </div>
          </div>
        );
        return productPlace;
      })}
    </div>
  );
}

export default Iphone;
