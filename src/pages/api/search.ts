import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        try {
            const { q: query } = req.query;

            if (typeof query !== "string") {
                throw new Error("Invalid request")
            }
        

        const accolade = await prisma.accolade.findMany({
            where: {
                OR: [
                {
                    name: {
                        contains: query,
                    },
                },
                {
                    institution: {
                        contains: query,
                    },
                },
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    outcome: {
=======
                    comments: {
>>>>>>> 61b31cc (ftg)
=======
                    outcome: {
>>>>>>> 7749313 (meow)
                        contains: query,
                    },
                },                {
                    messaging: {
                        contains: query,
                    },
                },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7749313 (meow)
                {
                    comments: {
                        contains: query,
                    },
                },
                {
                    extSource: {
                        contains: query,
                    },
                },
                {
                    intSource: {
                        contains: query,
                    },
                },
                {
                    sourceatr: {
                        contains: query,
                    },
                },
                {
                    wherepubint: {
                        contains: query,
                    },
                },

<<<<<<< HEAD
=======
>>>>>>> 61b31cc (ftg)
=======
>>>>>>> 7749313 (meow)
            ],
        },
    });
    
    res.status(200).json({ accolade })}
    
    catch (error) {
        res.status(500).end();
    }
    }
}
