import CategItem from "../category/categ-item.component";

const Directory =({catego})=>{
    return (
        <div className="categories-container">
     { catego.map((props)=>(
         <CategItem key = {props.id} props= {props}/>
   
    )) }
     </div>
    );
}

export default Directory;