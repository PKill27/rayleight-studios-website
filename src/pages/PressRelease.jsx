import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => { document.title = 'Rayleigh Studios - Game Development Studio'; };
  }, [title]);
}

const MEDIA_ASSETS = [
  { label: 'Game logo', links: [{ href: '/images/DontCrack/Logo.png', text: 'Game Logo (PNG)' }] },
  { label: 'Key art / hero image (landscape + portrait)', links: [{ href: '/images/DontCrack/Horizontile capsul.png', text: 'Hero Image (Landscape)' }, { href: '/images/DontCrack/Vertical capsule.png', text: 'Hero Image (Portrait)' }, { href: '/images/DontCrack/Capsule.png', text: 'Capsule Image' }] },
  { label: 'Short gameplay clips', links: [
    { href: '/images/DontCrack/ShortClips/Short Video.mp4', text: 'Short Video' },
    { href: '/images/DontCrack/ShortClips/Short Video 2.mp4', text: 'Short Video 2' },
    { href: '/images/DontCrack/ShortClips/Short Video 3.mp4', text: 'Short Video 3' },
    { href: '/images/DontCrack/ShortClips/Short Video 4.mp4', text: 'Short Video 4' },
    { href: '/images/DontCrack/ShortClips/Short Video 5.mp4', text: 'Short Video 5' },
    { href: '/images/DontCrack/ShortClips/Short Video 6.mp4', text: 'Short Video 6' }
  ] },
  { label: 'High-resolution screenshots', links: [{ href: '/images/DontCrack/Screenshots/1.png', text: 'Screenshot 1' }, { href: '/images/DontCrack/Screenshots/2.png', text: 'Screenshot 2' }, { href: '/images/DontCrack/Screenshots/3.png', text: 'Screenshot 3' }, { href: '/images/DontCrack/Screenshots/4.png', text: 'Screenshot 4' }, { href: '/images/DontCrack/Screenshots/5.png', text: 'Screenshot 5' }] },
  { label: 'Gameplay trailer', links: [{ href: '/images/DontCrack/Don\'t Crack Trailer.mp4', text: 'Gameplay Trailer (MP4)' }] },
  { label: 'Studio logo', links: [{ href: '/images/RayleighStudiosImage.png', text: 'Studio Logo' }, { href: '/images/RayleighStudiosLogoRound.png', text: 'Studio Logo (Round)' }] },
  { label: 'Character art', links: [{ href: '/images/DontCrack/Bird.png', text: 'Bird Character' }] },
];

function AssetPreviewModal({ src, type, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isVideo = type === 'video';
  const isImage = type === 'image' || type === 'gif';

  return (
    <div 
      className="asset-preview-modal" 
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        cursor: 'pointer'
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(255, 255, 255, 0.2)',
          border: 'none',
          color: 'white',
          fontSize: '2rem',
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000
        }}
      >
        ×
      </button>
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          position: 'relative'
        }}
      >
        {isImage && (
          <img 
            src={src} 
            alt="Preview" 
            style={{
              maxWidth: '100%',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
        )}
        {isVideo && (
          <video 
            src={src} 
            controls 
            autoPlay
            style={{
              maxWidth: '100%',
              maxHeight: '90vh',
              borderRadius: '8px'
            }}
          />
        )}
      </div>
    </div>
  );
}

