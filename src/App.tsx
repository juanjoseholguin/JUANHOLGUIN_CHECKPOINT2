import {Routes,Route}
from "react-router-dom";
import {SpacesProvider}
from "./context/spacesContext";
import {SpacesDashboard}
from "./pages/spacesDashboard/spacesDashboard";
import {Summary}
from "./pages/summary/summary";

function App(){
return(
<spacesProvider>
<Routes>
<Route path="/" element={<spacesDashboard/>}
/>
<Route path="/summary" element={<Summary/>}
/> </Routes>
</spacesProvider>
)

}

export default App;