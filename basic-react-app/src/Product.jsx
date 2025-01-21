import Price from "./Price";

function Product({ title,idx }){
    let oldPrices=["12,345","11,000","12,456","2345"];
let newPrices=["23,456","34,567","5,000","45,789"];
let description = [["8,000 DPI","5 Programmable buttons"],
["intuitive surface","designed for ipad pro"],
["designed for ipad pro","intuitive surface"],
["wireless","optical orientation"]];

    return(
        <div className="Product">
            <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} /> 
        </div>
    );
} 

export default Product;