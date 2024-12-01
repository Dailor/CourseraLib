import React, { useEffect, useState } from 'react';

const RunText = ({ children }) => {
  const [position, setPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const container = document.getElementById('run-text-container');
    setContainerWidth(container.clientWidth);

    const interval = setInterval(() => {
      setPosition(prevPosition => {
        // Если текущая позиция меньше или равна отрицательной ширине текста,
        // то сбросить позицию в начальную точку
        if (prevPosition <= -containerWidth) {
          return containerWidth;
        }
        // В противном случае продолжать двигать текст
        return prevPosition - 2;
      });
    }, 5);
    
    return () => clearInterval(interval);
  }, [containerWidth]);

  return (
    <div id="run-text-container" style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <div style={{ transform: `translateX(${position}px)` }}>{children}</div>
    </div>
  );
}

export default RunText;
