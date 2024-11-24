import { notFound } from "next/navigation";

// Fetch post data from API
async function fetchPost(id: string) {
  const response = await fetch(`http://localhost:3000/api/external?id=${id}`, {
    next: { revalidate: 10 },
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

// Server Component for Post Details
export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Unwrap params
  const post = await fetchPost(id);

  if (!post) {
    notFound(); // Render a 404 page
  }

  return (
    <div className="min-h-screen py-12 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500 text-gray-900">
        <h1 className="text-4xl font-extrabold mb-6 text-indigo-600">{post.title}</h1>
        <p className="text-gray-800 text-lg leading-relaxed">{post.body}</p>
      </div>
    </div>
  );
}
