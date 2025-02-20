import CursorSVG from "@/public/assets/CursorSVG"
import { CursorChatProps, CursorMode } from "@/types/type"

const CursorChat = ({ cursor, cursorState, setCursorState, updateMyPresence }: CursorChatProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateMyPresence({ message: event.target.value });
    setCursorState({
      mode: CursorMode.Chat,
      previousMessage: null,
      message: event.target.value,
    });
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setCursorState({
        mode: CursorMode.Chat,
        // @ts-ignore
        previousMessage: cursorState.message,
        message: ""
      });
    } else if (event.key === "Escape") {
      setCursorState({
        mode: CursorMode.Hidden,
      });
    }
  };

  return (
    <div className="absolute top-0 left-0"
      style={{ transform: `translateX(${cursor.x}px) translateY(${cursor.y}px)` }}>
      {/* Show message input when cursor is in chat mode */}
      {cursorState.mode === CursorMode.Chat && (
        <>
          {/* Custom Cursor shape */}
          <CursorSVG color="#000" />

          <div
            className="absolute left-2 top-5 px-4 py-2 text-sm leading-relaxed bg-blue-500 text-white"
            onKeyUp={(e) => e.stopPropagation()}
            style={{ borderRadius: 20 }}
          >
            {/**
             * if there is a previous message, show it above the input
             * We need this cause when user press enter, we want to show the previous message at top and the input at bottom
             */}
            {cursorState.previousMessage && <div>{cursorState.previousMessage}</div>}
            <input
              className="z-10 w-60 border-none	bg-transparent text-white placeholder-blue-300 outline-none"
              autoFocus={true}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={cursorState.previousMessage ? "" : "Type something…"}
              value={cursorState.message}
              maxLength={50}
            />

          </div>
        </>
      )}
    </div>
  );
};

export default CursorChat;