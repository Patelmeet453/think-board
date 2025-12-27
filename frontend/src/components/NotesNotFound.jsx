import React from "react";
import { FileText, PlusCircle } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Icon */}
      <div className="w-20 h-20 flex items-center justify-center rounded-full border border-green-900/50 bg-green-900/10 shadow-[0_0_30px_rgba(34,197,94,0.25)]">
        <FileText className="text-green-400" size={36} />
      </div>

      {/* Text */}
      <h2 className="mt-6 text-xl font-semibold text-gray-100">
        No Notes Found
      </h2>
      <p className="mt-2 text-sm text-gray-400 max-w-md">
        You haven’t created any notes yet. Start writing your thoughts and keep
        everything organized in one place.
      </p>

      {/* Action */}
      <Link
        to="/create"
        className="
          mt-6 inline-flex items-center gap-2
          px-5 py-2.5 rounded-lg
          bg-green-600 hover:bg-green-500
          text-black font-medium
          transition shadow-[0_0_20px_rgba(34,197,94,0.35)]
        "
      >
        <PlusCircle size={18} />
        Create Note
      </Link>
    </div>
  );
};

export default NotesNotFound;
