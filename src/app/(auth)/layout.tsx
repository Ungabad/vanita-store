import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <section className="hidden lg:flex flex-col justify-between bg-dark-900 text-light-100 p-10">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-md bg-orange inline-flex items-center justify-center">
            <Image src="/transFlashLogo.gif" alt="Soul Woven Rising Xpressions Logo" width={20} height={20} />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-heading-2">Adorn Your Soul, Wear the Story.</h2>
          <p className="max-w-md text-lead text-light-300">
            Join the healing movement with Soul Woven Rising Xpressions. Our apparel is more than just clothing; it's a
            canvas for your journey towards self-discovery and empowerment. Each piece is thoughtfully designed to
            inspire and uplift, helping you express your unique story while embracing comfort and style.
          </p>
        </div>

        <p className="text-footnote text-light-400">© 2025 Soul Woven Rising Xpressions. All rights reserved.</p>
      </section>

      <section className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">{children}</div>
      </section>
    </main>
  );
}
