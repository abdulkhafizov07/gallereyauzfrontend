import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-black">
      <h1 className="text-5xl font-bold mb-4">404 - Sahifa topilmadi</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Kechirasiz, bu sahifa mavjud emas.
      </p>
      <Link href="/" className="text-brand underline">
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
