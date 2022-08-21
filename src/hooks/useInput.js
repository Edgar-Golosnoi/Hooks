import { useState } from 'react';

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue); // управляемый импут

  const onChange = (e) => {
    setValue(e.target.value); // изменяем состояние когда пользователь что-то вводит
  };

  return {
    value, onChange,
  };
}
