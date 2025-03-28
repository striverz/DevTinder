import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import feed from "../assets/feed-icon.png";
import { useSelector } from "react-redux";

const NoFeed = () => {
  const user = useSelector((store) => store.user);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-2xl p-6 max-w-md mx-auto text-center"
    >
      <div className="bg-gradient-to-b from-blue-100 to-white p-6 rounded-xl">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex justify-center"
        >
          <div className="bg-blue-100 p-4 rounded-full border-2 border-dashed border-blue-400">
            <img src={feed} alt="Placeholder Icon" className="w-16 h-16" />
          </div>
        </motion.div>
      </div>
      {user ? (
        <h2 className="text-xl font-bold mt-4">Your feed is empty</h2>
      ) : (
        <h2 className="text-xl font-bold mt-4">Please Login to see the feed</h2>
      )}
      <p className="text-gray-600 text-sm mt-2">
        There's nothing here yet. Start following people or topics to fill your
        feed with content you love.
      </p>
      <div className="flex gap-3 justify-center mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Discover Users &rarr;
        </button>
        <button className="flex items-center gap-2 border px-4 py-2 rounded">
          <RefreshCw size={16} /> Refresh
        </button>
      </div>
    </motion.div>
  );
};

export default NoFeed;
