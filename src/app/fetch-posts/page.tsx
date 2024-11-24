"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Define the Post type
type Post = {
  id: number;
  title: string;
  body: string;
};

const FetchPostsPage = () => {
  // State management
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("Fetching posts...");
        const response = await fetch("/api/external"); // Use the Next.js API route
        if (!response.ok) {
          throw new Error(`Failed to fetch posts. Status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data.slice(0, 100)); // Fetch all 100 posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center py-12">
        <h1 className="text-5xl font-bold mb-4">
          Fetched Posts 🚀
        </h1>
        <p className="text-lg font-medium">
          Explore dynamic posts from the JSONPlaceholder API. 🌟
        </p>
      </section>

      {/* Fetched Posts Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">
          Posts 📝
        </h2>

        {loading ? (
          <div className="text-center text-indigo-700">
            Loading posts... ⏳
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg border-l-4 border-indigo-500 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-600 flex items-center">
                  {post.title} <span className="ml-2">📄</span>
                </h3>
                <p className="text-gray-700">
                  {post.body.substring(0, 100)}...
                </p>
                <Link href={`/posts/${post.id}`}>
                  <button className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-full hover:scale-105 hover:shadow-lg transition-transform duration-300">
                    Read More ➡️
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            No posts available. 😞
          </div>
        )}
      </section>
    </main>
  );
};

export default FetchPostsPage;
