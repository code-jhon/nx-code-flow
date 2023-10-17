import React, { useState, useRef } from 'react';
import { Text, Anchor, Toast } from '../../atoms';
import { Form, FormField } from '../../molecules';
import { checkCode } from '../../../services/codeService';

import { useNavigate } from "react-router-dom";

interface VerifyCodeFormProps {
  children?: React.ReactNode;
}

export const VerifyCodeForm: React.FC<VerifyCodeFormProps> = ({ children }) => {
  const initialCodeState = ['', '', '', ''];
  const [code, setCode] = useState<string[]>(initialCodeState);
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

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
    if (verified) {
      navigate('/password-recovery/new-password');
    }else{
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  };

  const handleResendCode = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }

  const fieldStyles = 'border-none block text-sm font-medium mb-2 text-center w-2/3';

  return (
    <Form onSubmit={handleSubmit} buttonLabel="Verify">
      <div className="flex justify-center px-4">
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
      <div className='flex flex-col align-middle justify-center text-center px-4 mb-4'>
        <Text textType="p" className="text-xs text-gray-300 ">Didn't receive OTP?</Text>
        <Anchor action={handleResendCode} additionalStyles="text-gray-800" size="xs">Resend Code</Anchor>
      </div>
      { isVisible && <Toast message="The code is 1234" type="info" />}
      { isError && <Toast message="Wrong Code, try again" type="error" />}
    </Form>
  );
};
