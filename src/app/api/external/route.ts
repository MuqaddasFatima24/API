import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url); // Extract query params from the request URL
    const postId = searchParams.get("id");

    // Determine the URL to fetch
    const url = postId
      ? `https://jsonplaceholder.typicode.com/posts/${postId}`
      : "https://jsonplaceholder.typicode.com/posts";

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data); // Return the JSON response
  } catch (error) {
    console.error("Error fetching data in API route:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
