// import mainVisual from '../../img/artword_2021__01.jpg';
import mainVisual from '../../img/artword_2021__12.jpg';
import Description from '../layout/Description';

const Landing = () => {
    return (
        <div className='page'>            
            <div className='main-img'>
                <img src={mainVisual} alt='' className='main-img' />
            </div>
            <Description />
        </div>
    );
};

export default Landing;
