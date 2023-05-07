// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import product from "@/models/product"
import connectDb from "@/middleware/mongoose"

const handler = async (req, res) => {
        let products = await product.find()
        res.status(200).json({ products })


}
export default connectDb(handler);
