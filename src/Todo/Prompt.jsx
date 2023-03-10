import { useEffect, useState } from "react";

const Prompt = ({ show, setShow, reference, addItem }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ title, done: false });
    setTitle("");
    setShow(false);
  };

  useEffect(() => {
    if (show) reference.current.children[0].children[0].focus();
  }, [show]);
  return (
    <div className={`dialog ${show ? "show" : null}`} ref={reference}>
      <div className="textarea-wrapper">
        <textarea
          autoFocus
          rows="1"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></textarea>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button style={{}} onClick={() => setShow((prev) => !prev)}>
          Cancel
        </button>
        <button disabled={!(title.length >= 3)} onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Prompt;
