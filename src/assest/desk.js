import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Desk(props) {
  return (
    <Svg viewBox="0 0 480 480" {...props}>
      <Path d="M472 72H8a8 8 0 00-8 8v32a8 8 0 008 8h8v280a8 8 0 008 8h32a8 8 0 008-8V216h224v192h176V120h8a8 8 0 008-8V80a8 8 0 00-8-8zM48 392H32V120h16v272zm240-192H64v-16h224v16zm0-32H64v-48h224v48zm160 224H304v-16h144v16zm0-32H304v-48h144v48zm0-64H304v-80h144v80zm0-96H304v-80h144v80zm16-96H16V88h448v16z" />
      <Path d="M360 136h32v16h-32zM160 136h32v16h-32zM360 232h32v16h-32zM360 328h32v16h-32z" />
    </Svg>
  );
}

export default Desk;
