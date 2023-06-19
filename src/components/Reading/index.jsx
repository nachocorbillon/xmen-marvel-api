import React, { useState } from 'react';
import completeReadingOrder from '../../assets/completeReadingOrder.json';
import EraDetail from '../EraDetail';
import ReadingMenu from './ReadingMenu';
import { useEffect, useRef } from 'react';


function Reading() {
  const [selectedEraIndex, setSelectedEraIndex] = useState(null);
  const selectedEra = selectedEraIndex !== null ? completeReadingOrder[selectedEraIndex] : null;

  const handleEraSelect = (index, e) => {
    e.preventDefault();
    setSelectedEraIndex(index);
  };

  const contentRef = useRef(null);
  useEffect(() => {
    const contentHeight = contentRef.current.offsetHeight;
    document.documentElement.style.setProperty('--content-height', contentHeight + 'px');
  }, []);

  return (
    <div ref={contentRef}>
 <ReadingMenu handleEraSelect={handleEraSelect} />

      {selectedEra ? (
        <React.Suspense fallback={<div>Loading era information...</div>}>
          <EraDetail era={selectedEra} />
        </React.Suspense>
      ) 
       : (<div className="spacebottom">Please select an era to view its information.</div>)
      }

    </div>
  );
}

export default Reading;