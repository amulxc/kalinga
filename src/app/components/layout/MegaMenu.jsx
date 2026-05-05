'use client';

import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

const MEGA_MENU_Z = 600000;

const MegaMenu = ({
  sections,
  imageUrl,
  imageAlt = 'Menu Image',
  imageHref = '/about-us',
  openAbove = false,
  useFixedAnchor = false,
  anchorRef = null,
  onMenuPointerEnter = null,
}) => {
  const menuRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ left: '50%', transform: 'translateX(-50%)' });
  const [fixedPos, setFixedPos] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalCols = sections.length + 1;
  const gridColsClass =
    totalCols === 2 ? 'grid-cols-2' :
    totalCols === 3 ? 'grid-cols-3' :
    totalCols === 4 ? 'grid-cols-4' :
      'grid-cols-5';

  const runFixedPosition = () => {
    const el = menuRef.current;
    const ar = anchorRef?.current;
    if (!el || !ar || !useFixedAnchor) return;
    const trigger = ar.getBoundingClientRect();
    const menuRect = el.getBoundingClientRect();
    const gap = 10;
    let top = openAbove ? trigger.top - menuRect.height - gap : trigger.bottom + gap;
    let left = trigger.left + trigger.width / 2 - menuRect.width / 2;
    const pad = 16;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    left = Math.max(pad, Math.min(left, vw - menuRect.width - pad));
    top = Math.max(pad, Math.min(top, vh - menuRect.height - pad));
    setFixedPos({ top, left });
  };

  useLayoutEffect(() => {
    if (!useFixedAnchor || !mounted || !anchorRef?.current || !menuRef.current) return;

    runFixedPosition();
    const raf = requestAnimationFrame(() => runFixedPosition());

    const onWin = () => runFixedPosition();
    window.addEventListener('resize', onWin);
    window.addEventListener('scroll', onWin, true);

    const ro =
      typeof ResizeObserver !== 'undefined' && menuRef.current
        ? new ResizeObserver(() => runFixedPosition())
        : null;
    ro?.observe(menuRef.current);

    const img = menuRef.current.querySelector('img');
    if (img && !img.complete) {
      img.addEventListener('load', onWin);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onWin);
      window.removeEventListener('scroll', onWin, true);
      ro?.disconnect();
      img?.removeEventListener('load', onWin);
    };
  }, [useFixedAnchor, mounted, anchorRef, openAbove, sections, imageUrl]);

  useEffect(() => {
    if (useFixedAnchor || !menuRef.current) return;

    const adjustPosition = () => {
      const menu = menuRef.current;
      if (!menu) return;
      const rect = menu.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const padding = 32;

      let adjustmentStyle = { left: '50%', transform: 'translateX(-50%)', right: 'auto' };

      const overflowLeft = padding - rect.left;
      const overflowRight = rect.right - (viewportWidth - padding);

      if (overflowLeft > 0) {
        adjustmentStyle = {
          left: '50%',
          transform: `translateX(calc(-50% + ${overflowLeft}px))`,
          right: 'auto',
        };
      } else if (overflowRight > 0) {
        adjustmentStyle = {
          left: '50%',
          transform: `translateX(calc(-50% - ${overflowRight}px))`,
          right: 'auto',
        };
      }

      setPosition(adjustmentStyle);
    };

    const timer = setTimeout(adjustPosition, 10);
    window.addEventListener('resize', adjustPosition);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', adjustPosition);
    };
  }, [openAbove, useFixedAnchor]);

  const inner = (
    <div className="bg-white rounded-xl shadow-2xl border-2 border-[var(--button-red)] p-6 w-fit">
      <div className={`grid ${gridColsClass} gap-6`} style={{ gridTemplateColumns: `repeat(${totalCols}, 280px)` }}>
        <Link href={imageHref} className="relative rounded-lg overflow-hidden group block min-h-[220px]">
          <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
        </Link>

        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="mb-3 pb-2 border-b border-gray-300">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <Link
                    href={link.href}
                    className="block text-sm text-black hover:text-red-600 hover:pl-2 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  if (useFixedAnchor) {
    if (!mounted) return null;
    return createPortal(
      <div
        ref={menuRef}
        onMouseEnter={() => onMenuPointerEnter?.()}
        className="fixed pointer-events-auto max-h-[calc(100vh-24px)] overflow-y-auto"
        style={{
          ...(fixedPos
            ? { top: fixedPos.top, left: fixedPos.left }
            : { top: -99999, left: 0, visibility: 'hidden' }),
          zIndex: MEGA_MENU_Z,
        }}
      >
        {inner}
      </div>,
      document.body
    );
  }

  return (
    <div
      ref={menuRef}
      className={`absolute pointer-events-auto ${openAbove ? 'bottom-full pb-[25px]' : 'top-full pt-[25px]'}`}
      style={{ ...position, zIndex: MEGA_MENU_Z }}
    >
      {inner}
    </div>
  );
};

export default MegaMenu;
