import React from "react";
import { Link } from "react-router";
import { Pencil, Trash2 } from "lucide-react";
import { formatDate } from "../lib/utils";
import api from "./../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const { title, _id, content, createdAt } = note;

  const handleDelete = async (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note Deleted Successfullty");
    } catch (error) {
      console.log("Faild to delete note", error);
      toast.error("Faild to delete note");
    }
  };

  return (
    <Link to={`/note/${_id}`} className="block">
      <div
        className="
          relative
          bg-[#0f0f0f]
          rounded-xl
          p-5
          border border-green-900/40
          shadow-[0_0_20px_rgba(34,197,94,0.15)]
          transition-all duration-300
          hover:shadow-[0_0_30px_rgba(34,197,94,0.35)]
        "
      >
        {/* Top green glow line */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-green-500 rounded-t-xl shadow-[0_0_10px_rgba(34,197,94,0.8)]" />

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-100">{title}</h3>

        {/* Content */}
        <p className="text-sm text-gray-400 mt-2 line-clamp-2">{content}</p>
        {/* Footer */}
        <div className="flex items-center justify-between mt-4"></div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 gap-3">
          <span className="text-xs text-gray-500">
            {formatDate(new Date(createdAt))}
          </span>
          <div className="space-x-2">
            {/* Edit */}
            <button
              onClick={(e) => navigate(`/note/${_id}`)}
              className="text-gray-400 hover:text-green-400 transition p-2 cursor-pointer"
            >
              <Pencil size={16} />
            </button>

            {/* Delete */}
            <button
              onClick={(e) => handleDelete(e, _id)}
              className="text-gray-400 hover:text-red-500 transition p-2 cursor-pointer"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
