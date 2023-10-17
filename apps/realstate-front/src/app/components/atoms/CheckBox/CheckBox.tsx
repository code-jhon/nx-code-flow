import React from 'react';
import { Text } from "../"

interface CheckboxProps {
  fieldName: string;
  checked: boolean;
  label?: string;
  changeAction: (checked: boolean) => void;
  additionalStyles?: string;
  linkToModal?: string;
  linkCTA?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, label, changeAction, fieldName, additionalStyles, linkToModal, linkCTA }) => {
  return (
    <label className="flex items-center mb-4">
      <input
        type="checkbox"
        id={fieldName}
        className={`form-checkbox h-4 w-4 text-blue-600 rounded ${additionalStyles}}`}
        checked={checked}
        onChange={(e) => changeAction(e.target.checked)}
      />
      {label && <span className="text-sm ml-2 text-gray-700">{label} {linkToModal && <span onClick={linkCTA} className='text-right text-sm text-blue-500 hover:underline mt-2 cursor-pointer'>Terms & Condition</span>}</span>}
    </label>
  );
};

export default Checkbox;