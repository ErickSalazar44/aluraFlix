import {PiVideo} from 'react-icons/pi'

const Button = ({text}) => {
  return (
    <button className="flex items-center gap-3 text-lg font-semibold bg-btn py-[10px] px-[22px] rounded min-w-[144px]">
      <PiVideo size={24} color='white'/>
      {text}
    </button>
  )
}

export default Button