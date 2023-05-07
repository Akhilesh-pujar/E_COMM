import React from 'react'
import { motion } from "framer-motion";

function Herobanner() {
    const product1 = [1];
    const product2 = [2];
    const product3 = [3];
    const product4 = [4];
    const product5 = [5];
    return (
        <div className='bg-gray-800'>
            <section className="text-gray-100 body-font">
                <div className=" relative w-full flex overflow-x-scroll 
         overflow-y-hidden snap-x  snap-mandatory z-10
         scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#b35a40]">
                    {product1.map((project, i) => (
                        <motion.div
                            key={project}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className='w-screen flex-shrink-0 snap-center flex flex-col 
                 space-y-5 items-center justify-center p-20 md:p-44 h-screen
                 '>
                            <motion.img
                                initial={{
                                    y: -300,
                                    opacity: 0,
                                }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className=' mt-12 w-[260px] h-[230px]'
                                src='/product1.jfif'

                            />
                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='text-4xl font-semibold text-center'>
                                    <span>Product {i + 1}: </span>
                                    <span className='underline decoration-[#F7AB0A]'>
                                        The cotton wear </span>
                                </h4>
                                <p className='text-lg text-center md:text-center '>

                                    The best selling T-shirt

                                </p>
                            </div>
                        </motion.div>
                    ))}



                    {product2.map((project, i) => (
                        <motion.div
                            key={project}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className='w-screen flex-shrink-0 snap-center flex flex-col 
                 space-y-5 items-center justify-center p-20 md:p-44 h-screen
                '>
                            <motion.img
                                initial={{
                                    y: -300,
                                    opacity: 0,
                                }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className=' mt-12 w-[200px] h-[200px]'
                                src='/product2.jfif'

                            />
                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='text-4xl font-semibold text-center'>
                                    <span>Product{i + 2}: </span>
                                    <span className='underline decoration-[#F7AB0A]'>
                                        Polyster Wears</span>
                                </h4>
                                <p className='text-lg text-center md:text-left'>
                                    The best selling T-shirts</p>
                            </div>
                        </motion.div>
                    ))}

                    {product3.map((project, i) => (
                        <motion.div
                            key={project}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className='w-screen flex-shrink-0 snap-center flex flex-col 
                 space-y-5 items-center justify-center p-20 md:p-44 h-screen
                '>
                            <motion.img
                                initial={{
                                    y: -300,
                                    opacity: 0,
                                }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className=' mt-12 w-[200px] h-[200px]'
                                src='/product3.jpg'

                            />
                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='text-4xl font-semibold text-center'>
                                    <span>Product {i + 3}: </span>
                                    <span className='underline decoration-[#F7AB0A]'>
                                        Cotton blend</span>
                                </h4>
                                <p className='text-lg text-center md:text-left'>
                                    The best selling T-shirts</p>
                            </div>
                        </motion.div>
                    ))}


                    {product4.map((project, i) => (
                        <motion.div
                            key={project}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className='w-screen flex-shrink-0 snap-center flex flex-col 
                 space-y-5 items-center justify-center p-20 md:p-44 h-screen
                '>
                            <motion.img
                                initial={{
                                    y: -300,
                                    opacity: 0,
                                }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className=' mt-12 w-[200px] h-[200px]'
                                src='/product4.jpg'

                            />
                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='text-4xl font-semibold text-center'>
                                    <span>Product {i + 4}: </span>
                                    <span className=' text-center underline decoration-[#F7AB0A]'>
                                        Lycra</span>
                                </h4>
                                <p className='text-lg text-center md:text-left'>
                                    The best selling T-shirts</p>
                            </div>
                        </motion.div>
                    ))}


                    {product5.map((project, i) => (
                        <motion.div
                            key={project}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className='w-screen flex-shrink-0 snap-center flex flex-col 
                 space-y-5 items-center justify-center p-20 md:p-44 h-screen
                '>
                            <motion.img
                                initial={{
                                    y: -300,
                                    opacity: 0,
                                }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className=' mt-12 w-[200px] h-[200px]'
                                src='/product5.jfif'

                            />
                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='text-4xl font-semibold text-center'>
                                    <span>Product {i + 5}: </span>
                                    <span className='underline decoration-[#F7AB0A]'>
                                        Lycra blend</span>
                                </h4>
                                <p className='text-lg text-center md:text-left'>
                                    The best selling T-shirts</p>
                            </div>
                        </motion.div>
                    ))}








                    {/* <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
      <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div> */}
                </div>
            </section>
        </div>
    )
}

export default Herobanner
