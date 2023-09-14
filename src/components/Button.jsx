import {PiVideo} from 'react-icons/pi'
import './style/btn.css'
import { useNavigate } from 'react-router-dom'
const Button = ({text}) => {

  const navigate = useNavigate()

  return (
    <div className='transition-all duration-500'>
      <button
        onClick={() => navigate('/search')}
        className="custom-button"
      >
        <span className='relative z-10'>
          <PiVideo size={24} color='white' />
        </span>
        <span className='relative z-10'>{text}</span>
        
      </button>
    </div>
  )
}

export default Button