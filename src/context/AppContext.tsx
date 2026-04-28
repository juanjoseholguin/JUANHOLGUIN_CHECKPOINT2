import {
createContext,
useState
}
from "react";

import {initialSpaces}
from "../data/spacesData";


export const AppContext=
createContext(null);



export const AppContextProvider=
({children})=>{


const [
spacesList,
setSpacesList
]
=
useState(initialSpaces);