function AssetItem({ label, links }) {
  const [expanded, setExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [previewType, setPreviewType] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (expanded && dropdownRef.current) {
      setMaxHeight(dropdownRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [expanded, links]);

  const getFileType = (href) => {
    const ext = href.split('.').pop().toLowerCase();
    if (['mp4', 'webm', 'mov'].includes(ext)) return 'video';
    if (ext === 'gif') return 'gif';
    if (['png', 'jpg', 'jpeg', 'svg', 'webp'].includes(ext)) return 'image';
    return null;
  };

  const handlePreview = (href, e) => {
    e.preventDefault();
    e.stopPropagation();
    const type = getFileType(href);
    if (type) {
      setPreviewType(type);
      setPreviewSrc(href);
    }
  };

  return (
    <>
      <div className="press-asset-item">
        <button
          type="button"
          className={`press-asset-trigger ${expanded ? 'expanded' : ''}`}
          aria-expanded={expanded}
          onClick={() => setExpanded((e) => !e)}
        >
          {label}
          <i className="bi bi-chevron-down" />
        </button>
        <div
          ref={dropdownRef}
          className="press-asset-dropdown"
          style={{ maxHeight: expanded ? maxHeight : 0 }}
        >
          <div className="press-asset-dropdown-content" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
            padding: '1rem'
          }}>
            {links.map(({ href, text }) => {
              const fileType = getFileType(href);
              const isImage = fileType === 'image' || fileType === 'gif';
              const isVideo = fileType === 'video';
              
              if (isImage || isVideo) {
                return (
                  <div 
                    key={text} 
                    style={{
                      position: 'relative',
                      cursor: 'pointer',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      backgroundColor: 'var(--dark-secondary)',
                      transition: 'transform 0.2s, box-shadow 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const link = document.createElement('a');
                      link.href = href;
                      link.download = text;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    onDoubleClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handlePreview(href, e);
                    }}
                    title={`Click to download: ${text} (Double-click to preview)`}
                  >
                    {isImage && (
                      <img 
                        src={href} 
                        alt={text}
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block'
                        }}
                        loading="lazy"
                      />
                    )}
                    {isVideo && (
                      <video 
                        src={href}
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block'
                        }}
                        muted
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => {
                          e.target.pause();
                          e.target.currentTime = 0;
                        }}
                      />
                    )}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                      padding: '0.5rem',
                      color: 'white',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      {text}
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '0.5rem',
                      right: '0.5rem',
                      background: 'rgba(0, 0, 0, 0.7)',
                      borderRadius: '50%',
                      width: '2rem',
                      height: '2rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <i className="bi bi-download" />
                    </div>
                  </div>
                );
              }
              
              // Fallback for non-previewable files
              return (
                <a 
                  key={text} 
                  className="press-asset-link" 
                  href={href} 
                  download
                  style={{ 
                    display: 'block',
                    padding: '0.75rem',
                    textAlign: 'center',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: 'var(--text-light)'
                  }}
                >
                  <i className="bi bi-download" /> {text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <AssetPreviewModal
        src={previewSrc}
        type={previewType}
        isOpen={!!previewSrc}
        onClose={() => setPreviewSrc(null)}
      />
    </>
  );
}

