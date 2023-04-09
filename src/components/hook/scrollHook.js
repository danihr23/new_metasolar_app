export const scroll = (ref) => {
  if (ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  }
};

export const scrollByPosition = (top) => {
  window.scrollTo({
    left: 0,
    top: top,
    behavior: "smooth",
  });
};

export const scrollToFaq = () => {
  setTimeout(() => {
    const element = document.querySelector("#my-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};

export const scrollToRoadmap = () => {
  setTimeout(() => {
    const element = document.querySelector("#roadmap-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};
