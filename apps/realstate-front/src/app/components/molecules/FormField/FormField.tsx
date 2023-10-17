import React, { RefObject, ChangeEvent } from 'react';
import { Input, Link } from '../../atoms';

interface FormFieldProps {
  label: string;
  fieldName: string;
  placeholder: string;
  type: string;
  state: string;
  changeAction: (value: string) => void;
  additionalStyles?: string;
  hideForgotPassword?: boolean;
  hideLabel?: boolean;
  innerRef?: RefObject<HTMLInputElement>;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FormField: React.FC<FormFieldProps> = ({label, fieldName, placeholder, type, state, changeAction, additionalStyles="", hideForgotPassword=false, hideLabel=false, ...props }) => {
  const computedStyles = `w-full p-2 border rounded-md ${additionalStyles}`;

  return (
    <div className="mb-4 py-0 mx-3">
      {!hideLabel && <label htmlFor={fieldName} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
      <Input type={type} fieldId={fieldName} placeholder={placeholder} className={computedStyles} state={state} setState={changeAction} {...props} />
      {type === 'password' && !hideForgotPassword && <Link to="/password-recovery">Forgot Password?</Link>}
    </div>
  )
}


//<p className="text-right text-sm text-blue-500 hover:underline mt-2 cursor-pointer"></p>