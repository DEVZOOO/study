/**
 * in hello
 */

import { NextApiRequest, NextApiResponse } from "next";

export function getData() {
    return {
        title : "hello title",
    };
}

export default (req: NextApiRequest, res: NextApiResponse) => {
    return res.status(200)
    .send({
        title : "hello title",
    });
}