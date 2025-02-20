import dynamic from "next/dynamic";

/**
 * disable ssr to avoid pre-rendering issues of Next.js
 * because we're using a canvas element that can't be pre-rendered by Next.js on the server
 */
const App = dynamic(() => import("./App"), { ssr: false });

export default App;
