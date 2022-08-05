import "./featured.css"
import image from '../../images/tent.jpg'
import image2 from '../../images/cabin.jpg'
import image3 from '../../images/rv.jpg'

const Featured = () => {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <img src={image} alt="tent" className='featuredImg' /> 
                <div className="featuredTitles">
                    <h1>Tent</h1>
                    <h3>The OG campsite</h3>
                </div>
            </div>
            <div className='featuredItem'>
                <img src={image2} alt="cabin" className='featuredImg' /> 
                <div className="featuredTitles">
                    <h1>Cabins</h1>
                    <h3>Camping refined</h3>
                </div>
            </div><div className='featuredItem'>
                <img src={image3} alt="rv" className='featuredImg' /> 
                <div className="featuredTitles">
                    <h1>RVs</h1>
                    <h3>Ultimate luxury</h3>
                </div>
            </div>
        </div>
    )
}

export default Featured