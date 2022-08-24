import './zomato.css';
import image from './zomato-image/veggie.jpeg';
import image1 from './zomato-image/cafes.jpg';
import image2 from './zomato-image/sweet tooth.jpg';
import image3 from './zomato-image/images.jpg';
function Collections(props) {
   
    return (
        <div>
            <div className="collection-container">
                <div className="collections">
                    <h1>Collections</h1>
                    <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Coimbatore, based on trends</p>
                </div>
                <div className='order'>
                        <div className='item1'>
                            <div className='img'>
                                <img src={image} width={150} height={150}></img></div>
                            <div className='details'>
                                <p>{props.item}</p>
                                <p>{props.offer}</p>
                                <p>{props.price}</p>
                                <p>{props.restaurant}</p>
                            </div>
                        </div>
                        <div className='item2'>
                            <div className='img'>
                                <img src={image1} width={150} height={150}></img></div>
                            <div className='details'>
                                <p>{props.item}</p>
                                <p>{props.offer}</p>
                                <p>{props.price}</p>
                                <p>{props.restaurant}</p>
                            </div>
                        </div>
                        <div className='item3'>
                            <div className='img'>
                                <img src={image2} width={150} height={150}></img></div>
                            <div className='details'>
                                <p>{props.item}</p>
                                <p>{props.offer}</p>
                                <p>{props.price}</p>
                                <p>{props.restaurant}</p>
                            </div>
                        </div>
                        <div className='item4'>
                            <div className='img'>
                                <img src={image3} width={150} height={150}></img></div>
                            <div className='details'>
                                <p>{props.item}</p>
                                <p>{props.offer}</p>
                                <p>{props.price}</p>
                                <p>{props.restaurant}</p>
                            </div>
                        </div>
                </div>
            </div>
        </div >
    );
}

export default Collections;