import { db } from "../db.js";

export async function getUsers() {
  const commentsCollection = await db.collection("comments");
  const findUser = await commentsCollection
    .find({ name: "Mercedes Tyler" })
    .limit(5)
    .toArray();
  return findUser;
}
