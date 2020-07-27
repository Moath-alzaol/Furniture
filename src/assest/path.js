import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

function Paths(props) {
  return (
    <Svg viewBox="0 0 194 96" fill="none" {...props}>
      <Path d="M193.5 2.5C115.1-10.5 51.833 99.5 0 96h193.5V1.5z" fill="#fff" />
    </Svg>
  );
}

export default Paths;
