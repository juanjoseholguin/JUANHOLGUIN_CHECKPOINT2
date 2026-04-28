import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SpaceCard = ({ space }:any) => {

const { handleReserve }= useContext(AppContext);

return(
<div>

<h1>{space.name}</h1>

<p>{space.type}</p>

<p>capacidad: {space.capacity}</p>
<p>{space.location}</p>

<p>{space.pricePerHour}</p>

<p>{space.available ? "dispo": "ocupao"}</p>

{space.available && <button onClick={()=>handleReserve(space)}>reservaa aquiii</button>}
</div>
)

}

export default SpaceCard;