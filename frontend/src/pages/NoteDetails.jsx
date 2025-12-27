import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeft, LoaderIcon, Save, Trash2 } from "lucide-react";

const NoteDetails = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchnote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching error", error);
        toast.error("Failed to fetch Error");
      } finally {
        setLoading(false);
      }
    };
    fetchnote();
  }, [id]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are yo sure?, yoiu want delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note Deleted Successfully");
      navigate("/");
    } catch {
      console.log("Error in Note Deleting", error);
      toast.error("Failed to Delete Note");
    }
  };

  const handleSave = async (id) => {
    if (!note.title?.trim() || !note.content?.trim()) {
      toast.error("All Field Required");
      return;
    }

    setSaving(true);
    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note Updated Successfully");
      navigate("/");
    } catch (error) {
      console.log("Error in Note Updating", error);
      toast.error("Faild to Update note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex justify-center items-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-200 px-6 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 max-w-3xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <button
          onClick={() => handleDelete(note._id)}
          className="flex items-center gap-2 text-red-400 hover:text-red-500 transition"
        >
          <Trash2 size={18} />
          Delete
        </button>
      </div>

      {/* Card */}
      <div
        className="
          max-w-3xl mx-auto
          bg-[#0f0f0f]
          border border-green-900/40
          rounded-2xl
          p-8
          shadow-[0_0_25px_rgba(34,197,94,0.15)]
        "
      >
        {/* Title */}
        <input
          type="text"
          placeholder="Note title"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
          className="
            w-full mb-6
            bg-black border border-gray-700
            rounded-full px-5 py-3
            text-gray-200 outline-none
            focus:border-green-500 focus:ring-1 focus:ring-green-500
          "
        />

        {/* Content */}
        <textarea
          rows="8"
          placeholder="Note content"
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
          className="
            w-full bg-black
            border border-gray-700
            rounded-2xl px-5 py-4
            text-gray-200 outline-none resize-none
            focus:border-green-500 focus:ring-1 focus:ring-green-500
          "
        />

        {/* Save */}
        <div className="flex justify-end mt-6">
          <button
            onClick={() => handleSave(note._id)}
            disabled={saving}
            className="
              flex items-center gap-2
              bg-green-500 text-black
              px-6 py-3 rounded-full
              font-medium transition
              hover:bg-green-400
              shadow-[0_0_15px_rgba(34,197,94,0.6)]
              disabled:opacity-60
            "
          >
            {saving ? (
              <LoaderIcon className="animate-spin size-5" />
            ) : (
              <Save size={18} />
            )}
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteDetails;
