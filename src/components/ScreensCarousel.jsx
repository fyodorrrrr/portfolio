"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function ScreensCarousel({ title, slides }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const updateIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const panels = Array.from(track.children);
    const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
    let closest = 0;
    let closestDistance = Infinity;
    panels.forEach((panel, i) => {
      const rect = panel.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - trackCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = i;
      }
    });
    setIndex(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateIndex);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, [updateIndex]);

  const goTo = (target) => {
    const track = trackRef.current;
    const panel = track?.children[target];
    if (!panel) return;
    track.scrollTo({ left: panel.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const multiple = slides.length > 1;

  return (
    <div className="screens-carousel" role="region" aria-roledescription="carousel" aria-label={`${title} screenshots`}>
      <div className="screens-track" ref={trackRef}>
        {slides.map((slide, i) => (
          <div
            className="plate screens-panel"
            style={{ aspectRatio: slide.width && slide.height ? slide.width / slide.height : 2 }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            key={slide.src ?? "placeholder"}
          >
            {slide.src ? (
              <Image
                src={slide.src}
                alt={slide.alt ?? `${title} screenshot ${i + 1} of ${slides.length}`}
                width={slide.width}
                height={slide.height}
                sizes="(max-width: 900px) 100vw, 72rem"
                priority={i === 0}
                className="rounded-lg"
              />
            ) : (
              <div className="plate-placeholder mono">{title}</div>
            )}
          </div>
        ))}
      </div>

      {multiple && (
        <div className="screens-nav">
          <button onClick={() => goTo(index - 1)} disabled={index === 0} aria-label="Previous screen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button onClick={() => goTo(index + 1)} disabled={index === slides.length - 1} aria-label="Next screen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
          <span className="screens-count mono" aria-live="polite">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
}
