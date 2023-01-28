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
        d="M19 2h2a1 1 0 011 1v2m-1-2c-7.941 6.391-12.058 8.113-19 9m16-2v10a2 2 0 104 0V10a2 2 0 10-4 0zM2 18v2a2 2 0 104 0v-2a2 2 0 10-4 0zm8-4v6a2 2 0 104 0v-6a2 2 0 10-4 0z"
        stroke="#28303F"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
