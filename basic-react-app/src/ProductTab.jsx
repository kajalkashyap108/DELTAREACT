import Product from "./Product.jsx";


function ProductTab(){
let styles = {display:"flex",flexWrap:"wrap",justifyContent:"center",alignitems:"center"};
//let options=["hi-teach","durable","fast"];
//let options2 ={ a: "hi-teach", b: "durable",c: "fast" }
return(
    <div style={styles}>
      
    <Product title="Logitech MX Master" idx={0}/>
  <Product title="Apple Pencil (2nd Gen)" idx={1} /> {/* features={options} features2={options2}*/} 
    <Product title="Zebronics Zeb-transformer" idx={2} />
    <Product title="Petronics Toad 23" idx={3} />
    </div>
);
}
export default ProductTab;