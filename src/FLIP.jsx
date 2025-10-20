import React from "react";

// FlippableCard.jsx
// A single-file React component that flips on hover (and on keyboard focus).
// Usage:
// <FlippableCard title="Card Title" width="320px" height="200px">
//   <YourComponentOrContent />
// </FlippableCard>

export default function FlippableCard({
  title = "Title",
  children ,
  width = "320px",
  height = "200px",
  className = "",
}) {
  const wrapperStyle = {
    width,
    height,
  };


  return (
    <div
      className={`flippable-card ${className}`}
      style={wrapperStyle}
      tabIndex={0} // makes the card keyboard-focusable so it can flip with keyboard navigation
      aria-label={`Flippable card: ${title}`}
    >
      <div className="flippable-card-inner">
        <header className="flippable-card-face flippable-card-front">
          <h3 className="flippable-card-title">{title}</h3>
        </header>

        <div className="flippable-card-face flippable-card-back">
          <div className="flippable-card-content">{children}</div>
        </div>
      </div>

      {/* Component-scoped styles (works in plain React) */}
      <style>{`
        .flippable-card {
          perspective: 1000px;
          cursor: pointer;
          margin: 1rem;
          display: inline-block;
          outline: none; /* focus outline handled below for accessibility */
        }

        /* inner wrapper that actually rotates */
        .flippable-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          box-shadow: 0 6px 18px rgba(0,0,0,0.12);
          border-radius: 12px;
        }

        /* flip on hover or focus */
        .flippable-card:hover .flippable-card-inner,
        .flippable-card:focus .flippable-card-inner {
          transform: rotateY(180deg);
        }

        .flippable-card-face {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          box-sizing: border-box;
        }

        /* Front (title) styling */
        .flippable-card-front {
          background: linear-gradient(135deg, #ffffff 0%, #f4f7fb 100%);
          color: #111827;
          font-weight: 700;
          font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }

        .flippable-card-title {
          margin: 0;
          font-size: 1.125rem;
          text-align: center;
          padding: 0 0.25rem;
        }

        /* Back (component/content) - rotated 180deg so it's visible when container is flipped */
        .flippable-card-back {
          background: linear-gradient(180deg, #ffffff 0%, #eef2ff 100%);
          transform: rotateY(180deg);
          color: #0f172a;
        }

        .flippable-card-content {
          width: 100%; 
          height: 100%;
          overflow: auto;
        }

        /* keyboard focus styles (visible outline) */
        .flippable-card:focus {
          box-shadow: 0 0 0 4px rgba(99,102,241,0.15);
          border-radius: 12px;
        }

        /* small responsive tweak: if the card becomes narrow, reduce title size */
        @media (max-width: 360px) {
          .flippable-card-title { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
}
