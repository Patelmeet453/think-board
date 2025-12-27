import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;

// app.get("/api/note", (req, res) => {
//   res.status(200).send("You get 10 notess");
// });

// app.post("/api/note", (req, res) => {
//   res.status(201).json({ message: "Note Created Successfully" });
// });

// app.put("/api/note/:id", (req, res) => {
//   res.status(200).json({ message: "Note Updated Successfully" });
// });

// app.delete("/api/note/:id", (req, res) => {
//   res.status(200).json({ message: "Note Deleted Successfully" });
// });
