import React, { useRef, useEffect } from 'react';
import { Download, RotateCcw, Sparkles, Crown, ArrowRight, Quote } from 'lucide-react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';

export default function BirthdayWishCard({ onNext, onRestart }) {
  const cardRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    
    tl.fromTo(cardRef.current,
      { opacity: 0, y: 50, rotation: 2 },
      { opacity: 1, y: 0, rotation: 0, duration: 1, ease: 'power3.out' }
    );
    
    tl.fromTo('.reveal-el', 
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: 'power2.out' },
      "-=0.4"
    );

    tl.fromTo(frameRef.current,
      { boxShadow: '0 10px 30px rgba(59,130,246,0.1)' },
      { boxShadow: '0 20px 50px rgba(59,130,246,0.25)', duration: 2.5, ease: 'sine.inOut', yoyo: true, repeat: -1 },
      0.5
    );

    // Floating animation for decorative stickers & butterflies
    gsap.to('.float-el', {
      y: -8,
      rotation: 3,
      duration: 2.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    });

    setTimeout(() => {
      confetti({
        particleCount: 100, spread: 100, origin: { y: 0.55 },
        colors: ['#3b82f6', '#7a9a60', '#93c5fd', '#a3c985', '#ffffff'],
        gravity: 0.7, scalar: 0.9,
      });
    }, 800);
  }, []);

  return (
    <div className="stage stage--scroll" style={{ paddingBottom: '140px' }}>
      <div ref={cardRef} style={{
        width: '100%', maxWidth: 390, opacity: 0, position: 'relative',
      }}>
        {/* Main Card Frame */}
        <div ref={frameRef} style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #fffbf8 100%)',
          borderRadius: 28, padding: '14px',
          border: '1.5px solid var(--glass-border)',
          position: 'relative', marginBottom: 24,
          boxShadow: '0 16px 48px rgba(15,23,42,0.12)'
        }}>
          {/* Inner Invitation Border */}
          <div style={{
            border: '1px solid rgba(122,154,96,0.3)', borderRadius: 20,
            padding: '34px 20px', textAlign: 'center', position: 'relative', overflow: 'hidden',
            background: 'radial-gradient(circle at top, #ffffff 0%, #f0f9ff 50%, #ecf8e5 100%)'
          }}>

            {/* Cute Cat Decor Sticker (Top Left Corner) */}
            <img src="/lucu1 no bg.png" alt="Cute Decor" className="float-el reveal-el" style={{
              position: 'absolute', top: 10, left: 10, width: 75,
              opacity: 0.95, pointerEvents: 'none', zIndex: 10,
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
            }} onError={(e) => e.target.style.display = 'none'} />

            {/* Pink Hearts Cluster (Top Right Corner) */}
            <img src="/gambar 13 no bg 1.png" alt="Hearts" className="reveal-el" style={{
              position: 'absolute', top: 10, right: 10, width: 75,
              opacity: 0.9, pointerEvents: 'none', zIndex: 10,
              filter: 'drop-shadow(0 4px 8px rgba(59,130,246,0.2))'
            }} onError={(e) => e.target.style.display = 'none'} />

            {/* Top Crown & Sparkles Decoration */}
            <div className="reveal-el" style={{ marginBottom: 14, display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%', background: 'rgba(122,154,96,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(122,154,96,0.3)'
              }}>
                <Crown size={22} color="#4a6b34" />
              </div>
            </div>

            {/* Circular Photo Frame with ilham 8.jpeg & Left/Right Butterflies */}
            <div className="reveal-el" style={{ 
              position: 'relative', width: 150, height: 150, margin: '0 auto 20px' 
            }}>
              {/* Left Butterflies Cluster */}
              <img src="/gambar 12 no bg.png" alt="Left Butterflies" className="float-el" style={{
                position: 'absolute', top: 25, left: -35, width: 60,
                zIndex: 5, pointerEvents: 'none', filter: 'drop-shadow(0 4px 10px rgba(59,130,246,0.3))'
              }} onError={(e) => e.target.style.display = 'none'} />

              {/* Right Butterflies Cluster */}
              <img src="/gambar 12 no bg.png" alt="Right Butterflies" className="float-el" style={{
                position: 'absolute', top: 80, right: -45, width: 55,
                zIndex: 5, pointerEvents: 'none', transform: 'scaleX(-1)',
                filter: 'drop-shadow(0 4px 10px rgba(59,130,246,0.3))'
              }} onError={(e) => e.target.style.display = 'none'} />

              <div style={{
                width: 150, height: 150, borderRadius: '50%',
                overflow: 'hidden', border: '4px solid #fff',
                boxShadow: '0 12px 32px rgba(59,130,246,0.25)',
                position: 'relative', zIndex: 1
              }}>
                <img src="/ilham 8.jpeg" alt="Ilwan" style={{
                  width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center'
                }} onError={(e) => { e.target.src = '/ilham 8.jpeg'; }} />
              </div>
            </div>

            {/* Header Labels */}
            <h3 className="reveal-el" style={{
              fontFamily: 'var(--font-cute)', fontSize: '0.8rem', color: '#4a6b34',
              letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 4, fontWeight: 700
            }}>
              Kartu Ucapan Ulang Tahun 🍵✨
            </h3>
            
            <div className="reveal-el" style={{ textAlign: 'center', marginBottom: 16 }}>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: '#1e40af',
                lineHeight: 1, margin: 0
              }}>
                Ilwan Hanafi 🍵✨
              </h1>
            </div>

            {/* Gold Accent Divider */}
            <div className="reveal-el" style={{
              width: 50, height: 1.5, background: '#7a9a60', margin: '0 auto 18px', opacity: 0.8
            }} />

            {/* Message Box */}
            <div className="reveal-el" style={{
              background: 'rgba(255, 255, 255, 0.85)',
              borderRadius: 18,
              padding: '16px 14px',
              border: '1px solid rgba(96, 165, 250, 0.25)',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
              textAlign: 'left',
              marginBottom: 18,
              lineHeight: 1.75,
              fontSize: '0.85rem',
              color: 'var(--berry)',
            }}>
              <p style={{ fontWeight: 700, color: '#1e40af', marginBottom: 10, textAlign: 'center', fontSize: '0.92rem' }}>
                yeay yeay! happy birthday to u ilwannn✨
              </p>
              
              <p style={{ marginBottom: 10 }}>
                doaa terbaiks dari primces buatt kamuu, i wish kamu selalu di kelilingi hal” baik & orang” baik juga pastinya🙆🏻‍♀️✨
              </p>
              
              <p style={{ marginBottom: 10 }}>
                semoga semuaa wishlist kamuu tercapaii dengan cara yang baikk yaa! semangatt yapss, semoga allah mudahkan✨
              </p>
              
              <p style={{ marginBottom: 10 }}>
                alwayss be happyy yaa, kalo lagii sedii jangan ngerasa sendirii, ada ur family, ada temenn” kamu, dan pastinya ada primces hhe, kamuu bolee koo ceritaaa ke ak ya walaupun pasti gamau si, tapi yaudalaa
              </p>
              
              <p style={{ marginBottom: 12 }}>
                aduh bingung mw bilang apalagi, pkonyaa...
              </p>

              {/* Special Big Wish Banner */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(163,201,133,0.22))',
                border: '1.5px dashed rgba(59,130,246,0.4)',
                borderRadius: 14,
                padding: '10px 12px',
                textAlign: 'center',
                marginBottom: 14,
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#1e40af',
                }}>
                  SELAMAT 18 TAHUN ILWANKU✨🤍
                </span>
              </div>

              {/* Hindia Quote Box */}
              <div style={{
                background: 'linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%)',
                border: '1px solid rgba(122,154,96,0.35)',
                borderRadius: 14,
                padding: '12px 14px',
                position: 'relative',
              }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <Quote size={18} color="#2563eb" style={{ transform: 'rotate(180deg)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#4a6b34', textTransform: 'uppercase', letterSpacing: 0.8 }}>
                      kalo kata hindia:
                    </span>
                    <p style={{ fontStyle: 'italic', fontWeight: 600, color: '#1e40af', fontSize: '0.84rem', marginTop: 2, lineHeight: 1.5 }}>
                      ”segala doa yang baik adanya, untukmu & mimpimu yang mulia” 🤍✨
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sign Off */}
            <div className="reveal-el" style={{ marginBottom: 6 }}>
              <p style={{ fontSize: '0.72rem', color: '#4a6b34', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1.2, fontWeight: 700 }}>
                With Warmest Wishes — Primces 👑🤍
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#1e40af', margin: 0 }}>
                Happy 18th Birthday, Ilwan 🍵✨
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Actions */}
        <div style={{
          textAlign: 'center', display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 12, paddingBottom: 20
        }}>
          <p style={{
            fontSize: '0.78rem', color: 'var(--rose-gold)', fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <Download size={14} /> Simpan atau screenshot kartu ucapan ini sebagai kenangan 📸
          </p>

          <button className="btn-primary" onClick={onNext} style={{ width: '100%', padding: '15px 20px', fontSize: '0.92rem', marginBottom: 6 }}>
            Lihat Buket Bunga 💐 <ArrowRight size={16} />
          </button>

          <button className="btn-ghost" onClick={onRestart} style={{ 
            padding: '10px 20px', background: 'rgba(255,255,255,0.7)',
            borderRadius: 20, color: 'var(--berry)'
          }}>
            <RotateCcw size={14} /> Ulangi Dari Awal 🔄
          </button>
        </div>
      </div>
    </div>
  );
}
