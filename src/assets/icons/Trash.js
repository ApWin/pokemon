import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5 8v10a4 4 0 004 4h6a4 4 0 004-4V8m-5 3v6m-4-6v6m6-12l-1.406-2.11A2 2 0 0012.93 2h-1.86a2 2 0 00-1.664.89L8 5m8 0H8m8 0h5M8 5H3"
        stroke="#28303F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
