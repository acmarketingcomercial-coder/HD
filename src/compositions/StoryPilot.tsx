import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';
import {Character2D} from '../components/Character2D';
import {theme} from '../theme';

// PREVIEW TÉCNICA / ILUSTRATIVA. Não corresponde ao roteiro final aprovado.
export const StoryPilot: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const reveal = spring({fps, frame, config: {damping: 180, mass: 0.8}});
  const buttonMove = spring({fps, frame: frame - 33, config: {damping: 14}});
  const jolt = frame >= 48 && frame < 60
    ? Math.sin((frame - 48) * 2.8) * (60 - frame) * 2.5
    : 0;
  const headlineOpacity = interpolate(frame, [44, 56], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cardRotation = interpolate(frame, [0, 140], [-5, 3], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cameraMove = interpolate(frame, [0, 150], [16, -24], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.quad),
  });

  return (
    <AbsoluteFill style={{backgroundColor: theme.paper, fontFamily: theme.font, color: theme.ink, overflow: 'hidden'}}>
      <div style={{position: 'absolute', top: 118, left: 70, right: 70, fontSize: 25, letterSpacing: 4, fontWeight: 700, color: theme.gray}}>
        AC MOTION STUDIO · PILOTO NÃO APROVADO
      </div>
      <div style={{position: 'absolute', top: 300 + cameraMove, left: 70, width: 920, height: 875, backgroundColor: '#E9E4DC', borderRadius: 34, overflow: 'hidden'}}>
        <div style={{position: 'absolute', bottom: 0, height: 145, width: '100%', backgroundColor: '#D6CFC5'}}/>
        <div style={{position: 'absolute', left: 75, top: 60, width: 390, height: 410, border: '22px solid #D8D0C4', backgroundColor: '#EFEAE1'}}>
          <div style={{position: 'absolute', top: 135, left: 0, right: 0, height: 5, backgroundColor: '#D8D0C4'}}/>
        </div>
        <div style={{position: 'absolute', bottom: 95, left: 100, width: 730, height: 52, backgroundColor: '#3F3D3B', borderRadius: 10}}/>
        <div style={{position: 'absolute', bottom: 140, left: 420, width: 370, height: 280, backgroundColor: '#292929', borderRadius: 18, transform: 'rotate(' + cardRotation + 'deg)'}}/>
        <div style={{position: 'absolute', bottom: 160, left: 440, width: 330, height: 240, backgroundColor: '#FBFAF8', borderRadius: 9, transform: 'rotate(' + cardRotation + 'deg)'}}>
          <div style={{margin: 20, width: 165, height: 14, borderRadius: 4, backgroundColor: theme.muted}}/>
          <div style={{margin: 20, width: 260, height: 90, borderRadius: 7, backgroundColor: '#D9D3CC'}}/>
          <div style={{margin: 20, width: 210, height: 12, borderRadius: 4, backgroundColor: theme.muted}}/>
        </div>
        <div style={{position: 'absolute', left: 70, bottom: 135, transform: 'translateY(' + (1 - reveal) * 190 + 'px)'}}>
          <Character2D mood={frame > 48 ? 'curious' : 'neutral'} scale={0.9}/>
        </div>
      </div>
      <div style={{position: 'absolute', top: 1140, left: 70, right: 70, padding: 38, borderRadius: 28, backgroundColor: '#FFFFFF', boxShadow: '0 25px 60px rgba(0,0,0,0.10)', transform: 'translateY(' + (1 - reveal) * 90 + 'px)'}}>
        <div style={{fontSize: 31, fontWeight: 700, letterSpacing: 2, color: theme.gray}}>UMA PUBLICAÇÃO PRONTA</div>
        <div style={{fontSize: 77, fontWeight: 900, marginTop: 14, lineHeight: 1.04}}>E AGORA?</div>
        <div style={{marginTop: 42, height: 136, backgroundColor: theme.red, borderRadius: 20, color: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 900, fontSize: 51, boxShadow: '0 15px 0 #891C1C', transform: 'translateY(' + (buttonMove * 14 + jolt) + 'px)'}}>
          PUBLICAR
        </div>
        <div style={{fontSize: 31, marginTop: 54, lineHeight: 1.25, opacity: headlineOpacity, fontWeight: 700}}>
          O erro começa antes do post.
        </div>
      </div>
      <div style={{position: 'absolute', bottom: 78, left: 75, right: 75, fontSize: 27, color: theme.gray, textAlign: 'center'}}>
        Protótipo de cenário, personagem e movimento · sem áudio
      </div>
    </AbsoluteFill>
  );
};
