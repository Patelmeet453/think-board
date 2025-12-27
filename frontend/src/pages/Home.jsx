import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimit from "./../components/RateLimit";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import api from "../lib/axios";
import NotesNotFound from "../components/NotesNotFound";

const Home = () => {
  const [israteLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchnote = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Note Fetching Error", error);
        if (error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Note Fetching Error");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchnote();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black">
        <Navbar />
        <div>{israteLimited && <RateLimit />}</div>
        <div className="max-w-7xl mx-auto p-4 mt-6">
          {loading && (
            <div className="text-green-700 py-10 text-xl text-center">
              Loading Notes...
            </div>
          )}

          {notes.length === 0 && !israteLimited && <NotesNotFound />}

          {notes.length > 0 && !israteLimited && (
            <div className="grid grid-col-12 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map((note) => (
                <NoteCard key={note._id} note={note} setNotes={setNotes} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
