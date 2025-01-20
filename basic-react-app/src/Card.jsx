function Card({ title, children}){
    return(
        <div className="Card">
            <h3>{title}</h3>
            <h5>{children}</h5>

        </div>

    );
}
export default Card;