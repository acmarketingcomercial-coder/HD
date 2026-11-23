import React from 'react';
import {useCurrentFrame} from 'remotion';
import {theme} from '../theme';

type Character2DProps = {
  mood?: 'neutral' | 'curious';
  scale?: number;
};

// Rig geométrico TEMPORÁRIO. Não é character master nem sprite final.
// Componentes SVG separados permitem evolução para rig articulado.
export const Character2D: React.FC<Character2DProps> = ({
  mood = 'neutral',
  scale = 1,
}) => {
  const frame = useCurrentFrame();
  const breathing = Math.sin(frame / 14) * 2.2;
  const blinking = frame % 96 >= 65 && frame % 96 <= 68;
  const browsY = mood === 'curious' ? -4 : 0;
  return (
    <svg
      viewBox="0 0 400 660"
      width={400 * scale}
      height={660 * scale}
      role="img"
      aria-label="Avatar 2D provisório de empresário"
    >
      <g transform={'translate(0 ' + breathing + ')'}>
        <ellipse cx="205" cy="630" rx="132" ry="18" fill="#000" opacity="0.11"/>
        <g id="legs">
          <path d="M126 430 L183 428 L188 610 L125 610 Z" fill="#343434"/>
          <path d="M203 430 L266 430 L275 610 L208 610 Z" fill="#343434"/>
          <rect x="115" y="595" width="84" height="24" rx="9" fill={theme.ink}/>
          <rect x="207" y="595" width="87" height="24" rx="9" fill={theme.ink}/>
        </g>
        <g id="body">
          <path d="M143 240 Q201 215 261 242 L278 455 L122 455 Z" fill={theme.ink}/>
          <path d="M191 239 L214 239 L230 306 L207 331 L179 306 Z" fill="#F7F3F0"/>
          <path d="M143 256 L115 371 L142 389 L185 307 Z" fill={theme.ink}/>
          <path d="M261 258 L292 368 L265 385 L224 304 Z" fill={theme.ink}/>
          <circle cx="138" cy="392" r="19" fill="#BC7D5D"/>
          <circle cx="267" cy="391" r="19" fill="#BC7D5D"/>
        </g>
        <g id="head">
          <rect x="185" y="213" width="41" height="47" rx="17" fill="#BC7D5D"/>
          <ellipse cx="205" cy="143" rx="90" ry="100" fill="#C98A66"/>
          <path d="M118 133 Q104 37 206 36 Q294 28 293 123 Q259 114 249 88 Q213 119 118 133Z" fill="#232323"/>
          <path d={'M160 ' + (148 + browsY) + ' Q177 ' + (140 + browsY) + ' 193 ' + (148 + browsY)} fill="none" stroke="#3B2926" strokeWidth="5" strokeLinecap="round"/>
          <path d={'M222 ' + (148 + browsY) + ' Q239 ' + (140 + browsY) + ' 254 ' + (148 + browsY)} fill="none" stroke="#3B2926" strokeWidth="5" strokeLinecap="round"/>
          {blinking ? (
            <g stroke="#3B2926" strokeWidth="4"><line x1="167" y1="173" x2="190" y2="173"/><line x1="223" y1="173" x2="246" y2="173"/></g>
          ) : (
            <g fill="#242424"><ellipse cx="178" cy="173" rx="6" ry="8"/><ellipse cx="234" cy="173" rx="6" ry="8"/></g>
          )}
          <path d="M204 182 L198 206 L210 206" stroke="#A56A50" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d="M184 224 Q206 236 227 223" stroke="#7C433E" strokeWidth="4" fill="none" strokeLinecap="round"/>
        </g>
      </g>
    </svg>
  );
};
