import { Routes, Route } from "react-router"
import Hub from "../Components/Hub"
import NotFound from "../Components/NotFound"
import Contact from "../Components/Contact"

const Router = () => {
    return (
      <Routes>
        <Route index element={<Hub />} />
        <Route path="*" element={<NotFound />}/>
        <Route path="/contact" element={<Contact />}/>

      </Routes>
    );
}

export default Router