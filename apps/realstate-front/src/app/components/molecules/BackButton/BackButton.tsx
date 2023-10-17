import React from 'react';
import { Img } from '../../atoms';
import ArrowBack from '../../../../assets/icons/arrow-narrow-left.svg'
import { Link as RouterLink } from 'react-router-dom';

export const BackButton: React.FC = () => {
  return (
    <div className="flex justify-start mt-2 p-4">
      <RouterLink to="/">
        <Img src={ArrowBack} className="w-12 rounded-full mx-4 p-3 hover:scale-105 cursor-pointer border-solid border border-gray-300" alt="Arrow Back Button" />
      </RouterLink>
    </div>
  )
}