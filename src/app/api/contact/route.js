import { NextResponse } from "next/server";
import Contact from "@/util/models/Contact";
import connectDb from "@/util/middleware/connectionDB";
connectDb();

export async function POST(req, res) {
  let data = await req.json();
  let contacts = new Contact(data);
  await contacts.save();
  return NextResponse.json({ result: true }, { status: 200 });
}
