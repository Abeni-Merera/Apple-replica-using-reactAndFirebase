import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import Four04 from "../Four04(Error)/Four04";
import './LearnMore.css'

function ProductPages() {
 const [products, setProductID] = useState([])
 const {productID} = useParams()
// console.log(useParams);
 useEffect(() => {
    fetch('/iphones.json')
      .then((res) => res.json())
      .then((JsObject) => {
        const product = JsObject.products
        const singleArray = product.filter(
          (x) => x.product_url == productID
        );
      // console.log(singleArray)
        setProductID(singleArray)
      })
      .catch(() => console.log('unable to fetch'))
  }, [])

  console.log(products);
 
if (products.length !== 0) {
  return (
    
      <div className="learnMore">
        {products?.map((eachArry) => {
          let id = eachArry.product_id;
          let title = eachArry.product_name;
          let img = eachArry.product_img;
          let brief = eachArry.product_brief_description;
          let description = eachArry.product_description;
          let startPrice = eachArry.starting_Price;
          let priceRange = eachArry.price_range;
          

          let productPlace = (
           <div className="row container justify-content-center text-center product-holder h-100 top-100 bottom-100">
             <div key={id} className={` col-sm-12 col-md-6 my-auto learnMore_desc `}>
              <div className="learnMore_title">{title}</div>
              <div>{brief}</div>
              <div>{` Start at ${startPrice}`}</div>
              <div>{priceRange}</div>
              <div>{description}</div>
            </div>

            <div className={` col-sm-12 col-md-6 `}>
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
}else{
  return <Four04/>;
}

}

export default ProductPages;
