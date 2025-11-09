import type { Todo } from "../App.tsx";

export default function TodoItem({
  todo,
  onToggle,
  onRemove,
}: {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}) {
  return (
    <li className="todo-item">
      <label className="todo-left">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.done ? "todo-text done" : "todo-text"}>
          {todo.text}
        </span>
      </label>

      <button
        className="del-btn"
        aria-label={`${todo.text} 삭제`}
        onClick={() => onRemove(todo.id)}
        title="삭제"
      >
        ✕
      </button>
    </li>
  );
}
