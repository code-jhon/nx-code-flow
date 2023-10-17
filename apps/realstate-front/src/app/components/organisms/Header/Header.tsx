import React from 'react';
import { Text } from "../../atoms";

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Text textType="h1" className="text-2xl font-bold text-gray-800 mb-4"> Sign In </Text>
      <Text textType="p" className="text-gray-600 mb-4">Hi! Welcome back, you've been missed</Text>
    </div>
  );
}