import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mcm3201_32x32_4 from '../../png/Mcm3201_32x32_4.png';

export const mcm3201Data = {
  '32x32_4': {
    imageSrc: Mcm3201_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mcm3201Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mcm3201: React.FC<Mcm3201Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mcm3201Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
