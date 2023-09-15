import { FaDollarSign } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Card = ({card,handleCourse}) => {
    const {title, card_img, description, price, credit_hour} = card
    return (
        <div className='bg-white shadow-md p-8 rounded-lg flex flex-col'>
            <div>
            <img className='w-full h-auto' src={card_img} alt={`card_img ${title}`}/>
            <h3 className='text-2xl font-semibold h-[70px]'>{title}</h3>
            <p className='text-gray-500 h-[75px]'>{description}</p>
            </div>
            <div className='flex justify-between'>

                <div className='flex items-center'><FaDollarSign /><p className='m-2 font-semibold text-gray-500'>Price: {price}</p></div>
                <div className='flex items-center'><FaBookOpen /><p className='m-2 font-semibold text-gray-500'>Credit: {credit_hour} hr</p></div>
            </div>
            
            <button className='bg-blue-400 rounded-lg flex-1 p-3 font-bold text-white' onClick={()=>{handleCourse(card,credit_hour)}} >SELECT</button>
            
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object,
    handleCourse:PropTypes.func
}
export default Card;