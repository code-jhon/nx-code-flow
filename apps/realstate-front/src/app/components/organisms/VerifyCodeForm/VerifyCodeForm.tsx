import React, { useState, useRef } from 'react';
import { Form, FormField } from '../../molecules';
import { checkCode } from '../../../services/codeService';

interface VerifyCodeFormProps {
  children?: React.ReactNode;
}

export const VerifyCodeForm: React.FC<VerifyCodeFormProps> = ({ children }) => {
  const initialCodeState = ['', '', '', ''];
  const [code, setCode] = useState<string[]>(initialCodeState);

  /* eslint-disable-next-line */
  const refs: React.RefObject<HTMLInputElement>[] = Array(4).fill(0).map(() => useRef<HTMLInputElement>(null));

  const handleInputChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;

    setCode(newCode);

    if (value.length === 1 && refs[index + 1]) {
      refs[index + 1].current?.focus();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const completeCode = code.join('');
    const verified = checkCode(completeCode);
    console.log(verified);
  };

  const fieldStyles = 'border-none block text-sm font-medium mb-2 text-center w-2/3';

  return (
    <Form onSubmit={handleSubmit} buttonLabel="Verify">
      <div className="flex justify-center">
        {code.map((value, index) => (
          <FormField
            key={index}
            innerRef={refs[index]}
            label=""
            type="number"
            fieldName={`code-${index}`}
            placeholder="-"
            state={value}
            changeAction={(val) => handleInputChange(val, index)}
            additionalStyles={fieldStyles}
            hideLabel
          />
        ))}
      </div>
    </Form>
  );
};
