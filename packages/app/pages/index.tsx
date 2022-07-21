import type { InferGetStaticPropsType, NextPage } from 'next'

type ProductsResponseT = {
  result: {
    data: Array<{name: string; description: string; price: number}>;
  }
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:4000/api/product/products?input={"page":1,"limit":15}');
  const data: ProductsResponseT = await response.json();
  
  return {
    props: {
      data
    }
  }
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => {
  return (
    <div className="w-full">
      <h1 className='text-center text-4xl font-bold pt-5'>Products</h1>
      <div className='grid grid-cols-3 grid-rows-3 max-w-fit gap-8 pt-12 mx-auto'>
        {data.result.data.map(({ name, description, price }, index) => (
          <div key={index} className='bg-red-200 rounded-lg shadow-lg w-80 h-60 text-black p-6'>
            <p>{name}</p>
            <p>{description}</p>
            <p>{Number(price).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
