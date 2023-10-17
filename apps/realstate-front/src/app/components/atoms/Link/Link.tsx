import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Text } from '../../atoms';

interface LinkProps {
  children: React.ReactNode | string;
  to: string;
  textType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const Link: React.FC<LinkProps> = ({ textType="p", children, ...props }) => {
  return (
    <RouterLink {...props}>
      <Text className='text-right text-sm text-blue-500 hover:underline mt-2 cursor-pointer' textType={textType}>{children}</Text>
    </RouterLink>
  );
};

export default Link;
