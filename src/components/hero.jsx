import Ratio from 'react-bootstrap/Ratio';
import heroVid from '/vid/AUTOMATON_ANIMATION_v07.mp4';

const Hero = () => {
    return (     
        <>
            <div className='hero'>
                <Ratio aspectRatio="16x9">
                    <video width="1920" height="1080" autoPlay={true} loop={true} playsInline={true} muted={true} preload="none" poster="/automatonsai/hero-bg.jpg">
                        <source src={ heroVid } type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Ratio>
            </div>   
        </>
    ); 
} 

export default Hero;