import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import NoteDetails from "./pages/NoteDetails";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#0f0f0f",
            color: "#e5e7eb",
            border: "1px solid #22c55e",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/note/:id" element={<NoteDetails />} />
      </Routes>
    </>
  );
}

export default App;
