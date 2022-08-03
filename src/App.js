import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Camp from "./pages/camp/Camp";
import List from "./pages/list/List";

function App() {
    return ( 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/camps" element={<List/>}/>
            <Route path="/camps/:id" element={<Camp/>}/>
        </Routes> 
        </BrowserRouter>
    );
}

export default App;