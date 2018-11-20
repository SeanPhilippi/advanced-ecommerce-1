import React from 'react';
import Button from './Button';

const ProductDetail = props => {
   // create stars
   let allStars;
   const rating = () => {
      const numOfStars = props.product.rating;
      let stars = Array(numOfStars).fill(
         <span className="glyphicon glyphicon-star"></span>
      );
      let emptyStars = Array(5 - numOfStars).fill(
         <span className="glyphicon glyphicon-star-empty"></span>
      );
      allStars = stars.concat(emptyStars);
      return allStars;
   }
   
   rating();

   return (
      <div className="col-sm-4 col-lg-4 col-md-4">
         <div className="thumbnail">
               <img src={ props.product.imgUrl } alt=""/>
               <div className="caption">
                  <h4 className="pull-right">{ props.product.price }</h4>
                  <h4><a href="#">{ props.product.name }</a>
                  </h4>
                  <p>{ props.product.description }</p>
               </div>
               <div className="ratings">
                  <p className="pull-right">{ props.product.reviews }</p>
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