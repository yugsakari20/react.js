import { Route, Routes } from "react-router-dom"
import Home from "./src/pages/Home"
import About from "./src/pages/About"
import Login from "./src/pages/Login"
import Signup from "./src/pages/Signup"


const Allroute = () => {
    return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
    )
}

export default Allroute;