import mongoose from "mongoose";
import product from '@/models/product';

function hoodies({ products }) {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">

          {products.map((item) => {
            return <div key={item.id} className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className=" object-contain object-center w-full object-fit  h-full " src={item.img} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.availableQty}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </div>

            </div>

          })}

        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)

  }

  let products = await product.find({ category: 'hoodie' })
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  }
}

export default hoodies
