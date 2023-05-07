import '@styles/globels.css';
import { Children } from "react";

export const metadata = {
  title: "Prompt Generator",
  description: "Discover and share AI prompt",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
