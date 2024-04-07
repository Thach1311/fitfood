import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import Introduce from '../components/Introduce/Introduce';
import HowOrder from '../components/HowOrder/HowOrder';
import Product from '../components/Product/Product';
import Natural from '../components/Natural/Natural';
function Home() {
    return (
        <>
            <Header></Header>
            <Slider></Slider>
            <Introduce></Introduce>
            <HowOrder></HowOrder>
            <Product></Product>
            <Natural></Natural>
        </>
    );
}

export default Home;
