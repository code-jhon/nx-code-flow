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
  return (
    <div className="mb-4">
      <label htmlFor={fieldName} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <Input type={type} fieldId={fieldName} placeholder={placeholder} className={`w-full p-2 border rounded-md ${additionalStyles}`} state={state} setState={changeAction} />
    </div>
  )
}