const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// ///////////////////////////////////////////////////////////////

const observerY = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showY')
    } else {
      entry.target.classList.remove('showY')
    }
  })
})

const hiddenElementsY = document.querySelectorAll('.hiddenY');
hiddenElementsY.forEach((el) => observerY.observe(el));
