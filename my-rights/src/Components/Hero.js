import '../Css/Hero.css';
import Citizen from '../images/citizen.png';
import Police from '../images/police.png';
// CHANGES BY RACHEL
import Person from '../Components/Person';
import '../Css/Person.css';
import {Link} from 'react-scroll';

const Hero=()=> {
return (
    <div className='hero'>
        <div className='hero-overlay'></div>
        <img alt="city" src="https://wallpapers.com/images/hd/anime-graphic-of-aesthetic-city-uuz8p9u5atk9a9l2.jpg"/>
        <div className='hero-text'>
            <h1>Human Rights Project</h1>
            <p>Streamline platform that delivers to citizens reviews of law enforcement. Perfect for avoiding unethical officers
                and implementing moral policing practices!
            </p>
            <div className='persons'>
            <div>
                <Link to="landing" spy={true} smooth={true} offset={50} duration={500}>
                    <Person
                    icon = {Citizen}
                    heading = {'Citizen?'}
                    desc = {'Search up police officers by Name and Badge Number and write them a review after interacting with them. Rate them out of 5 stars!'}
                    />
                </Link>
            </div>
            <div style={{left: "30rem"}}>
                <Link to="landing" spy={true} smooth={true} offset={50} duration={500}>
                    <Person
                    icon = {Police}
                    heading = {'Police Officer?'}
                    desc = {'Register as a police officer and view what citizens are saying about you! '}
                    />
                </Link>

            </div>
        </div>
        </div>
        
    </div>
)
}

export default Hero;
