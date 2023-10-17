import React, { Dispatch, SetStateAction} from 'react';
import { Input, Link } from '../../atoms';

interface FormFieldProps {
  label: string;
  fieldName: string;
  placeholder: string;
  type: string;
  state: string;
  changeAction: Dispatch<SetStateAction<string>>;
  additionalStyles?: string;
  hideForgotPassword?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({label, fieldName, placeholder, type, state, changeAction, additionalStyles="", hideForgotPassword=false }) => {
  const computedStyles = additionalStyles ? additionalStyles : 'w-full p-2 border rounded-md';

  return (
    <div className="mb-4 py-0">
      <label htmlFor={fieldName} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <Input type={type} fieldId={fieldName} placeholder={placeholder} className={computedStyles} state={state} setState={changeAction} />
      {type === 'password' && !hideForgotPassword && <Link to="/password-recovery">Forgot Password?</Link>}
    </div>
  )
}

//<p className="text-right text-sm text-blue-500 hover:underline mt-2 cursor-pointer"></p>