import React, { useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

import playIcon from '../images/play-icon.svg';
import pauseIcon from '../images/pause-icon.svg';

export default function AudioMessage({ audio }) {

  const audioContainerRef = useRef();
  const waveSurferRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  // Свойства для аудисообщения
  const waveProps = {
    waveColor: '#868686',
    progressColor: '#fff',
    responsive: true,
    cursorWidth: 0,
    barWidth: 3,
    height: 'auto',
    barHeight: .8,
    barRadius: 10,
    barGap: 5,
  };

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({ ...waveProps, container: audioContainerRef.current });

    wavesurfer.load(audio);
    wavesurfer.on('ready', () => {
      waveSurferRef.current = wavesurfer;
      setIsBtnDisabled(false);
    });

    return () => wavesurfer.destroy();
  }, []);

  function handlePlayBtn() {
    waveSurferRef.current.playPause();
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="about__voice">
      <span className="about__voice-corner"></span>
      <button
        className={`about__voice-btn button ${isBtnDisabled ? 'about__voice-btn_disabled' : ''}`}
        onClick={handlePlayBtn}
        disabled={isBtnDisabled}
      >
        <img src={isPlaying ? pauseIcon : playIcon} alt="Кнопка проигрывателя" className="about__voice-btn-img" />
      </button>
      <div ref={audioContainerRef} className="about__voice-track"></div>
    </div>
  )
}
