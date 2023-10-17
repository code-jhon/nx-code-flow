import React from 'react'

interface InputProps {
  placeholder: string;
  type: string;
  fieldId: string;
  className?: string;
  state: string;
  setState: (e: string) => void;
}


const Input: React.FC<InputProps> = ({ placeholder, type, fieldId, className, state, setState }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }

  return (
    <input type={type} id={fieldId} className="border-2 border-gray-300 rounded-md p-2" placeholder={placeholder} value={state} onChange={handleInputChange} />
  )
} 

export default Input