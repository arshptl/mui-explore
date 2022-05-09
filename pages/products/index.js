import Link from 'next/link'
import React from 'react'

const products = ({notes}) => {
  return (
    <>
      Hii there
      {notes.map((test) => {
      return <div><Link href="/products/[id]" as={`/products/${test.id}`}>{test.title}</Link></div>
    })}
    </>
    
  )
}

// export async function getServerSideProps() {
//   const res = fetch(`http://localhost:3000/api/note/`);
//   const {data} = await res.json()
//   return {
//     props: {notes: data}
//   }
// }

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/note`)
  const { data } = await res.json();

  return {
    props: {notes: data}
  }
}

export default products