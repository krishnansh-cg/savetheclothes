/* @ds-bundle: {"format":3,"namespace":"WeatherWiseDesignSystem_0f0aac","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ProgressDots","sourcePath":"components/core/ProgressDots.jsx"},{"name":"RoleBadge","sourcePath":"components/core/RoleBadge.jsx"},{"name":"RoleChain","sourcePath":"components/core/RoleBadge.jsx"},{"name":"SpeechBubble","sourcePath":"components/core/SpeechBubble.jsx"},{"name":"KrishMascot","sourcePath":"components/mascot/KrishMascot.jsx"}],"sourceHashes":{"components/core/Button.jsx":"20d32869b823","components/core/Card.jsx":"9fc36bf21e06","components/core/ProgressDots.jsx":"ab922903b3ab","components/core/RoleBadge.jsx":"9f9f64584ba5","components/core/SpeechBubble.jsx":"703f588432e5","components/mascot/KrishMascot.jsx":"425289003678"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WeatherWiseDesignSystem_0f0aac = window.WeatherWiseDesignSystem_0f0aac || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const VARIANTS = {
  primary: {
    background: 'linear-gradient(180deg, #55B8FF 0%, #2F88FF 100%)',
    color: '#FFFFFF',
    border: '3px solid #35A7FF',
    boxShadow: '0 5px 0 #064A93, 0 10px 18px rgba(0,82,168,0.36), inset 0 2px 0 rgba(255,255,255,0.35)'
  },
  green: {
    background: 'linear-gradient(180deg, #3DBE6C 0%, #18A957 100%)',
    color: '#FFFFFF',
    border: '3px solid #2BB24C',
    boxShadow: '0 5px 0 #0D7A3A, inset 0 2px 0 rgba(255,255,255,0.20)'
  },
  amber: {
    background: 'linear-gradient(180deg, #FFD700 0%, #FFB800 100%)',
    color: '#5a3a00',
    border: '3px solid #E8A800',
    boxShadow: '0 5px 0 #C9A100, inset 0 2px 0 rgba(255,255,255,0.25)'
  },
  orange: {
    background: 'linear-gradient(180deg, #FF8A00 0%, #F36A21 100%)',
    color: '#FFFFFF',
    border: '3px solid #E05A18',
    boxShadow: '0 6px 0 #C4450A, inset 0 2px 0 rgba(255,255,255,0.15)'
  },
  ghost: {
    background: 'rgba(255,255,255,0.13)',
    color: 'rgba(255,248,232,0.82)',
    border: '3px solid rgba(255,255,255,0.34)',
    boxShadow: '0 5px 0 rgba(0,0,0,0.18)'
  },
  white: {
    background: '#FFFFFF',
    color: '#2b6fb0',
    border: '3px solid rgba(255,255,255,0.9)',
    boxShadow: '0 5px 0 #cfe6f5'
  }
};
const SIZES = {
  sm: {
    fontSize: '15px',
    padding: '10px 22px',
    borderRadius: '14px'
  },
  md: {
    fontSize: '19px',
    padding: '14px 30px',
    borderRadius: '18px'
  },
  lg: {
    fontSize: '24px',
    padding: '18px 42px',
    borderRadius: '22px'
  },
  pill: {
    fontSize: '19px',
    padding: '14px 34px',
    borderRadius: '999px'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  glow = false,
  bounce = false,
  style: extraStyle = {}
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: "'Nunito', system-ui, sans-serif",
    fontWeight: 900,
    lineHeight: 1.1,
    userSelect: 'none',
    opacity: disabled ? 0.5 : 1,
    animation: glow ? 'glowRing 2.4s ease-in-out infinite' : bounce ? 'ctaBounce 2s ease-in-out infinite' : 'none',
    transition: 'transform 0.07s, filter 0.07s',
    outline: 'none'
  };
  const sizeStyle = SIZES[size] || SIZES.md;
  const variantStyle = VARIANTS[variant] || VARIANTS.primary;
  const handleDown = e => {
    if (!disabled) {
      e.currentTarget.style.transform = 'translateY(3px)';
      e.currentTarget.style.filter = 'brightness(0.86)';
    }
  };
  const handleUp = e => {
    e.currentTarget.style.transform = '';
    e.currentTarget.style.filter = '';
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseDown: handleDown,
    onMouseUp: handleUp,
    onMouseLeave: handleUp,
    onTouchStart: handleDown,
    onTouchEnd: handleUp,
    style: {
      ...base,
      ...sizeStyle,
      ...variantStyle,
      ...extraStyle
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const VARIANTS = {
  white: {
    background: 'rgba(255,255,255,0.97)',
    border: '3px solid rgba(32,52,70,0.08)',
    boxShadow: '0 8px 0 rgba(32,52,70,0.12), 0 16px 30px rgba(0,0,0,0.10)'
  },
  warm: {
    background: 'rgba(255,251,240,0.97)',
    border: '4px solid #FFB800',
    boxShadow: '0 10px 0 #C9A100, 0 24px 48px rgba(0,0,0,0.28)'
  },
  green: {
    background: 'rgba(255,255,255,0.97)',
    border: '4px solid #18A957',
    boxShadow: '0 8px 0 #0D7A3A, 0 16px 40px rgba(0,0,0,0.25)'
  },
  sky: {
    background: 'rgba(255,255,255,0.72)',
    border: '3px solid rgba(255,255,255,0.9)',
    boxShadow: '0 9px 0 rgba(80,150,190,0.16)'
  },
  dark: {
    background: 'rgba(15,26,40,0.72)',
    border: '2px solid rgba(255,255,255,0.14)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.38)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)'
  }
};
const RADII = {
  sm: '18px',
  md: '22px',
  lg: '28px',
  xl: '30px'
};
function Card({
  children,
  variant = 'white',
  radius = 'lg',
  padding = '32px 38px',
  style: extraStyle = {}
}) {
  const v = VARIANTS[variant] || VARIANTS.white;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: RADII[radius] || RADII.lg,
      padding,
      ...v,
      ...extraStyle
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressDots.jsx
try { (() => {
const DOT_COLORS = ['#2F88FF', '#18A957', '#FF8A00', '#7B35D8', '#F36A21', '#FFB800', '#E84040'];
function ProgressDots({
  total,
  current,
  onDotClick,
  style: extraStyle = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      background: 'rgba(0,0,0,0.3)',
      padding: '8px 16px',
      borderRadius: '999px',
      ...extraStyle
    }
  }, Array.from({
    length: total
  }).map((_, i) => {
    const active = i + 1 === current;
    const done = i + 1 < current;
    const color = DOT_COLORS[i % DOT_COLORS.length];
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => onDotClick && onDotClick(i + 1),
      style: {
        width: active ? '36px' : '28px',
        height: active ? '36px' : '28px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 900,
        fontSize: active ? '15px' : '12px',
        background: active ? color : done ? 'rgba(255,255,255,0.38)' : 'rgba(255,255,255,0.14)',
        color: active ? '#fff' : done ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)',
        border: active ? `3px solid ${color}` : done ? '2px solid rgba(255,255,255,0.3)' : '2px solid rgba(255,255,255,0.14)',
        boxShadow: active ? `0 4px 0 rgba(0,0,0,0.22)` : 'none',
        cursor: onDotClick ? 'pointer' : 'default',
        transition: 'all 0.2s ease',
        flexShrink: 0,
        outline: 'none'
      }
    }, i + 1);
  }));
}
Object.assign(__ds_scope, { ProgressDots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressDots.jsx", error: String((e && e.message) || e) }); }

// components/core/RoleBadge.jsx
try { (() => {
const ROLES = {
  sense: {
    label: 'Sense',
    color: '#18A957',
    soft: '#EAF8EF',
    dark: '#0D7A3A',
    icon: '👁'
  },
  signal: {
    label: 'Signal',
    color: '#FFB800',
    soft: '#FFF6DE',
    dark: '#C9A100',
    icon: '⚡'
  },
  think: {
    label: 'Think',
    color: '#7B35D8',
    soft: '#F0E9FF',
    dark: '#5B1FAD',
    icon: '🧠'
  },
  act: {
    label: 'Act',
    color: '#F36A21',
    soft: '#FFF0E8',
    dark: '#C4450A',
    icon: '💪'
  }
};
function RoleBadge({
  role,
  showIcon = true,
  size = 'md',
  filled = false,
  style: extraStyle = {}
}) {
  const r = ROLES[role] || ROLES.sense;
  const sizes = {
    sm: {
      fontSize: '13px',
      padding: '5px 14px',
      gap: '5px',
      borderRadius: '10px',
      iconSize: '16px'
    },
    md: {
      fontSize: '17px',
      padding: '8px 18px',
      gap: '7px',
      borderRadius: '14px',
      iconSize: '20px'
    },
    lg: {
      fontSize: '22px',
      padding: '12px 24px',
      gap: '9px',
      borderRadius: '18px',
      iconSize: '26px'
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      padding: s.padding,
      borderRadius: s.borderRadius,
      background: filled ? r.color : r.soft,
      border: `2px solid ${r.color}`,
      color: filled ? '#fff' : r.color,
      fontFamily: "'Nunito', system-ui, sans-serif",
      fontWeight: 900,
      fontSize: s.fontSize,
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      boxShadow: filled ? `0 4px 0 ${r.dark}` : 'none',
      ...extraStyle
    }
  }, showIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.iconSize,
      lineHeight: 1
    }
  }, r.icon), r.label);
}
function RoleChain({
  size = 'md',
  filled = false,
  style: extraStyle = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      flexWrap: 'wrap',
      ...extraStyle
    }
  }, ['sense', 'signal', 'think', 'act'].map((role, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: role
  }, /*#__PURE__*/React.createElement(RoleBadge, {
    role: role,
    size: size,
    filled: filled
  }), i < 3 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 900,
      fontSize: size === 'lg' ? '28px' : size === 'sm' ? '16px' : '22px',
      color: '#CBD5E0'
    }
  }, "\u2192"))));
}
Object.assign(__ds_scope, { RoleBadge, RoleChain });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RoleBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/SpeechBubble.jsx
try { (() => {
function SpeechBubble({
  children,
  side = 'left',
  animate = true,
  maxWidth = '280px',
  style: extraStyle = {}
}) {
  const tailLeft = {
    bottom: '-14px',
    left: '22px',
    borderLeft: '14px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: '16px solid #C9A100'
  };
  const tailRight = {
    bottom: '-14px',
    right: '22px',
    borderLeft: '8px solid transparent',
    borderRight: '14px solid transparent',
    borderTop: '16px solid #C9A100'
  };
  const tailInnerLeft = {
    bottom: '-10px',
    left: '24px',
    borderLeft: '12px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '14px solid #FFFBF0'
  };
  const tailInnerRight = {
    bottom: '-10px',
    right: '24px',
    borderLeft: '6px solid transparent',
    borderRight: '12px solid transparent',
    borderTop: '14px solid #FFFBF0'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth,
      padding: '14px 17px',
      borderRadius: side === 'left' ? '18px 18px 18px 4px' : '18px 18px 4px 18px',
      background: '#FFFBF0',
      border: '3px solid #FFB800',
      color: '#5a3a00',
      fontFamily: "'Nunito', system-ui, sans-serif",
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: 1.45,
      boxShadow: '0 5px 0 #C9A100',
      animation: animate ? 'kidPop 0.4s ease' : 'none',
      ...extraStyle
    }
  }, children, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 0,
      height: 0,
      ...(side === 'left' ? tailLeft : tailRight)
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 0,
      height: 0,
      ...(side === 'left' ? tailInnerLeft : tailInnerRight)
    }
  }));
}
Object.assign(__ds_scope, { SpeechBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpeechBubble.jsx", error: String((e && e.message) || e) }); }

// components/mascot/KrishMascot.jsx
try { (() => {
const STATES = {
  speaking: 'assets/characters/krish_speaking.png',
  celebrate: 'assets/characters/krish_celebrate.png',
  think: 'assets/characters/krish_think.png',
  thinking: 'assets/characters/krish_thinking.png',
  mistake: 'assets/characters/krish_mistake.png',
  point: 'assets/characters/krish_smile_point.png'
};
function KrishMascot({
  state = 'speaking',
  height = '60vh',
  side = 'left',
  speech,
  animate = true,
  style: extraStyle = {}
}) {
  const img = STATES[state] || STATES.speaking;
  const bubbleLeft = {
    borderRadius: '18px 18px 18px 4px',
    marginBottom: '10px',
    alignSelf: 'flex-start'
  };
  const bubbleRight = {
    borderRadius: '18px 18px 4px 18px',
    marginBottom: '10px',
    alignSelf: 'flex-end'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: side === 'left' ? 'flex-start' : 'flex-end',
      justifyContent: 'flex-end',
      pointerEvents: 'none',
      overflow: 'visible',
      ...extraStyle
    }
  }, speech && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '280px',
      padding: '14px 17px',
      background: '#FFFBF0',
      border: '3px solid #FFB800',
      color: '#5a3a00',
      fontFamily: "'Nunito', system-ui, sans-serif",
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: 1.45,
      boxShadow: '0 5px 0 #C9A100',
      animation: animate ? 'kidPop 0.4s ease' : 'none',
      ...(side === 'left' ? bubbleLeft : bubbleRight)
    }
  }, speech, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '-14px',
      [side]: '22px',
      width: 0,
      height: 0,
      borderLeft: side === 'left' ? '14px solid transparent' : '8px solid transparent',
      borderRight: side === 'left' ? '8px solid transparent' : '14px solid transparent',
      borderTop: '16px solid #C9A100'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '-10px',
      [side]: '24px',
      width: 0,
      height: 0,
      borderLeft: side === 'left' ? '12px solid transparent' : '6px solid transparent',
      borderRight: side === 'left' ? '6px solid transparent' : '12px solid transparent',
      borderTop: '14px solid #FFFBF0'
    }
  })), /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "Krish",
    style: {
      height,
      width: 'auto',
      maxWidth: 'none',
      display: 'block',
      objectFit: 'contain',
      filter: 'drop-shadow(0 18px 34px rgba(0,0,0,0.48))',
      animation: animate ? 'kidPop 0.5s ease' : 'none'
    }
  }));
}
Object.assign(__ds_scope, { KrishMascot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/mascot/KrishMascot.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProgressDots = __ds_scope.ProgressDots;

__ds_ns.RoleBadge = __ds_scope.RoleBadge;

__ds_ns.RoleChain = __ds_scope.RoleChain;

__ds_ns.SpeechBubble = __ds_scope.SpeechBubble;

__ds_ns.KrishMascot = __ds_scope.KrishMascot;

})();
