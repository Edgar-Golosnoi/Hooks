import { useEffect, useState } from 'react'; // 2

// ссылка на какой-либо элементб наведение на который мы хотим отследить
export default function useHover(ref) {
  const [isHovering, setHovering] = useState(false);// навели на элемент или убрали мышку

  const on = () => setHovering(true); // на улементе. изменили состояние
  const off = () => setHovering(false); // не на элементею изменили состояние

  useEffect(() => {
    if (!ref.current) { // убеждаемся есть ли состояние current (текущщий)
      return;
    }
    const node = ref.current;

    node.addEventListener('mouseenter', on); // навели мышкой
    node.addEventListener('mousemove', on); // водим по элементу
    node.addEventListener('mouseleave', off); // убрали мышку

    // eslint-disable-next-line consistent-return
    return function () { // компоненты необходимо удалить. демонтируем
      node.removeEventListener('mouseenter', on);
      node.removeEventListener('mousemove', on);
      node.removeEventListener('mouseleave', off);
    };
  }, []);

  return isHovering;
}
