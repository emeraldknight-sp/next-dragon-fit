import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>Pagina de inicio</p>
      <h1>Dragon Fit App</h1>
      <Link href="/login">Acessar conta</Link>
      <Link href="/register">Criar conta</Link>
    </div>
  );
}
