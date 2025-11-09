import { useState, type FormEvent, type ChangeEvent } from "react";

export default function TodoInsert({
  onAdd,
}: {
  onAdd: (text: string) => void;
}) {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지
    const text = value.trim();
    if (!text) return;
    onAdd(text);        // 상위(App) 상태 변경
    setValue("");       // 입력창 초기화
  };

  return (
    <form className="todo-form" autoComplete="off" onSubmit={onSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="할 일을 입력하고 Enter"
        required
        value={value}
        onChange={onChange}
      />
      <button className="add-btn" type="submit">
        추가
      </button>
    </form>
  );
}
