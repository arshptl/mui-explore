import React from 'react'

const proDesc = ({notes}) => {

    // const router = useRouter();
    // const { params } = router.query;
    return (<>
        <div>proDesc</div>
      <div>{notes.title}</div>
      <div>{notes.id}</div>
      
  </>
  )
}

export async function getServerSideProps({ params, req, res }) {
  console.log(params.params)
  const response = await fetch(`http://localhost:3000/api/note/${params.params}`);

  console.log("in response" + response.ok);

  if (!response.ok) {
    res.writeHead(302, { location: '/notes' });
    res.end();
    return {props: {}}
  }

  const { data } = await response.json();

  if (data) {
    return {
       props: {notes : data}
     }
  }

}

export default proDesc