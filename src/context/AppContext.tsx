import { createContext, useState } from "react";
import { initialSpaces } from "../data/data";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
const [spacesList,setSpacesList] =useState(initialSpaces);



const [reservations,setReservations] =useState([]);
const [typeFilter,setTypeFilter] =useState("all");
const handleReserve = (space:any) => {
const pdatedSpaces=spacesList.map(item=>{
	if(item.id===space.id){
return{...item,available:false}}
return item;
});

setReservations([
...reservations,
newReservation
]);

};
const cancelReservation=(id:number)=>{



const newReservations=
reservations.filter((item:any)=>item.id!==id);

setReservations(newReservations);

const updatedSpaces=spacesList.map(space=>{

if(space.id===id){return{...space,available:true}}

return space;});

setSpacesList(updatedSpaces);

};
return(
<AppContext.Provider
value={{
spacesList,
reservations,
typeFilter,
setTypeFilter,
handleReserve,
cancelReservation
}}
>
{children}
</AppContext.Provider>
)

}