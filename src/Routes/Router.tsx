import { Routes, Route } from "react-router"

import { Login, Logout } from "../Components/Login"
import Protect from "../Auth/Protect"

import Hub from "../Components/Hub"
import NotFound from "../Components/NotFound"
import Contact from "../Components/Contact"
import Rotations from "../Components/Rotations"

const Router = () => {
    return (
      <Routes>
        <Route index element={<Hub />} />
        <Route path="*" element={<NotFound />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/rotations" element={<Protect page={<Rotations />} />}/>
      </Routes>
    );
}

export default Router