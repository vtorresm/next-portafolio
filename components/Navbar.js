import Link from 'next/link';

function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/blog">
          <a>Go to pages/post/[pid].js</a>
        </Link>
      </li>
      <li>
        <Link href="/post/abc?foo=ba">
          <a>Also goes pages/post/[pid].js</a>
        </Link>
      </li>
      <li>
        <Link href="/post/abc/a-comment">
          <a>Go to pages/post/[pid]/[comment].js</a>
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;