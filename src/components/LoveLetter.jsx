import React, { useState, useRef, useEffect } from 'react';
import { Heart, ArrowRight, Sparkles, Quote } from 'lucide-react';
import gsap from 'gsap';

// ─── 💌 Tab 1: Surat Content (High-End Romantic Birthday Letter) ───
function LetterTab() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(containerRef.current,
      { opacity: 0, scale: 0.96, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'back.out(1.2)' }
    );
    tl.fromTo(itemsRef.current.filter(Boolean),
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.45, ease: 'power2.out' },
      "-=0.2"
    );
  }, []);

  return (
    <div ref={containerRef} style={{
      background: 'linear-gradient(170deg, #fffdfb 0%, #fff4f7 100%)',
      padding: '24px 20px', borderRadius: 24,
      border: '1.5px solid rgba(212,163,89,0.35)', lineHeight: 1.85,
      fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--berry)',
      maxHeight: '52vh', overflowY: 'auto',
      boxShadow: '0 12px 36px rgba(45,16,30,0.08), inset 0 0 25px rgba(255,255,255,0.9)',
      position: 'relative',
    }}>
      {/* Tilted Polaroid Photo with Decorative Tape */}
      <div ref={(el) => itemsRef.current.push(el)} style={{
        float: 'right', width: 98, height: 98, marginLeft: 14, marginBottom: 10,
        borderRadius: 18, overflow: 'hidden', border: '4px solid #ffffff',
        boxShadow: '0 10px 28px rgba(45,16,30,0.18)',
        transform: 'rotate(4deg)', position: 'relative',
      }}>
        {/* Subtle Washi Tape Ornament */}
        <div style={{
          position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)',
          width: 36, height: 12, background: 'rgba(212,163,89,0.4)',
          borderRadius: 2, backdropFilter: 'blur(4px)', zIndex: 10
        }} />
        <img src="/rian 3.jpeg" alt="Rian" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => { e.target.src = '/rian 3.jpeg'; }} />
      </div>

      {/* Opening Badge Header */}
      <div ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 10 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '4px 14px', borderRadius: 20,
          background: 'linear-gradient(135deg, rgba(200,59,100,0.12), rgba(212,163,89,0.18))',
          border: '1px solid rgba(200,59,100,0.25)', marginBottom: 8
        }}>
          <Sparkles size={13} color="var(--pink-deep)" />
          <span style={{ fontFamily: 'var(--font-cute)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--pink-deep)', letterSpacing: '0.5px' }}>
            HAPPY BIRTHDAY, MY LOVE!! 🎂✨
          </span>
        </div>

        {/* Romantic Cursive Salutation */}
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.65rem', color: 'var(--pink-deep)',
          lineHeight: 1.2, margin: '4px 0 10px 0'
        }}>
          Dearest Rian,
        </h3>
      </div>

      {/* Paragraph 1 */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14, fontWeight: 500, letterSpacing: '0.2px' }}>
        Happy 27th Birthday to someone who means so much to me! Di hari yang spesial ini, aku cuma mau bilang betapa bersyukurnya aku punya kamu dalam hidupku. Thank you for always being you, and for bringing so much warmth and light into my days.
      </p>

      {/* Paragraph 2 */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 16, fontWeight: 500 }}>
        Every little moment with you always feels so comforting. Di tengah ramainya hari dan rasa lelah, tawa kamu selalu jadi alasan terbaik untuk bikin mood aku balik lagi. Being around you just feels like home.
      </p>

      {/* 🌟 Romantic Quote Highlight Box */}
      <div ref={(el) => itemsRef.current.push(el)} style={{
        margin: '18px 0',
        padding: '16px 18px',
        borderRadius: 20,
        background: 'linear-gradient(135deg, rgba(255, 245, 248, 0.95) 0%, rgba(255, 250, 242, 0.95) 100%)',
        border: '1.5px solid rgba(244, 151, 181, 0.4)',
        boxShadow: '0 8px 24px rgba(200,59,100,0.08), inset 0 0 15px rgba(255,255,255,0.8)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <Quote size={22} color="var(--pink-deep)" style={{ transform: 'rotate(180deg)', flexShrink: 0, marginTop: 2, opacity: 0.85 }} />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.86rem',
            fontStyle: 'italic',
            color: 'var(--berry)',
            lineHeight: 1.75,
            fontWeight: 600,
          }}>
            "Happy 27th Birthday, my favorite person. Aku selalu berdoa supaya di usiamu yang baru ini, Rian bisa makin bahagia, selalu merasa dicintai, dan makin percaya sama potensi diri sendiri. No matter what comes next, I'll always be right here supporting you."
          </p>
        </div>
      </div>

      {/* Paragraph 3 */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14, fontWeight: 500 }}>
        I feel super lucky to see you grow into such a kind, smart, and wonderful person. Semoga di umur 27 ini, semua impian dan cita-cita yang lagi Rian perjuangkan bisa perlahan terwujud satu per satu.
      </p>

      {/* Paragraph 4 */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 14, fontWeight: 500 }}>
        Stay healthy, stay humble, and keep spreading that bright smile of yours. Once again, happy 27th birthday, Rian! Let's make more beautiful memories together. 💖
      </p>

      {/* Paragraph 5 */}
      <p ref={(el) => itemsRef.current.push(el)} style={{ marginBottom: 18, fontWeight: 500 }}>
        Thank you for making my world a so much happier place just by being in it.
      </p>

      {/* Handwritten Sign-Off Card */}
      <div ref={(el) => itemsRef.current.push(el)} style={{
        marginTop: 22, padding: '16px 18px',
        background: 'linear-gradient(135deg, #ffffff 0%, #fff5f8 100%)',
        borderRadius: 20, border: '1.5px solid rgba(212,163,89,0.3)',
        textAlign: 'center', boxShadow: '0 6px 20px rgba(45,16,30,0.06)',
        clear: 'both',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--pink-deep)',
          lineHeight: 1.35, margin: 0, fontWeight: 700
        }}>
          Happy 27th Birthday, Rian! Thank you for being my favorite part of every day. 🎂✨💖
        </p>
      </div>
    </div>
  );
}

