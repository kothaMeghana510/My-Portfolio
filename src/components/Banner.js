import bannerVideo from '../assets/bannerVedio.mp4'; 
import BannerDetails from './BannerDetails';

function Banner(){
    return (
        <>
        <div className='glass-container'>
           <video autoPlay muted loop playsInline className='background-vedio'>
            <source src={bannerVideo} type="video/mp4"></source>
           </video>
        </div>

        <div>
            <BannerDetails />
        </div>
        </>
    )
}

export default Banner;