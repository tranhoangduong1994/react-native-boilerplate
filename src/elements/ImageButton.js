/**
 * @flow
 */

import React from 'react';
import { Image, ImageRequireSource, TouchableOpacity } from 'react-native';
import { wrap } from '@agiletechvn/react-theme';

type Props = {
  width: number,
  height: number,
  image: ImageRequireSource,
  callback: () => void
};

const ImageButton = wrap((props: Props) => {
  const {
    width, height, image, callback
  } = props;
  return (
    <TouchableOpacity onPress={callback}>
      <Image source={image} cls={`wd-${width} hg-${height}`} resizeMode="contain" />
    </TouchableOpacity>
  );
});

export default ImageButton;
