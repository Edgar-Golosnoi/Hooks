import { useEffect, useRef } from 'react'; // 3

// референс родителя ребенка колбек
export default function useScroll(parentRef, childRef, callback) {
  const observer = useRef();

  useEffect(() => {
    const options = {
      root: parentRef.current, // отслеживаемый родительский элемент
      rootMargin: '0px', // насколько мы должны пересечь элемент
      threshold: 0, // сщщбщает о том насколько мы должны пересечь элемент
    };
    // отслуживает пойвление элемента в зоне видимости браузера
    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) { // вытаскиваем интересующий нас эдемент
        console.log('intersected');
        callback();
      }
    }, options);
    // передаемдочерний элемент за которым мы хотим следить:
    observer.current.observe(childRef.current);
    return function () { //  компонентдемонтируется,отписываемся от слежки за элементом
      observer.current.unobserve(childRef.current);
    };
  }, [callback]);
}