export default function PressRelease() {
  useDocumentTitle("Don't Crack! Press Release | Rayleigh Studios");
  return (
    <div className="container press-release">
      <div className="press-header">
        <div className="press-logo">Don't Crack! Press Release</div>
        <div className="press-date-location">
          <strong>FOR IMMEDIATE RELEASE</strong>
          <br />
          Newport Beach, CA – March 6, 2026
        </div>
        <h1 className="press-headline">
          Rayleigh Studios Announces Don't Crack! A Vibrant, Rage-Inducing Platformer About Flying Home in a Fragile Eggshell
        </h1>
        <p className="press-subheadline">
          Fast-Paced Cartoon-Styled Platformer Where Players Take Flight as an Unhatched Chick Navigating the World from Inside Its Fragile Eggshell
        </p>
      </div>

      <div className="press-gameplay-gif" style={{ 
        margin: '3rem 0', 
        textAlign: 'center',
        maxWidth: '100%'
      }}>
        <video 
          src="/images/DontCrack/ShortClips/Short Video.mp4" 
          autoPlay
          loop
          muted
          playsInline
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="press-boilerplate" style={{ marginTop: 0, marginBottom: '2rem' }}>
        <h3>Fact Sheet</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
          <strong>Release Date:</strong> March 6, 2026<br />
          <strong>Platforms:</strong> PC (Steam, Windows/Mac), Additional platforms TBD<br />
          <strong>Player Modes:</strong> Single-player, Co-op (online)<br />
          <strong>Age Rating:</strong> Not yet rated<br />
          <strong>Languages:</strong> English (additional languages TBD)
        </p>
      </div>

      <div className="press-body">
        <p>
          <strong>Newport Beach, CA – March 6, 2026</strong> – Rayleigh Studios, an independent game development studio founded by solo developer Porter Killian, is excited to announce Don't Crack!, a fast-paced cartoon-styled platformer where players take flight as an unhatched chick navigating the world from inside its fragile eggshell. Blending precision controls, chaotic environments, and a playful art style, Don't Crack! delivers a unique mix of challenge, charm, and pure panic.
        </p>

        <p>
          In Don't Crack!, players flap their wings to fly through a series of vibrant stylistic environments while racing the clock, mastering tight flight mechanics, and fighting to stay un-cracked. Designed to be both joyful and rage-inducing, the game offers a satisfying skill curve that rewards precision, quick thinking, and perseverance.
        </p>

        <div className="press-quote">
          <p className="press-quote-text">
            "Games have always been a source of joy and connection for me. With Don't Crack!, I wanted to build something that feels playful on the surface but demands real mastery underneath, a game that makes you laugh, yell, and immediately hit 'retry.'"
          </p>
          <div className="press-quote-author">Porter Killian, Developer & Founder</div>
          <div className="press-quote-title">Rayleigh Studios</div>
        </div>

        <p>
          Players can take on the challenge solo or team up in co-op mode for double the chaos. Global leaderboards encourage competition, while the game's expressive cartoon aesthetic keeps the experience lighthearted even when the difficulty spikes.
        </p>

        <p>
          Don't Crack! represents the debut title from Rayleigh Studios, showcasing Killian's ability to create both the art and code behind his games. With a background in Computer Science and Art from the University of Pennsylvania, Killian blends creativity with technical precision to craft playful, challenging experiences.
        </p>

        <h2 className="press-section-title">Key Features</h2>
        <ul style={{ color: 'var(--text-light)', lineHeight: 2, marginBottom: '2rem' }}>
          <li><strong>Fly as a Fragile Egg:</strong> Take control of an unhatched chick navigating the world from inside its delicate shell</li>
          <li><strong>Precision Platforming:</strong> Master tight, responsive flight mechanics that reward skill and timing</li>
          <li><strong>Cartoon-Styled Chaos:</strong> Explore vibrant environments full of personality and playful danger</li>
          <li><strong>Rage-Inducing Challenges:</strong> Push your limits through fast-paced, unforgiving levels</li>
          <li><strong>Solo or Co-Op Play:</strong> Tackle the journey alone or with a friend for twice the chaos</li>
          <li><strong>Race the Clock:</strong> Perfect your routes and beat level timers</li>
          <li><strong>Climb the Leaderboards:</strong> Compete globally for the fastest times and ultimate bragging rights</li>
        </ul>

        <div className="press-boilerplate">
          <h3>About Rayleigh Studios</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
            Rayleigh Studios is an independent game development studio founded by solo developer Porter Killian. Based in Newport Beach, California, the studio focuses on creating vibrant, cartoon-styled games that blend creativity with technical precision. Don't Crack! is the studio's debut title, marking the beginning of its journey into indie game development. Porter Killian creates both the art and code behind his games, with a background in Computer Science and Art from the University of Pennsylvania. For more information, visit <Link to="/" style={{ color: 'var(--accent-blue)' }}>www.rayleighstudios.com</Link>.
          </p>
        </div>

        <div className="press-media-assets">
          <h3>Media Assets Available</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Click each category to expand and view available assets. Click on any image or video to download, or double-click to preview in full screen.
          </p>
          <div className="press-asset-list">
            {MEDIA_ASSETS.map((asset) => (
              <AssetItem key={asset.label} label={asset.label} links={asset.links} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
