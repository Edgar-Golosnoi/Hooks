import React, { useRef } from 'react'; // 2
import useHover from '../hooks/useHover';

function Hover() {
  const ref = useRef();
  const isHovering = useHover(ref);

  console.log(isHovering);

  return (
    <div ref={ref} style={{ width: 250, height: 250, background: isHovering ? 'red' : 'green' }} />
  );
}

export default Hover;
