import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <header className="w-full">
        <div className="flex flex-row items-center justify-between max-w-3xl p-4">
          <Link href="/" className="inline-flex items-center gap-1">
            <Image
              src="/logo.png"
              className="rounded-full"
              width={48}
              height={48}
              alt="logo dragon fit"
              priority
            />
            <span className="text-2xl uppercase font-heading font-bold">
              Dragon Fit
            </span>
          </Link>
          <Link href="/login" className="bg-linear-to-t from-red-900 to-red-700 px-2 py-px rounded-sm">
            <span className="text-sm font-inter font-medium">Entrar</span>
          </Link>
        </div>
      </header>
      <main>
        <div>
          <section>
            <h2>Eleve sua performance com treinos e nutricao inteligente!</h2>
            <p>Treinos personalizados, planos alimentares e acompanhamento de resultados na palma da sua mao.</p>
            <Link href="/register" className="bg-linear-to-t from-red-900 to-red-700 px-4 py-2 rounded-sm">Comece agora</Link>
          </section>
          <section>
            <h3>Porque Dragon Fit?</h3>
            <span>Descricao de subtitulo</span>
            <ul>
              <li>
                <div>Imagem</div>
                <div>Titulo</div>
                <div>Descricao</div>
              </li>
              <li>
                <div>Imagem</div>
                <div>Titulo</div>
                <div>Descricao</div>
              </li>
              <li>
                <div>Imagem</div>
                <div>Titulo</div>
                <div>Descricao</div>
              </li>
            </ul>
          </section>
          <section>
            <h3>Planos de assinatura</h3>
            <span>Conheca nossos planos</span>
            <ul>
              <li>
                <div>Titulo</div>
                <div>Preco</div>
                <div>Descricao</div>
              </li>
              <li>
                <div>Titulo</div>
                <div>Preco</div>
                <div>Descricao</div>
              </li>
              <li>
                <div>Titulo</div>
                <div>Preco</div>
                <div>Descricao</div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
