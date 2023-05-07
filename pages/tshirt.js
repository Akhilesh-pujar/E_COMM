
import product from '@/models/product';
import mongoose from "mongoose";

function tshirt({ products }) {
  console.log(products)
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            {products.map((item) => {

              return <div passref={true} href={`product/${item.slug}`} key={item.id}
                className="  lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-contain object-center w-full object-fit  h-full " src={item.img} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                  <p className="mt-1">{item.price}</p>
                </div>
              </div>

            })}
          </div>
        </div>
      </section>
    </div>
  )
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)

  }

  let products = await product.find({ category: 'tshirts' })
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  }
}


export default tshirt
