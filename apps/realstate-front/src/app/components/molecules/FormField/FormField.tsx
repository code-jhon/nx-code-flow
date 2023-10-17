import React, { Dispatch, SetStateAction} from 'react';
import { Input } from '../../atoms';

interface FormFieldProps {
  label: string;
  fieldName: string;
  placeholder: string;
  type: string;
  state: string;
  changeAction: Dispatch<SetStateAction<string>>;
  additionalStyles?: string;
}

export const FormField: React.FC<FormFieldProps> = ({label, fieldName, placeholder, type, state, changeAction, additionalStyles="" }) => {
  const computedStyles = additionalStyles ? additionalStyles : 'w-full p-2 border rounded-md';
  return (
    <div className="mb-4">
      <label htmlFor={fieldName} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <Input type={type} fieldId={fieldName} placeholder={placeholder} className={computedStyles} state={state} setState={changeAction} />
      {type === 'password' && <p className="text-right text-blue-500 hover:underline mt-2 cursor-pointer">Forgot Password?</p>}
    </div>
  )
}