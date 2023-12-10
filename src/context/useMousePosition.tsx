import React from 'react';

const useMousePosition = () => {

  const [
    mousePosition,
    setMousePosition
  ] = React.useState(`${0}px, ${0}px`);

  React.useEffect(() => {
    const updateMousePosition = ev => {
      setMousePosition(`${ev.clientX}px, ${ev.clientY}px`);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};
export default useMousePosition;