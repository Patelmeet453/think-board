import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const saveNote = await note.save();
    res.status(201).json({ message: "Note Created Suceesfully", saveNote });
  } catch (error) {
    console.error("Error in createNote Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true }
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note Not Found" });
    res.status(200).json({ message: "Note Updated Suceesfully", updatedNote });
  } catch (error) {
    console.error("Error in updateNote Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { title, content } = req.body || {};
    const deletedNote = await Note.findByIdAndDelete(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!deletedNote)
      return res.status(404).json({ message: "Note Not Found" });
    res.status(200).json({ message: "Note Deleted Suceesfully", deletedNote });
  } catch (error) {
    console.error("Error in deleteNote Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getNoteById Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
