import React from 'react';

interface AnchorProps {
  action: () => void;
  children?: React.ReactNode;
  additionalStyles?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Anchor: React.FC<AnchorProps> = ({action, children, additionalStyles="", size="xs"}) => {
  return (
    <div className={`text-${size} underline cursor-pointer ${additionalStyles}`} onClick={action}>
      {children}
    </div>
  );
}

export default Anchor;