import {useContext}from "react";
import {useNavigate}from "react-router-dom";
import {AppContext}from "../context/AppContext";

const Summary=()=>{
    const navigate=useNavigate();

const {
spacesList,
reservations,
cancelReservation
}
=useContext(AppContext);


const totalSpaces=spacesList.length;
const available=spacesList.filter(space=>space.available).length;

const activeReservations=reservations.length;


let totalIncome=0;

reservations.forEach(item=>{totalIncome+=item.total});


return(
<div>

<h1>resumen xd</h1>

<button onClick={()=>navigate("/")}>volver</button>

<p>tootal:{totalSpaces}</p>
<p>dispo:{available}</p>
<p>reservas:{activeReservations}</p>
<p>ingresos:{totalIncome}</p>

{reservations.length===0?<p>no hay reservas :c</p>:

reservations.map(item=>(<div key={item.id}>
<p>{item.name}</p>

<button onClick={()=>cancelReservation(item.id)}>cancelar la resrva</button>

</div>
))
}
</div>

)}

export default Summary;