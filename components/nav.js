import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/products">
          <li>Shop</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
