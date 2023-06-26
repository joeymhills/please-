<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
//@ts-ignore
>>>>>>> b897a6a (jsdk)
=======

>>>>>>> 67756f5 (meowo)
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

interface create {
    institution: string,
    name: string,
    comments: string
    outcome: string
    intSource: string
    extSource: string
    messaging: string
    frequency: string
    notifDate: string
    cmcontact: string
    sourceatr: string
    wherepubint: string
    promotionlim: string
<<<<<<< HEAD
    imgurl:string
}
=======
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

>>>>>>> 61b31cc (ftg)
=======
}
>>>>>>> a5bf093 (meowowwo)

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    const {name, institution, outcome, extSource, intSource, messaging, frequency, notifDate, 
<<<<<<< HEAD
        cmcontact, sourceatr, wherepubint, promotionlim,comments,imgurl} = req.body
=======
        cmcontact, sourceatr, wherepubint, promotionlim,comments} = req.body
>>>>>>> 61b31cc (ftg)

    try {
        await prisma.accolade.create({
            data: {
                institution, name, comments, outcome, extSource,
                intSource, messaging, frequency, notifDate, cmcontact,
<<<<<<< HEAD
                sourceatr, wherepubint, promotionlim,imgurl
=======
                sourceatr, wherepubint, promotionlim
>>>>>>> 61b31cc (ftg)

            }})
        res.status(200).json({message: 'accolade created'})
    } catch (error) {
        res.status(500).json({message: 'error with prisma appending'})
    }
}