import { useSpring } from 'react-spring';
import useMedia from '../AnimationMediaHelper/useMedia';

const useEnlargeCenterToTopLeft = ref => {
  const phoneScreen = useMedia('(max-width:600px)');
  const tabletScreen = useMedia('(min-width:601px)');
  const computerScreen = useMedia('(min-width:992px)');

  const spring = useSpring({
    config: { mass: 10, tension: 500, friction: 150 },
    from: {
      opacity: 0,
      transform: 'translate3d(0%, 1200%, 0px) scale(1)',
      position: 'absolute',
    },
    to: [
      {
        opacity: 1,
        transform: phoneScreen
          ? 'translate3d(0%, 1200%, 0px) scale(2)'
          : tabletScreen
          ? 'translate3d(0%, 1200%, 0px) scale(3)'
          : 'translate3d(0%, 1200%, 0px) scale(4)',
      },
      {
        opacity: 1,
        transform: phoneScreen
          ? 'translate3d(-300%, 200%, 0px) scale(1)'
          : tabletScreen
          ? 'translate3d(-500%, 300%, 0px) scale(2)'
          : 'translate3d(-700%, 300%, 0px) scale(2.5)',
      },
    ],
    ref: ref,
  });
  return spring;
};

export default useEnlargeCenterToTopLeft;
