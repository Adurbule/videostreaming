import Carousel from "./Carousel.js";
import Videos from "./Videos.js";
function Home(){
    return (
        <div>
            <Carousel></Carousel>
            <div className="container-fluid">
            <Videos/>
            </div>
           
        </div>
    )
}
export default Home