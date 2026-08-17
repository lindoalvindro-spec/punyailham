import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, ArrowRight, Sparkles, Film, Heart } from 'lucide-react';
import gsap from 'gsap';

export default function VideoScreen({ onNext, onVideoPlayStateChange }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(cardRef.current,
      { opacity: 0, y: 35, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.3)' }
    );
  }, []);

  // Sync video play/pause with parent (so Spotify player pauses)
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      if (onVideoPlayStateChange) onVideoPlayStateChange(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      if (onVideoPlayStateChange) onVideoPlayStateChange(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    setCurrentTime(current);
    if (total) {
      setProgress((current / total) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(1, clickX / rect.width));
    videoRef.current.currentTime = newProgress * duration;
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    if (onVideoPlayStateChange) onVideoPlayStateChange(false);
  };

  const handleContainerClick = () => {
    setShowControls(true);
    clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds) || !seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleProceed = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (onVideoPlayStateChange) onVideoPlayStateChange(false);
    onNext();
  };

  return (
    <div className="stage stage--scroll" ref={containerRef} style={{ width: '100%' }}>
      <div ref={cardRef} style={{
        width: '100%', maxWidth: 390, opacity: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 18, width: '100%' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 14px', borderRadius: 20,
            background: 'rgba(59, 130, 246, 0.15)',
            border: '1px solid rgba(96, 165, 250, 0.35)', marginBottom: 8,
          }}>
            <Film size={13} color="#2563eb" />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1e40af', letterSpacing: 1.2, textTransform: 'uppercase' }}>
              Special Cinema Edition 🎬
            </span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: '#1e40af',
            lineHeight: 1.15, marginBottom: 4, letterSpacing: '-0.5px'
          }}>
            Video Spesial Ilwan 🎬✨
          </h2>
          <p style={{
            fontFamily: 'var(--font-cute)', fontSize: '0.82rem', color: '#4a6b34',
            fontWeight: 600
          }}>
            Momen & kenangan manis yang terekam untukmu 🌿🤍
          </p>
        </div>

        {/* Cinematic Video Card Frame */}
        <div style={{
          width: '100%', background: '#ffffff', borderRadius: 28, padding: 14,
          border: '1.5px solid rgba(96,165,250,0.3)',
          boxShadow: '0 20px 50px rgba(15,23,42,0.14)',
          marginBottom: 20, position: 'relative',
        }}>
          {/* Inner Video Container with 16:9 / 9:16 aspect handling */}
          <div
            onClick={handleContainerClick}
            style={{
              position: 'relative', width: '100%', aspectRatio: '9/16', maxHeight: '58vh',
              background: '#0a0f1d', borderRadius: 20, overflow: 'hidden',
              boxShadow: 'inset 0 0 30px rgba(0,0,0,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <video
              ref={videoRef}
              src="/ilham vidio 1.mp4"
              playsInline
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleVideoEnded}
              onClick={togglePlay}
              style={{
                width: '100%', height: '100%', objectFit: 'contain',
                cursor: 'pointer',
              }}
            />

            {/* Big Center Play Button when paused */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(15, 23, 42, 0.45)', backdropFilter: 'blur(3px)',
                  cursor: 'pointer', zIndex: 10,
                }}
              >
                <div style={{
                  width: 68, height: 68, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3b82f6, #7a9a60)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 30px rgba(59, 130, 246, 0.5)',
                  transform: 'scale(1)', transition: 'transform 0.2s',
                }}>
                  <Play size={30} fill="#ffffff" color="#ffffff" style={{ marginLeft: 4 }} />
                </div>
                <span style={{
                  color: '#ffffff', fontFamily: 'var(--font-cute)', fontSize: '0.85rem',
                  fontWeight: 700, marginTop: 12, textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                  letterSpacing: '0.5px',
                }}>
                  Ketuk Untuk Putar Video 🎥
                </span>
              </div>
            )}

            {/* Floating Custom Controls Bar (Bottom Overlay) */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '12px 14px',
              background: 'linear-gradient(180deg, transparent 0%, rgba(10,15,30,0.88) 100%)',
              display: 'flex', flexDirection: 'column', gap: 6,
              opacity: showControls || !isPlaying ? 1 : 0,
              transition: 'opacity 0.3s ease',
              zIndex: 12, pointerEvents: showControls || !isPlaying ? 'auto' : 'none',
            }}>
              {/* Progress Slider */}
              <div
                onClick={handleSeek}
                style={{
                  width: '100%', height: 5, background: 'rgba(255,255,255,0.3)',
                  borderRadius: 4, cursor: 'pointer', position: 'relative',
                }}
              >
                <div style={{
                  width: `${progress}%`, height: '100%',
                  background: 'linear-gradient(90deg, #60a5fa, #a3c985)',
                  borderRadius: 4,
                }} />
              </div>

              {/* Controls Row */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                color: '#ffffff', fontSize: '0.72rem', fontWeight: 600,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <button
                    onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                    style={{
                      background: 'none', border: 'none', color: '#ffffff',
                      cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0,
                    }}
                  >
                    {isPlaying ? <Pause size={18} fill="#fff" /> : <Play size={18} fill="#fff" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    style={{
                      background: 'none', border: 'none', color: '#ffffff',
                      cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0,
                    }}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>

                  <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                </div>

                <button
                  onClick={toggleFullscreen}
                  style={{
                    background: 'none', border: 'none', color: '#ffffff',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0,
                  }}
                >
                  <Maximize size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Sweet Subtitle / Note */}
          <div style={{
            marginTop: 14, padding: '10px 14px',
            background: 'linear-gradient(135deg, rgba(240, 249, 255, 0.8), rgba(236, 248, 229, 0.8))',
            borderRadius: 16, border: '1px solid rgba(96, 165, 250, 0.25)',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--font-cute)', fontSize: '0.84rem', color: '#1e40af',
              fontWeight: 700, margin: 0, letterSpacing: '0.3px',
            }}>
              "a few memorable moments" ✨🤍
            </p>
          </div>
        </div>

        {/* CTA Next Button */}
        <button
          className="btn-primary"
          onClick={handleProceed}
          style={{ width: '100%', padding: '15px 20px', fontSize: '0.95rem' }}
        >
          Lanjutkan ke Kartu Ucapan 🎴 <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
