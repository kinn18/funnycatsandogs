for(const element of document.querySelectorAll(".other_pet")) {
  element.addEventListener("click", event => {
    if(event.target.classList.contains("other_pet")) {
      for(const query of document.querySelectorAll(".other_pet")) {
        query.classList.remove("active");
      }
      event.target.classList.add("active");
    }
  })
}