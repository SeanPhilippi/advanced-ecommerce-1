import React from 'react';
import Button from './Button';

const ProductDetail = props => {

   const { rating, imgUrl, price, name, description, reviews, increment } = props.product;
   // create stars
   let allStars;
   const insertStars = () => {
      let stars = Array(rating).fill(
         <span className="glyphicon glyphicon-star"></span>
      );
      let emptyStars = Array(5 - rating).fill(
         <span className="glyphicon glyphicon-star-empty"></span>
      );
      allStars = stars.concat(emptyStars);
      return allStars;
   }
   
   insertStars();


   return (
      <div className="col-sm-4 col-lg-4 col-md-4">
         <div className="thumbnail">
               <img src={ imgUrl } alt=""/>
               <div className="caption">
                  <h4 className="pull-right">{ price }</h4>
                  <h4><a href="#">{ name }</a>
                  </h4>
                  <p>{ description }</p>
               </div>
               <div className="ratings">
                  <p className="pull-right">{ reviews }</p>
                  <p>
                     { allStars }
                  </p>
               </div>
            <Button increment={ props.increment } />
         </div>
      </div>
   )
}

export default ProductDetail;