import "@styles/globals.css";
import { Children } from "react";

export const metadata = {
  title: "Prompt Generator",
  description: "Discover and share AI prompt",
};

const RootLayout = () => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">{Children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
