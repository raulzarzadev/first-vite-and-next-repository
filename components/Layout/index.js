import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <main className="">
      <nav>
        <ul className="flex gap-2 justify-center">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
        </ul>
      </nav>
      Hola este es el layout
      <container>{children}</container>
    </main>
  );
}
