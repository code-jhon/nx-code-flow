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
  size?: '1/2' | '1/3' | '1/4' | '1/5' | '1/6' | 'full';
  innerRef?: string | React.RefObject<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({ placeholder, type, fieldId, className, state, setState, size="full", innerRef="" }) => {
  const [show, setShow] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }

  const handleShowPassword = () => {
    setShow(!show);
  }

  const computedType = type === 'password' ? show ? 'text' : 'password' : type;

  const computedProps = innerRef ? { ref: innerRef } : {};

  return (
    <div>
      <div className={`w-${size} relative mt-2 rounded-md shadow-sm`}>
        <input {...computedProps} type={computedType} id={fieldId} className={`w-full border-2 border-gray-100 bg-gray-100 rounded-md p-2 ${className}`} placeholder={placeholder} value={state} onChange={handleInputChange} />
        {type === 'password' && <button type="button" className="absolute inset-y-1 right-0 pr-3 flex items-center text-sm leading-5" onClick={handleShowPassword}>
          {show ? <Img className='w-9' src={Visible} alt="Show Password" /> : <Img className='w-9' src={Invisible} alt="Hide Password" />}
        </button>}
      </div>
    </div>
  )
} 
