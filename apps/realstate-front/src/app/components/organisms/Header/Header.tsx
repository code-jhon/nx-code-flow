import React from 'react';
import { Text } from "../../atoms";

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-9">
      <Text textType="h1" className="text-2xl text-gray-800 mb-4"> Sign In </Text>
      <Text textType="p" className="text-xs text-gray-400 mb-4">Hi! Welcome back, you've been missed</Text>
    </div>
  );
}