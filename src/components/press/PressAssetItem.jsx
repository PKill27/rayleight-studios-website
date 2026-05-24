import { useState, useRef, useEffect } from 'react';

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
        cursor: 'pointer',
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
          zIndex: 10000,
        }}
      >
        ×
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          position: 'relative',
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
              borderRadius: '8px',
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
              borderRadius: '8px',
            }}
          />
        )}
      </div>
    </div>
  );
}

export default function PressAssetItem({ label, links }) {
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
          <div
            className="press-asset-dropdown-content"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1rem',
              padding: '1rem',
            }}
          >
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
                      transition: 'transform 0.2s, box-shadow 0.2s',
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
                          display: 'block',
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
                          display: 'block',
                        }}
                        muted
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => {
                          e.target.pause();
                          e.target.currentTime = 0;
                        }}
                      />
                    )}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        padding: '0.5rem',
                        color: 'white',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                      }}
                    >
                      {text}
                    </div>
                    <div
                      style={{
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
                        color: 'white',
                      }}
                    >
                      <i className="bi bi-download" />
                    </div>
                  </div>
                );
              }

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
                    color: 'var(--text-light)',
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
