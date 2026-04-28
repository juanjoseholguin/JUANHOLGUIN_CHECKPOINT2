import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import SpaceCard from "../../components/spaceCard";

export const SpacesDashboard=()=>{
const {
spacesList,
typeFilter,
setTypeFilter
}
=useContext(AppContext);
const navigate=useNavigate();

const filteredSpaces=typeFilter==="all"
? spacesList
: spacesList.filter(
space=>
space.type===typeFilter
);

return(
<>

<h1>espacios</h1>

<button onClick={()=>setTypeFilter("all")}>todsss</button>
<button onClick={()=>setTypeFilter("meeting sala")}>salaa meeting</button>

<button onClick={()=>setTypeFilter("oficina privada")}>Private Office</button>

<button onClick={()=>navigate("/summary")}>Resumen</button>


{
filteredSpaces.map(space=>(
<SpaceCard
key={space.id}
space={space}
/>
))
}

</>
)

}