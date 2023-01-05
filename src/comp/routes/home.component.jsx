import Directory from "../../comp/dir/directory.component";
import { Outlet } from "react-router-dom";

const Home = ()=>{
   
        const categ = [{
            title: "hat",
            id:"1",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png "
          },
          {
            title: "jackets",
            id:"2",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png "
          },
          {
            title: "shoes",
            id:"3",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
          },
          {
            title: "women",
            id:"4",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png "
          },
          {
            title: "men",
            id:"5",
            imageUrl: " https://i.ibb.co/px2tCc3/jackets.png"
          },
          {
            title: "denims",
            id:"6",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
          },
          {
            title: "swimwear",
            id:"7",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png "
          },
          {
            title: "home",
            id:"8",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
          },
          {
            title: "casual",
            id:"9",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
          },
          {
            title: "formals",
            id:"10",
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
          },
          {
            title: "khushi",
            id:"11",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png "
          }
        ]
        return (
          <div>
            <Outlet />
            <Directory catego= {categ}/>  //yaha catego ek var ban jata ha jisme woh categ le rha hai us catego jo hi as a prop call krna hai args me  fir we call the object categ by calling catego in cny component
            </div>
           );
  
}

export default Home;