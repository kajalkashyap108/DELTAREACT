function Product({ title, Price, features }){
   // const list = features.map((feature) => <li>feature</li>)
  // console.log(features);
 //const list= features.map((feature) => <li>{feature}</li>);
 //let isDiscount = Price > 30000 ? "Discount of 5%" : ""  ;

    return(
        <div className="Product">
         <h3>{title}</h3>
         <h5>Price: {Price}</h5>
         {Price > 30000 &&<p> "Discount of 5%"</p>}
          {/* <p>{list}
         </p> 
        
       <p>{features}</p> 
         <p>{features2}</p>
        <p>{isDiscount}</p>*/}
        
        </div>
    );
} 

export default Product;