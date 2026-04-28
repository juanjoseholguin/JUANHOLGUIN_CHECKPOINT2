import {useContext}from "react";
import {useNavigate}from "react-router-dom";

import {AppContext} from "../context/AppContext";
import SpaceCard from "../components/SpaceCard";

const SpacesDashboard=()=>{
const {
spacesList,
typeFilter,
setTypeFilter
}
=
useContext(AppContext);
const navigate= useNavigate();


const filteredSpaces=typeFilter==="all"?spacesList:
spacesList.filter(
space=>space.type===typeFilter
);

return(

<>
<h1>espacios</h1>
<button onClick={()=>setTypeFilter("all")}>todos los que hay</button>

<button onClick={()=>setTypeFilter("meeting room :D")}>me3etings</button>


<button onClick={()=>setTypeFilter("private office")}>private :D</button>


<button onClick={()=>navigate("/summary")}> resumenn</button>


{filteredSpaces.map(space=>(<SpaceCardkey={space.id}space={space}/>))}

</>

)
}

export default SpacesDashboard;