import { useRef } from 'react';

export default function EventBasic({ type = 'text' }) {
  const inputRef = useRef(null);

  const handleFocusClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // ← current は ref名を付けて参照
    }
  };

  const handleChange = (e) => {
    console.log('value:', e.target.value);
  };

  return (
    <div style={{ padding: 16 }}>
      <label htmlFor="myInput">入力：</label>
      <input
        id="myInput"
        type={type}
        ref={inputRef}
        onChange={handleChange}
      />
      <button onClick={handleFocusClick}>フォーカス</button>
    </div>
  );
}
