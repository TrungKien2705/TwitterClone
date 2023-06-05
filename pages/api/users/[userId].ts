import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    const { userId } = req.query;
    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid Id");
    }
    const exisatingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    const followersCount = await prisma.user.count({
      where: {
        followingIds: {
          has: userId,
        },
      },
    });
    return res.status(200).json({ ...exisatingUser, followersCount });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Something went wrong: ${error}` });
  }
}
