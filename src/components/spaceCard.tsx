import {useContext}from "react";
import {AppContext}from "../context/AppContext";

const SpaceCard=({space})=>{

const {handleReserve}=useContext(AppContext);


return(

<div>

<h2>{space.name}</h2>

<p>{space.type}</p>

<p>capacidad:{space.capacity}</p>
<p>{space.location}</p>
<p>{space.pricePerHour}</p>
<p>{space.available?"dispo":"ocupao"}</p>

{space.available &&
<buttononClick={()=>handleReserve(space)}
>
reserva aqui
</button>
}

</div>

)

}

export default SpaceCard;