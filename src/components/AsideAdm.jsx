import Link from 'next/link';

export default function AsideAdm() {
  
  return (
    <aside>
          <h2>Produtos</h2>
          <ul>
            <li>Perfil da empresa</li>
            <Link href='/'>
              <li>Sair</li>
            </Link>
          </ul>
     </aside>
  )
}
