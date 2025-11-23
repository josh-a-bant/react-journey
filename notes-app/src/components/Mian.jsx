import { useState } from "react";

const Mian = () => {
  const [title, setTitle] = useState("");
  const [noteDetails, setNoteDetails] = useState("");

  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const copyNotes = [...notes];

    copyNotes.push({ title, noteDetails });
    setNotes(copyNotes);

    setTitle("");
    setNoteDetails("");

    console.log(notes);
  };

  return (
    <div className=" text-white bg-black lg:flex p-6 lg:h-screen ">
      <div className="w-1/2 p-4">
        <h1 className="text-4xl text-blue-400 mb-9">Add Notes</h1>
        <form
          className="flex flex-col gap-5 w-md"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            className="border p-3 text-2xl rounded-xl"
            placeholder="add title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            placeholder="add notes"
            className="border p-2 text-2xl h-25 rounded-xl"
            onChange={(e) => setNoteDetails(e.target.value)}
            value={noteDetails}
          />
          <button
            type="submit"
            className="text-2xl max-w-[150px] rounded-xl bg-blue-400 text-black py-1.5 cursor-pointer active:bg-blue-300 active:scale-95"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-1/2 p-4 overflow-auto">
        <h1 className="text-4xl text-blue-400 mb-9">Your Notes</h1>

        {notes.length ? (
          <div className="flex flex-wrap items-start gap-5 h-[90%]">
            {notes.map((note, idx) => (
              <div
                className="w-60 border text-white rounded-2xl p-3 shadow-md shadow-blue-300 flex flex-col gap-1.5"
                key={idx}
              >
                <h2 className="text-xl text-neutral-50">{note.title}</h2>
                <p className="text-base text-neutral-400 tracking-tight">
                  {note.noteDetails}
                </p>
                <button className="border px-2.5 py-1 rounded-lg bg-blue-400 text-lg text-black cursor-pointer active:scale-95 active:bg-blue-300">
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-xl text-blue-200">Add notes</h1>
        )}
      </div>
    </div>
  );
};

export default Mian;
