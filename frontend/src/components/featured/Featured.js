import "./featured.css"
import image from '../../images/tent.jpg'
import image2 from '../../images/cabin.jpg'
import image3 from '../../images/rv.jpg'
import { Link } from "react-router-dom";

const Featured = () => {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <Link to = "/tents"><img src={image} alt="tent" className='featuredImg' /> </Link>
                <div className="featuredTitles">
                    <h1>Tent</h1>
                    <h3>The OG campsite</h3>
                </div>
            </div>
            <div className='featuredItem'>
                <Link to = "/cabins"><img src={image2} alt="cabin" className='featuredImg' /> </Link>
                <div className="featuredTitles">
                    <h1>Cabin</h1>
                    <h3>Camping refined</h3>
                </div>
            </div><div className='featuredItem'>
                <Link to = "/rvs"><img src={image3} alt="rv" className='featuredImg' /> </Link>
                <div className="featuredTitles">
                    <h1>RVs</h1>
                    <h3>Ultimate luxury</h3>
                </div>
            </div>
        </div>
    )
}

export default Featured