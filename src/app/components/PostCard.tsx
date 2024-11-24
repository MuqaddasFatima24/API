import { motion } from "framer-motion";

const PostCard = ({ post }: { post: { id: number; title: string; body: string } }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: post.id * 0.1 }}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
      <p className="text-gray-600">{post.body.substring(0, 100)}...</p>
    </motion.div>
  );
};

export default PostCard;
