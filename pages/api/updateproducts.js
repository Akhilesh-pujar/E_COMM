import product from "@/models/product"
import connectDb from "@/middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body)
        for (let i = 0; i < req.body.length; i++) {
            let p = await product.findByIdAndUpdate(req.body[i]._id, req.body[i])

        }
        res.status(200).json({ sucess: "Sucess" })



    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }




}
export default connectDb(handler);