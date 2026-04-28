import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

export const Summary=()=>{

const navigate=useNavigate();

const {
spacesList,
reservations,
cancelReservation
}
=
useContext(AppContext);


const totalSpaces=spacesList.length;
const available=spacesList.filter(space=>space.available).length;

const activeReservations=reservations.length;
reservations.forEach((item:any)=>{totalIncome+=item.total});

return(


<div>

<h1>el resumen :D</h1>

<button onClick={()=>navigate("/")}>volver</button>

<p>total espaicos: {totalSpaces}</p>

<p>disponibvle: {available}</p>

<p> reservas: {activeReservations}</p>


{reservations.length===0?<p>no hay reservas :cc</p>
:
reservations.map((item:any)=>(<div key={item.id}>

<p>{item.name}</p>

<button onClick={()=>cancelReservation(item.id)}>cancelar reserva aqui</button>
</div>
))
}
</div>
)

}