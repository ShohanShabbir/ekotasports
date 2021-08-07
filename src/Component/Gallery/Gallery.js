import React from 'react';
import pictures from '../../image/1X_u4PD9kdIdelCkR0rAx4aVDWE_wMwBQrgpC_XoeQ8eJxFPc.jfif';
import pictures1 from '../../image/27Yoy53ty915jjw2-4k43pqxxnoxY7dTcoHg8zM6SI0eJxFPc.jfif';
import pictures2 from '../../image/WlHzIft4vXCIj0hAebsU-4VivWE-w-eTwFB8qb1gevYeJxFPc.jfif';
import pictures3 from '../../image/ZQgXhC84UabKkGfmeXpsDnR3q8jBok0ZJIJUkXQ86FoeJxFPc (1).jfif';
import pictures4 from '../../image/w29AnzRvddYhL8qZM_tAO2mzE62pRWHp-AdFzPYC70seJxFPc.jfif';
import pictures5 from '../../image/tSvrnmQSHpIhzlio4mPp51iKhOwA9hNbW5N8wNt63LgeJxFPc.jfif';
import { Link} from 'react-router-dom';
import './Gallery.css';


const Gallery = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (

        <div className="gallery">
            <div className="container">
                <div className="row row-cols-md-4 row-cols-1">
                    <div className="col">
                        <Link to='/gallery'>
                        <div onclick={scrollToTop} className="card">
                            <img src={pictures} alt="" />
                        </div>
                        </Link>
                    </div>
                    <div className="col">
                    <Link to='/gallery'>
                        <div className="card">
                            <img src={pictures1} alt="" />
                        </div>
                        </Link>
                    </div>
                    <div className="col">
                    <Link to='/gallery'>
                        <div className="card">
                            <img src={pictures2} alt="" />
                        </div>
                           </Link>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={pictures3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Gallery;