// ─── ✨ Tab 2: Impian & Harapan Content ───
function ImpianTab() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(containerRef.current,
      { opacity: 0, scale: 0.95, y: 18 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' }
    );
    tl.fromTo(itemsRef.current.filter(Boolean),
      { opacity: 0, y: 25, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.14, duration: 0.55, ease: 'back.out(1.4)' },
      "-=0.25"
    );
  }, []);

  const dreams = [
    {
      icon: '🎂',
      badge: 'DREAM 01',
      title: 'Growing Together',
      text: 'Bisa terus merayakan setiap momen berharga dan ulang tahun bareng, supporting each other and growing into better versions of ourselves.',
      gradient: 'linear-gradient(135deg, rgba(212,163,89,0.18), rgba(248,164,190,0.25))',
    },
    {
      icon: '🌟',
      badge: 'DREAM 02',
      title: 'Always Support Your Dreams',
      text: 'Selalu ada di samping Rian untuk mendukung setiap impian, karir, dan passion yang kamu suka. I will always be your biggest supporter.',
      gradient: 'linear-gradient(135deg, rgba(200,59,100,0.15), rgba(255,232,238,0.3))',
    },
    {
      icon: '✈️',
      badge: 'DREAM 03',
      title: 'New Adventures & Memories',
      text: 'Creating endless sweet memories together, bisa jalan-jalan ke tempat impian kita, dan bikin momen-momen seru baru.',
      gradient: 'linear-gradient(135deg, rgba(212,163,89,0.15), rgba(255,245,248,0.4))',
    },
    {
      icon: '💍',
      badge: 'DREAM 04',
      title: 'Building A Beautiful Future',
      text: 'Bisa merawat hubungan ini dengan penuh rasa saling mengerti, percaya, dan kehangatan yang makin kuat setiap harinya.',
      gradient: 'linear-gradient(135deg, rgba(200,59,100,0.18), rgba(248,164,190,0.3))',
    },
  ];

  return (
    <div ref={containerRef} style={{
      background: 'linear-gradient(150deg, #ffffff 0%, var(--pink-whisper) 100%)',
      borderRadius: 22, border: '1px solid rgba(212,163,89,0.2)',
      padding: '22px 18px', display: 'flex', flexDirection: 'column', gap: 14,
      boxShadow: '0 10px 32px rgba(45,16,30,0.08), inset 0 0 20px rgba(255,255,255,0.7)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 4 }}>
        <Sparkles size={20} color="var(--gold-accent)" style={{ marginBottom: 4 }} />
        <h4 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--pink-deep)',
          lineHeight: 1.2
        }}>Impian & Masa Depan 💫</h4>
      </div>

      {dreams.map((item, i) => (
        <div
          key={i}
          ref={(el) => (itemsRef.current[i] = el)}
          style={{
            background: '#ffffff',
            borderRadius: 18,
            padding: '16px 16px',
            border: '1.5px solid rgba(212,163,89,0.18)',
            boxShadow: '0 4px 18px rgba(45,16,30,0.06)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.2s ease',
            cursor: 'pointer',
          }}
          onPointerDown={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; }}
          onPointerUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          onPointerLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{
              width: 44, height: 44, flexShrink: 0, borderRadius: 14,
              background: item.gradient,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid rgba(212,163,89,0.3)', fontSize: '1.3rem',
              boxShadow: '0 4px 12px rgba(45,16,30,0.08)'
            }}>
              {item.icon}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '0.62rem', fontWeight: 800, textTransform: 'uppercase',
                letterSpacing: 1.2, color: 'var(--pink-deep)', opacity: 0.85,
                marginBottom: 2
              }}>
                {item.badge}
              </div>
              <h4 style={{
                fontFamily: 'var(--font-display)', color: 'var(--berry)',
                fontSize: '1.2rem', marginBottom: 4, lineHeight: 1.25,
              }}>{item.title}</h4>
              <p style={{ fontSize: '0.79rem', color: 'var(--berry-light)', lineHeight: 1.55, fontWeight: 400 }}>
                {item.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── 🎁 Tab 3: Doa & Pesan Birthday Wishes ───
function WishesTab() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(containerRef.current,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' }
    );
    tl.fromTo(itemsRef.current.filter(Boolean),
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, stagger: 0.15, duration: 0.5, ease: 'power2.out' },
      "-=0.2"
    );
  }, []);

  return (
    <div ref={containerRef} style={{
      background: 'linear-gradient(145deg, #ffffff, var(--pink-whisper))',
      padding: '24px 20px', borderRadius: 20,
      border: '1px solid rgba(212,163,89,0.2)',
      boxShadow: '0 8px 32px rgba(45,16,30,0.08), inset 0 0 20px rgba(255,255,255,0.7)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <Sparkles size={20} color="var(--gold-accent)" style={{ marginBottom: 6 }} />
        <h4 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--pink-deep)',
          lineHeight: 1.2
        }}>Birthday Wishes & Prayers ✨</h4>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {[
          <span>Semoga di usiamu yang ke-27 ini, Rian selalu sehat, selalu merasa tenang, dan makin dilancarkan setiap urusannya. 🤲🏻💖</span>,
          <span>May your beautiful, genuine smile always bring happiness to everyone around you and brighten up your days! ✨</span>,
          <span>Semoga semua wishlist, impian, dan hal-hal yang lagi Rian usahakan sekarang bisa terwujud satu per satu dengan indah. 🌸</span>,
          <span>May our bond grow even warmer, sweeter, and more mature with each passing day. 🥂</span>,
          <span>Terima kasih sudah jadi sosok yang selalu bikin hari-hariku terasa lebih indah. Happy 27th Birthday, my favorite person! 🎂🎁💝</span>
        ].map((item, i) => (
          <div key={i} ref={(el) => itemsRef.current.push(el)} style={{
            display: 'flex', gap: 12, alignItems: 'flex-start',
            padding: '10px 14px', background: '#fff', borderRadius: 12,
            boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
            border: '1px solid rgba(212,163,89,0.12)'
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg, var(--gold-accent), var(--pink-deep))',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-display)',
              marginTop: 2
            }}>{i + 1}</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--berry)', lineHeight: 1.5, flex: 1 }}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 📜 Main LoveLetter Component ───
export default function LoveLetter({ onNext }) {
  const [opened, setOpened] = useState(false);
  const [tab, setTab] = useState('letter');
  const envelopeRef = useRef(null);
  const letterRef = useRef(null);
  const sealRef = useRef(null);

  useEffect(() => {
    if (!opened) {
      gsap.fromTo(envelopeRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.4)' }
      );
    } else {
      if (letterRef.current) {
        gsap.fromTo(letterRef.current,
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.3)' }
        );
      }
    }
  }, [opened]);

  const open = () => {
    if (opened) return;
    const tl = gsap.timeline();
    tl.to(sealRef.current, { scale: 1.3, opacity: 0, duration: 0.3, ease: 'power2.in' });
    tl.to(envelopeRef.current, { y: 60, opacity: 0, scale: 0.9, duration: 0.4, ease: 'power2.in',
      onComplete: () => setOpened(true)
    });
  };

  const tabs = [
    { id: 'letter', label: '💌 Surat' },
    { id: 'reasons', label: '✨ Impian' },
    { id: 'wishes', label: '🎁 Doa' },
  ];

  return (
    <div className="stage">
      {/* Envelope */}
      {!opened && (
        <div ref={envelopeRef} onClick={open} className="glass" style={{
          width: '100%', maxWidth: '350px', padding: '42px 24px', textAlign: 'center',
          cursor: 'pointer', opacity: 0, position: 'relative',
          background: 'linear-gradient(160deg, #fffaf6 0%, #ffeef3 100%)',
          border: '1.5px solid var(--glass-border)',
          boxShadow: '0 16px 48px rgba(45,16,30,0.18)',
        }}>
          {/* Stamp */}
          <div style={{
            position: 'absolute', top: 14, right: 14, width: 38, height: 44,
            border: '2px dashed var(--gold-accent)', borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.2rem', opacity: 0.85,
          }}>👑</div>

          {/* Wax Seal */}
          <div ref={sealRef} className="anim-breathe" style={{
            width: 70, height: 70, borderRadius: '50%', margin: '0 auto 22px',
            background: 'radial-gradient(circle at 40% 35%, #d4a359 0%, #9e304f 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 24px rgba(200,59,100,0.45), inset 0 -2px 6px rgba(0,0,0,0.2)',
            border: '3px solid rgba(247,231,196,0.7)',
          }}>
            <Heart size={32} fill="#fff" color="#fff" style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.2))' }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--berry)', marginBottom: 6,
          }}>Surat Ulang Tahun</h2>
          <p style={{
            fontFamily: 'var(--font-cute)', fontSize: '0.84rem', color: 'var(--pink-deep)', fontWeight: 600,
          }}>Untuk Rian 💖</p>

          <div style={{
            marginTop: 24, fontSize: '0.75rem', fontWeight: 700,
            background: 'rgba(212,163,89,0.12)', color: 'var(--pink-deep)',
            padding: '8px 18px', borderRadius: 20, display: 'inline-block',
            border: '1.5px solid rgba(212,163,89,0.3)',
          }}>
            👆 Ketuk untuk membuka surat
          </div>
        </div>
      )}

      {/* Opened Letter */}
      {opened && (
        <div ref={letterRef} className="glass" style={{
          width: '100%', maxWidth: '380px', padding: '26px 20px', opacity: 0,
          background: 'linear-gradient(180deg, #ffffff 0%, #fff5f8 100%)',
          border: '1.5px solid var(--glass-border)',
          boxShadow: '0 16px 48px rgba(45,16,30,0.15)',
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 18 }}>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--pink-deep)',
              lineHeight: 1.15, marginBottom: 4,
            }}>Happy Birthday, Rian! 🎂✨</h1>
            <p style={{
              fontFamily: 'var(--font-cute)', fontSize: '0.78rem', color: 'var(--rose-gold)', fontWeight: 600,
            }}>Surat cinta dan doa terbaik untuk sayangku 🌸</p>
          </div>

          {/* Navigation */}
          <div style={{
            display: 'flex', background: 'rgba(252,232,239,0.6)', padding: 3,
            borderRadius: 14, marginBottom: 16, gap: 2,
          }}>
            {tabs.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                flex: 1, padding: '9px 4px', borderRadius: 11, border: 'none',
                background: tab === t.id ? 'linear-gradient(135deg, var(--gold-accent), var(--pink-deep))' : 'transparent',
                color: tab === t.id ? '#fff' : 'var(--berry-light)',
                fontFamily: 'var(--font-cute)', fontSize: '0.74rem', fontWeight: 700,
                cursor: 'pointer', transition: 'all 0.2s ease',
              }}>{t.label}</button>
            ))}
          </div>

          {tab === 'letter' && <LetterTab />}
          {tab === 'reasons' && <ImpianTab />}
          {tab === 'wishes' && <WishesTab />}

          {/* CTA Button */}
          <button className="btn-primary" onClick={onNext} style={{ width: '100%', marginTop: 20 }}>
            Lanjut ke Tiup Lilin! 🎂 <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
