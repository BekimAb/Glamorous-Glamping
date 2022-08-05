import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Tent from "./pages/tent/Tent";
import Cabin from "./pages/cabin/Cabin"
import Rv from "./pages/rv/Rv"
import List from "./pages/list/List";

function App() {
    return ( 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tents" element={<Tent/>}/>
            <Route path="/tents/:id" element={<Tent/>}/>
            <Route path="/cabins" element={<Cabin/>}/>
            <Route path="/cabins/:id" element={<Cabin/>}/>
            <Route path="/rvs" element={<Rv/>}/>
            <Route path="/rvs/:id" element={<Rv/>}/>
        </Routes> 
        </BrowserRouter>
    );
}

export default App;