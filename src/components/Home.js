import {Route,Routes} from "react-router-dom";
import App from "../App";
function Home(){
    return(
        <>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/Rentomojo" element={<App/>}/>
            </Routes>
        </>
    )
}