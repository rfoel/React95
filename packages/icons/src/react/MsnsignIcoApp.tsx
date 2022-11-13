import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import MsnsignIcoApp_32x32_4 from '../../png/MsnsignIcoApp_32x32_4.png';
import MsnsignIcoApp_16x16_4 from '../../png/MsnsignIcoApp_16x16_4.png';

export const msnsignIcoAppData = {
  '32x32_4': {
    imageSrc: MsnsignIcoApp_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: MsnsignIcoApp_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface MsnsignIcoAppProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const MsnsignIcoApp: React.FC<MsnsignIcoAppProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = msnsignIcoAppData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
