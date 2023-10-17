import React, { useState } from 'react';
import { Img } from '../../atoms';
import Visible from '../../../../assets/icons/visible.svg';
import Invisible from '../../../../assets/icons/invisible.svg';

interface InputProps {
  placeholder: string;
  type: string;
  fieldId: string;
  className?: string;
  state: string;
  setState: (e: string) => void;
}


const Input: React.FC<InputProps> = ({ placeholder, type, fieldId, className, state, setState }) => {
  const [show, setShow] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }

  const handleShowPassword = () => {
    setShow(!show);
  }

  const computedType = type === 'password' ? show ? 'text' : 'password' : type;

  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input type={computedType} id={fieldId} className={`w-full border-2 border-gray-100 bg-gray-100 rounded-md p-2 ${className}`} placeholder={placeholder} value={state} onChange={handleInputChange} />
        {type === 'password' && <button type="button" className="absolute inset-y-1 right-0 pr-3 flex items-center text-sm leading-5" onClick={handleShowPassword}>
          {show ? <Img className='w-9' src={Visible} alt="Show Password" /> : <Img className='w-9' src={Invisible} alt="Hide Password" />}
        </button>}
      </div>
    </div>
  )
} 

export default Input