import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/home/01.jpg';
import img2 from '../../assets/home/02.jpg';
import img3 from '../../assets/home/03.png';
import img4 from '../../assets/home/04.jpg';
import img5 from '../../assets/home/05.png';
import img6 from '../../assets/home/06.png';


const Banner: React.FC = () => {
    const setting = {
        arrows:false,
    }

    return (
        <Slider {...setting}>
            <div>
                <img src={img1}/>
            </div>
            <div>
                <img src={img2}/>
            </div>
            <div>
                <img src={img3}/>
            </div>
            <div>
                <img src={img4}/>
            </div>
            <div>
                <img src={img5}/>
            </div>
            <div>
                <img src={img6}/>
            </div>
        </Slider>
    );
};

export default Banner;