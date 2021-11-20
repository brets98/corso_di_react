import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState("");
  const [submitBotton, setsubmitBotton] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Add text");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
    setsubmitBotton(false);
    return;
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            e.target.value ? setsubmitBotton(true) : setsubmitBotton(false);
          }}
        ></input>
      </div>
      <div className="form-control">
        <label>Day & time</label>
        <input
          type="date"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          checked={reminder}
        ></input>
      </div>
      <div>
        <input
          className="btn btn-block"
          type="submit"
          value="Add"
          style={{ backgroundColor: submitBotton ? "green" : "black" }}
          disabled={!submitBotton}
        />
      </div>
    </form>
  );
};

export default AddTask;
