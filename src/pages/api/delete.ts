import { NextApiRequest, NextApiResponse } from "next"
<<<<<<< HEAD
<<<<<<< HEAD
import prisma from "../../../prisma/client"


export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    console.log("req is: ", req.body)
    const payload = req.body
=======

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    const { id } = req.body
>>>>>>> 7749313 (meow)
=======
import prisma from "../../../prisma/client"

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    const id = req.body
>>>>>>> ebfeca7 (mewowo)

    try {
        await prisma.accolade.delete({
            where: {
<<<<<<< HEAD
                id: payload
            }})
        res.status(200).json({message: 'successfully deleted: '})
        console.log('successfully deleted: ')
    } catch (error) {
        res.status(500).json({message: 'unable to delete: '})
        console.log('error with id:', payload)
=======
                id
            }})
        res.status(200).json({message: 'successfully deleted: ', id})
        console.log('successfully deleted: ', id)
    } catch (error) {
<<<<<<< HEAD
        res.status(500).json({message: 'error with prisma'})
>>>>>>> 7749313 (meow)
=======
        res.status(500).json({message: 'could not delete: ', id})
        console.log('error with id: ', id)
>>>>>>> ebfeca7 (mewowo)
    }
}