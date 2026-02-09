import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => { document.title = 'Rayleigh Studios - Game Development Studio'; };
  }, [title]);
}

const MEDIA_ASSETS = [
  { label: 'Game logo', links: [{ href: '/assets/game-logo.png', text: 'Game Logo (PNG)' }, { href: '/assets/game-logo.svg', text: 'Game Logo (SVG)' }] },
  { label: 'Key art / hero image (landscape + portrait)', links: [{ href: '/assets/key-art-landscape.png', text: 'Hero Image (Landscape)' }, { href: '/assets/key-art-portrait.png', text: 'Hero Image (Portrait)' }] },
  { label: 'Character art', links: [{ href: '/assets/character-art-1.png', text: 'Character Art 1' }, { href: '/assets/character-art-2.png', text: 'Character Art 2' }] },
  { label: 'Environment art', links: [{ href: '/assets/environment-1.png', text: 'Environment Art 1' }, { href: '/assets/environment-2.png', text: 'Environment Art 2' }] },
  { label: 'Animated GIFs', links: [{ href: '/assets/gameplay.gif', text: 'Gameplay GIF' }] },
  { label: 'High-resolution screenshots', links: [{ href: '/assets/screenshot-1.png', text: 'Screenshot 1' }, { href: '/assets/screenshot-2.png', text: 'Screenshot 2' }, { href: '/assets/screenshot-3.png', text: 'Screenshot 3' }] },
  { label: 'Gameplay trailer', links: [{ href: '/assets/gameplay-trailer.mp4', text: 'Gameplay Trailer (MP4)' }] },
  { label: 'Developer photo', links: [{ href: '/assets/developer-photo.jpg', text: 'Developer Photo' }] },
  { label: 'Studio logo', links: [{ href: '/assets/studio-logo.png', text: 'Studio Logo (PNG)' }, { href: '/assets/studio-logo.svg', text: 'Studio Logo (SVG)' }] },
];

function AssetItem({ label, links }) {
  const [expanded, setExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (expanded && dropdownRef.current) {
      setMaxHeight(dropdownRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [expanded, links]);

  return (
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
        <div className="press-asset-dropdown-content">
          {links.map(({ href, text }) => (
            <a key={text} className="press-asset-link" href={href} download>
              <i className="bi bi-download" /> {text}
            </a>
          ))}
        </div>
      </div>
    </div>
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
          Rayleigh Studios Announces Don't Crack! — A Vibrant, Rage-Inducing Platformer About Flying Home in a Fragile Eggshell
        </h1>
        <p className="press-subheadline">
          Fast-Paced Cartoon-Styled Platformer Where Players Take Flight as an Unhatched Chick Navigating the World from Inside Its Fragile Eggshell
        </p>
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
            "Games have always been a source of joy and connection for me. With Don't Crack!, I wanted to build something that feels playful on the surface but demands real mastery underneath — a game that makes you laugh, yell, and immediately hit 'retry.'"
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
            Click each category to expand and download available assets.
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
