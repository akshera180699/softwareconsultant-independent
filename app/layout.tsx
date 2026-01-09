import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 flex min-h-screen flex-col">
        
        {/* Header */}
        <header className="border-b">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex gap-6">
            <Link href="/" className="font-semibold">
              Home
            </Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t">
          <div className="max-w-5xl mx-auto px-6 py-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Akshera Sharma · Software Engineering Consultant. All rights reserved.
         </div>
       </footer>


      </body>
    </html>
  );
}
