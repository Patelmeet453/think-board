import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import api from "../lib/axios";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, content);
    if (!title.trim() || !content.trim()) {
      toast.error("All field are Required");
      return;
    }

    setLoading(true);

    try {
      await api.post("/notes", { title, content });
      toast.success("Note Created Successfully");
      navigate("/");
    } catch (error) {
      console.log("Create Note Error", error);
      toast.error("Failed to Create Note");
      if (error.response.status === 429) {
        toast.error("Too Many Requset, Try some time later");
      } else {
        toast.error("Failed to Create Note");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen bg-black text-gray-200 px-6 py-6"
    >
      {/* Back */}
      <Link
        to="/"
        className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition mb-6"
      >
        <ArrowLeft size={18} />
        Back to Notes
      </Link>

      {/* Card */}
      <div
        className="
          max-w-3xl
          mx-auto
          bg-[#0f0f0f]
          border border-green-900/40
          rounded-2xl
          p-8
          shadow-[0_0_25px_rgba(34,197,94,0.15)]
        "
      >
        <h1 className="text-2xl font-semibold mb-8">Create New Note</h1>

        {/* Title */}
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2">Title</label>
          <input
            type="text"
            placeholder="Note title"
            className="
              w-full
              bg-black
              border border-gray-700
              rounded-full
              px-5 py-3
              text-gray-200
              outline-none
              focus:border-green-500
              focus:ring-1 focus:ring-green-500
            "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Content */}
        <div className="mb-8">
          <label className="block text-sm text-gray-400 mb-2">Content</label>
          <textarea
            rows="6"
            placeholder="Write your note here..."
            className="
              w-full
              bg-black
              border border-gray-700
              rounded-2xl
              px-5 py-4
              text-gray-200
              outline-none
              resize-none
              focus:border-green-500
              focus:ring-1 focus:ring-green-500
            "
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* Action */}
        <div className="flex justify-end">
          <button
            className="
              bg-green-500
              text-black
              px-6 py-3
              rounded-full
              font-medium
              hover:bg-green-400
              transition
              shadow-[0_0_15px_rgba(34,197,94,0.6)]
            "
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Creating" : "Create Note"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateNote;
