const addColorPreta = () => {
  const labels = document.querySelectorAll("label");

  labels.forEach((i) => {
    i.classList.add("fs-color-black");
  });
};

addColorPreta();
