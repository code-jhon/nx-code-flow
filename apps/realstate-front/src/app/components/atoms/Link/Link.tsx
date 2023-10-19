import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Text } from '..';

interface LinkProps {
  children: React.ReactNode | string;
  to: string;
  textType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  isSB?: boolean;
}

export const Link: React.FC<LinkProps> = ({ isSB=false, textType="p", children, ...props }) => {
  return (
    <RouterLink {...props}>
      <Text className={`${isSB ? '' : 'text-right text-sm'}  text-blue-500 hover:underline mt-2 cursor-pointer`} textType={textType}>{children}</Text>
    </RouterLink>
  );
};
