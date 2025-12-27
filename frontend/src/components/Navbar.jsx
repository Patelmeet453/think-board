import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0b0f0c] border-b border-green-900/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-xl font-semibold text-green-400 tracking-wide">
          ThinkBoard
        </h1>

        {/* Action Button */}
        <Link to="/create">
          <button
            className="
            flex items-center gap-2
            bg-green-500 text-black
            px-4 py-2 rounded-full
            text-sm font-medium
            hover:bg-green-400
            transition-all duration-300
            shadow-[0_0_12px_rgba(34,197,94,0.6)]
          "
          >
            <span className="text-lg leading-none">+</span>
            New Note
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
