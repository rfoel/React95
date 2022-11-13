import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Wmsui325087_32x32_4 from '../../png/Wmsui325087_32x32_4.png';

export const wmsui325087Data = {
  '32x32_4': {
    imageSrc: Wmsui325087_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Wmsui325087Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Wmsui325087: React.FC<Wmsui325087Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = wmsui325087Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
