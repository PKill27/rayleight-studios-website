import PressAssetItem from '../components/press/PressAssetItem';
import useDocumentTitle from '../hooks/useDocumentTitle';

const MEDIA_ASSETS = [];

export default function BowlBigPressRelease() {
  useDocumentTitle('Bowl Big Press Kit | Rayleigh Studios');

  return (
    <div className="container press-release">
      <div className="press-header">
        <div className="press-logo">Bowl Big Press Kit</div>
        <div className="press-date-location">
          <strong>FOR IMMEDIATE RELEASE</strong>
        </div>
        <h1 className="press-headline">Bowl Big</h1>
        <p className="press-subheadline">
          An Incremental Bowling Game Where Your Goal Is Simple: Make Your Score as Big as Possible
        </p>
      </div>

      <div className="press-boilerplate" style={{ marginTop: 0, marginBottom: '2rem' }}>
        <h3>Fact Sheet</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
          <strong>Release Date:</strong> Late 2026<br />
          <strong>Platforms:</strong> PC<br />
          <strong>Player Modes:</strong> Single-player<br />
          <strong>Age Rating:</strong> PG-13<br />
          <strong>Languages:</strong> English
        </p>
      </div>

      <div className="press-body">
        <p>
          Bowl Big is an incremental bowling game. Your goal is simple: make your score as big as possible.
        </p>

        <p>
          Start small with a single pin and work your way up through upgrade systems and tougher bowling challenges. Every throw helps you grow stronger, unlock new mechanics, and push your points higher than ever before.
        </p>

        <h2 className="press-section-title">Upgrade Systems</h2>

        <h3 style={{ color: 'var(--text-light)', marginBottom: '0.75rem' }}>Tech Tree</h3>
        <p>
          A classic incremental progression system where you improve your bowling setup. Upgrades include:
        </p>
        <ul style={{ color: 'var(--text-light)', lineHeight: 2, marginBottom: '1.5rem' }}>
          <li>More pins</li>
          <li>Higher multipliers</li>
          <li>Increased bowling difficulty for bigger rewards</li>
          <li>New gameplay mechanics</li>
        </ul>
        <p style={{ marginBottom: '2rem' }}>
          The more upgrades you buy, the faster your score climbs.
        </p>

        <h3 style={{ color: 'var(--text-light)', marginBottom: '0.75rem' }}>Pin Upgrade Menu</h3>
        <p>
          Upgrade your individual pins using the points you earn. Pins can be improved by:
        </p>
        <ul style={{ color: 'var(--text-light)', lineHeight: 2, marginBottom: '2rem' }}>
          <li>Increasing the points by ranking up</li>
          <li>Adding special modifiers that increase score multipliers</li>
        </ul>

        <h2 className="press-section-title">Two Ways to Bowl</h2>

        <h3 style={{ color: 'var(--text-light)', marginBottom: '0.75rem' }}>Click and Drag</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          Aim and throw by dragging your mouse. Add spin by moving your mouse left and right while sliding it forwards.
        </p>

        <h3 style={{ color: 'var(--text-light)', marginBottom: '0.75rem' }}>Timing Mode</h3>
        <p>
          A precision-based bowling mode where you have to time your bowl with moving sliders. Time your clicks to lock in:
        </p>
        <ul style={{ color: 'var(--text-light)', lineHeight: 2, marginBottom: '2rem' }}>
          <li>Power</li>
          <li>Spin</li>
        </ul>

        <h2 className="press-section-title">Difficulty Modes</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Unlock harder bowling challenges through the Tech Tree for much bigger rewards. Higher difficulty means more obstacles—but also far more points.
        </p>
        <ul style={{ color: 'var(--text-light)', lineHeight: 2, marginBottom: '2rem' }}>
          <li><strong>Easy Mode:</strong> No obstacles.</li>
          <li><strong>Normal Mode:</strong> One stationary wall stands in your way.</li>
          <li><strong>Hard Mode:</strong> Two stationary walls make things much more difficult.</li>
          <li><strong>Nightmare Mode:</strong> Two stationary walls and one moving wall.</li>
        </ul>

        <div className="press-media-assets">
          <h3>Media Assets Available</h3>
          {MEDIA_ASSETS.length > 0 ? (
            <>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Click each category to expand and view available assets. Click on any image or video to
                download, or double-click to preview in full screen.
              </p>
              <div className="press-asset-list">
                {MEDIA_ASSETS.map((asset) => (
                  <PressAssetItem key={asset.label} label={asset.label} links={asset.links} />
                ))}
              </div>
            </>
          ) : (
            <p style={{ color: 'var(--text-muted)', marginBottom: 0 }}>&nbsp;</p>
          )}
        </div>
      </div>
    </div>
  );
}
