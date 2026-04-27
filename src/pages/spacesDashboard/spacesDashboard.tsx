import {useContext}from "react";
import {useNavigate}from "react-router-dom";
import {AppContext}from "../context/AppContext";
import SpaceCardfrom "../components/SpaceCard";


const SpacesDashboard=()=>{
const {
spacesList,typeFilter,setTypeFilter}
=
useContext(
AppContext
);
const navigate=
useNavigate();



const filteredSpaces=
typeFilter==="all"
?
spacesList
:
spacesList.filter(
space=>
space.type===typeFilter
);
