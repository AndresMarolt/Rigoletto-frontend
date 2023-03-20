import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Contact from "../Contact/Contact";
import AboutUs from "../AboutUs/AboutUs";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";


import { Routes, Route } from "react-router-dom";


const AppLayout = () => {


    return(
        <>
            <Header />

            <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu/:category/" element={<ItemListContainer />} />
                <Route path="item/:itemId" element={<ItemDetailContainer />} />
                <Route path="/reservas" element={<Contact />} />
                <Route path="/nosotros" element={<AboutUs />} />
                <Route path="/cart" element={<Cart />} />
                
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
            </main>

            <Footer />
        </>
    )
}

export default AppLayout;