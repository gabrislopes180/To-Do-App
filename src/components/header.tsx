import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-[90%] py-3"
    >
      <div className="flex w-full justify-between text-white backdrop-blur-md !bg-gray-900 rounded-lg p-4">
        <h1 className="font-bold text-lg mt-1">ToDo App</h1>
        <div className="flex gap-4">
          <Link to="/" className="!text-blue-500 underline">
            <button className="border !text-green-300 !border-green-300 rounded-lg w-[90px] h-[35px] ">
              Username
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
