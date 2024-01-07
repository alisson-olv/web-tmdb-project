import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Header({ }: Props) {
  return (
    <>
      <div
        className='flex justify-between items-center px-[100px]'
      >
        <Image
          src='/logo.png'
          alt='Logo principal do Site'
          title='Home'
          priority
          width={160}
          height={61}
          className='cursor-pointer'
        />

        <nav className='flex gap-3'>
          <Link href='/'>Home</Link>
          <Link href='/filmes'>Filmes</Link>
          <Link href='/series'>Séries</Link>
          <Link href='/aplicativo'>Aplicativo</Link>
        </nav>
      </div>
    </>
  )
}

export default Header