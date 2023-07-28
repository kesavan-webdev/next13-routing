import "./globals.css";

export const metadata = {
  title: "next13-routings",
  description: "created by kesav",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-green-800">{children}</body>
    </html>
  );
}
