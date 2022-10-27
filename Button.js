import "./Button.css";
const Button=({symbol,color,onClick})=>{
    return(
        <div 
        onClick={()=>onClick(symbol)}
        className="button-style" style={{backgroundColor:color}}>{symbol}</div>
    );
};
export default Button;