import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shell3231_32x32_4 from '../../png/Shell3231_32x32_4.png';

export const shell3231Data = {
  '32x32_4': {
    imageSrc: Shell3231_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Shell3231Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Shell3231: React.FC<Shell3231Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = shell3231Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
