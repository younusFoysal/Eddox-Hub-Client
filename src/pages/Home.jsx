import { Helmet } from 'react-helmet-async'
import Banner from "../components/Home/Banner.jsx";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Eddox Hub | All In One Place</title>
            </Helmet>
            <Banner></Banner>

        </div>
    )
}

export default Home
