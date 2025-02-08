import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/useBooksContext";

export default function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleEditClick = () => {
    setShowEdit((prevShowEdit) => !prevShowEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}300/200`} />
      {showEdit ? (
        <BookEdit book={book} onSubmit={handleSubmit} />
      ) : (
        <h3>{book.title}</h3>
      )}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
