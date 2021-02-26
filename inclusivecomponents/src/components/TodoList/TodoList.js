import React from "react";
import "./TodoList.css";

const TodoList = () => {
  return (
    <>
      <div role="status" aria-live="polite"></div>
      <section aria-labelledby="todos-label">
        <h1 id="todos-label">My Todo List</h1>
        <div class="empty-state">
          <p>
            Either you've done everything already or there are still things to
            add to your list. Add your first todo &#x2193;
          </p>
        </div>
        <ul></ul>
        <form>
          <input
            type="text"
            aria-invalid="true"
            aria-label="Write a new todo item"
            placeholder="E.g. Adopt an owl"
          />
          <button type="submit">Add</button>
        </form>
      </section>
    </>
  );
};

export default TodoList;
