import "./globals.css";
import AppHeader from "@/components/layout/AppHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <AppHeader />
        {children}
      </body>
    </html>
  );
}