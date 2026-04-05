/**
 * GoldButton — Reusable premium button/link component
 * Matches the Letare Invitation brand style:
 *   - Gold gradient background (#6b4e23 → #9a6f2e → #6b4e23)
 *   - Shimmer sweep on hover
 *   - Scale up on hover, scale down on active
 *   - Gold drop shadow
 *
 * Props:
 *   as        - 'button' | 'a'  (default: 'button')
 *   href      - URL, required when as='a'
 *   target    - link target
 *   rel       - link rel
 *   type      - button type (default: 'button')
 *   onClick   - click handler
 *   disabled  - disables the button
 *   className - extra classes (for spacing/width overrides)
 *   children  - button content
 *   variant   - 'gold' (default) | 'white' (for in-card utility actions like copy)
 */
export default function GoldButton({
  as = 'button',
  href,
  target,
  rel,
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  children,
  variant = 'gold',
}) {
  const base =
    'relative overflow-hidden group inline-flex items-center justify-center gap-2 ' +
    'font-serif font-semibold tracking-wide text-[13px] rounded-xl px-6 py-2.5 ' +
    'transition-all duration-300 hover:scale-105 active:scale-95 ' +
    'disabled:opacity-50 disabled:pointer-events-none';

  const goldStyle = {
    background: 'linear-gradient(135deg, #6b4e23 0%, #9a6f2e 50%, #6b4e23 100%)',
    boxShadow: '0 4px 16px rgba(107, 78, 35, 0.35)',
    color: 'white',
  };

  const whiteStyle = {
    background: 'linear-gradient(135deg, #ffffff 0%, #f5f0e8 50%, #ffffff 100%)',
    boxShadow: '0 3px 10px rgba(0,0,0,0.12)',
    color: '#3d2b10',
    border: '1px solid rgba(184,134,11,0.25)',
  };

  const shimmerColor = variant === 'gold' ? 'bg-white/15' : 'bg-[#B8860B]/10';
  const style = variant === 'gold' ? goldStyle : whiteStyle;

  const shimmer = (
    <span
      className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ${shimmerColor} skew-x-12 pointer-events-none`}
    />
  );

  if (as === 'a') {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${base} ${className}`}
        style={style}
      >
        {shimmer}
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${className}`}
      style={style}
    >
      {shimmer}
      {children}
    </button>
  );
}
