const backdrop = {
  hidden: {
    y: '-200px',
    opacity: 0,
  },
  visible: {
    y: '0px',
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.7,
    },
  },
  exit: {
    y: '0px',
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default backdrop;
