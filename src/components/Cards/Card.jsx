import { FaDollarSign } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
const Card = ({card}) => {
    const {title, card_img, description, price, credit_hour} = card
    return (
        <div className='bg-slate-300 shadow-md p-8 rounded-lg flex flex-col'>
            <div>
            <img className='w-full h-auto' src={card_img} alt={`card_img ${title}`}/>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='text-gray-500'>{description}</p>
            </div>
            <div className='flex justify-between'>

                <div className='flex items-center'><FaDollarSign /><p className='m-2 font-semibold text-gray-500 text-xl'>Price: {price}</p></div>
                <div className='flex items-center'><FaBookOpen /><p className='m-2 font-semibold text-gray-500 text-xl'>Credit: {credit_hour} hr</p></div>
            </div>
            
            <button className='bg-blue-400 rounded-lg flex-1 p-3' >SELECT</button>
            
        </div>
    );
};

export default Card;