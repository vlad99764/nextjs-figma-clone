import CursorSVG from "@/public/assets/CursorSVG";

type Props = { color: string; x: number; y: number; message: string };

const Cursor = ({ color, x, y, message }: Props) => {
  return (
    <div
      className="absolute top-0 left-0 pointer-events-none"
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      <CursorSVG color={color} />

      {/* Message */}
      {message && (
        <div className="absolute left-2 top-5 px-4 py-2 rounded-3xl" style={{ backgroundColor: color }}>
          <p className="text-white whitespace-nowrap tetx-sm leading-relaxed">{message}</p>
        </div>
      )}

    </div>
  )
}

export default Cursor