import { useState, useEffect, useRef, useCallback } from 'react';

const FullScreen = () => {
  const ref = useRef<HTMLVideoElement>(null);

  const onClick = useCallback(() => {
    const elem = ref.current;
    if (elem && elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  }, []);

  return (
    <div>
      <button onClick={onClick}>FullScreen</button>
      <video
        autoPlay
        loop
        muted
        controls
        poster="http://webfeelfree.com/sample/img/bg_20140214.jpg"
        width="400px"
        ref={ref}
      >
        <source
          src="http://webfeelfree.com/sample/img/bg_20140214.mp4"
          type="video/mp4"
        />
        <source
          src="http://webfeelfree.com/sample/img/bg_20140214.ogv"
          type="video/ogg"
        />
        <source
          src="http://webfeelfree.com/sample/img/bg_20140214.webm"
          type="video/webm"
        />
        <img
          src="http://webfeelfree.com/sample/img/bg_20140214.jpg"
          width="400px"
        />
      </video>
    </div>
  );
};

export default FullScreen;
