import mugs from "@/models/mugs"
import connectDb from "@/middleware/mongoose"

const handle = async (req, res) => {
    if (req.method == 'POST') {

        for (let i = 0; i < req.body.length; i++) {
            let p = new mugs({

                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                category: req.body[i].category,
                size: req.body[i].size,
                price: req.body[i].price,
                availableQty: req.body[i].availableQty,

            })
            await p.save()

        }
        res.status(200).json({ sucess: "Sucess" })


    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}
export default connectDb(handle);