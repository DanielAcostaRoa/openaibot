import type { NextApiRequest, NextApiResponse } from "next";
import { AiBot } from "lib/AiBot/AiBot";

const aibot = new AiBot();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const response = await aibot.createCompletion(req.body.question);
  res.status(200).json({ result: response });
}
