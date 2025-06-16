import StoryMobile from '../assets/mobileViews/StoryMobile.png';
import ShopMobile from '../assets/mobileViews/ShopMobile.png';
import PackMobile from '../assets/mobileViews/PackMobile.png';
import DiceMobile from '../assets/mobileViews/DiceMobile.png';
import GuessMobile from '../assets/mobileViews/GuessMobile.png';


function MobileView(){
    return (
        <div className='mobile-intro'>
            <h2>Mobile Magic ✨:</h2>
            <p>A sneak peek into how my projects adapt beautifully to mobile screens.</p>
        <div className='mobile-views'>
            <div className='view'>
                <img src={StoryMobile} alt="mobile veiw" className='image'/>
            </div>
           <div className='view'>
                <img src={PackMobile} alt="mobile veiw" className='image'/>
           </div>
           <div className='view'>
                <img src={ShopMobile} alt="mobile veiw" className='image'/>
           </div>
           <div className='view'>
                <img src={DiceMobile} alt="mobile veiw" className='image'/>
           </div>
           <div className='view'>
                <img src={GuessMobile} alt="mobile veiw" className='image'/>
           </div>
        </div>
        </div>
    )
}

export default MobileView;