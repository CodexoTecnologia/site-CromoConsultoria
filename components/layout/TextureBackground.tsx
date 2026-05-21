import PixelBlast from '@/components/sections/shared/PixelBlast';

export default function TextureBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none select-none"
      style={{ opacity: 0.1, zIndex: 9999 }}
      aria-hidden="true"
    >
      <PixelBlast
        variant="square"
        pixelSize={3}
        color="#B497CF"
        patternScale={2}
        patternDensity={0.52}
        pixelSizeJitter={0.15}
        speed={0.1}
        edgeFade={0.2}
        transparent
        enableRipples={false}
        autoPauseOffscreen
      />
    </div>
  );
}
