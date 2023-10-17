import React from 'react';
import { Text } from "../../atoms";

interface HeaderProps {
  headerText: string;
  subHeaderText: string;
  subText?: string;
}

export const Header: React.FC<HeaderProps> = ({headerText, subHeaderText, subText=""}) => {
  return (
    <div className="flex flex-col items-center justify-center my-9 mx-12 text-center">
      <Text textType="h1" className="text-2xl text-gray-800 mb-4">{headerText}</Text>
      <Text textType="p" className="text-xs text-gray-400 mb-4">
        {subHeaderText}
        {' '}
        {subText && <Text textType="span" className="text-xs text-blue-500 mb-4">{subText}</Text>}
      </Text>
    </div>
  );
}