import Link from 'next/link';

export default function AsideAdm() {
  
  return (
    <aside>
          <h2>Products</h2>
          <ul>
            <li>Company Profile</li>
            <Link href='/'>
              <li>Logout</li>
            </Link>
          </ul>
     </aside>
  )
}
