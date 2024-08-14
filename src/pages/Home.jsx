import { Helmet } from 'react-helmet-async'
import Banner from "../components/Home/Banner.jsx";
import Products from "../components/Home/Products.jsx";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Eddox Hub | All In One Place</title>
            </Helmet>
            <Banner></Banner>
            <Products/>

        </div>
    )
}

export default Home
