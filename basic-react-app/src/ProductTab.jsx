import Product from "./Product.jsx";

function ProductTab(){

//let options=[<li>"hi-teach"</li>,<li>"durable"</li>,<li>"fast"</li>];
//let options2 ={ a: "hi-teach", b: "durable",c: "fast" }
return(
    <>
    <Product title="Phone" Price={20000}   />
  <Product title="Laptop" Price={50000}   />
    <Product  title="pen" Price={10}/>
    </>
);
}
export default ProductTab;