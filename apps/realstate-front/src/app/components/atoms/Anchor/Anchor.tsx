import React from 'react';

export interface AnchorProps {
  action: () => void;
  children?: React.ReactNode;
  additionalStyles?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Anchor: React.FC<AnchorProps> = ({action, children, additionalStyles="", size="xs"}) => {
  return (
    <div className={`text-${size} underline cursor-pointer ${additionalStyles}`} onClick={action}>
      {children}
    </div>
  );
};
