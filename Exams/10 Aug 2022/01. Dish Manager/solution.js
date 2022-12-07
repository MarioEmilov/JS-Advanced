function solve() {
  const firstNameInputEl = document.getElementById("first-name");
  const lastNameInputEl = document.getElementById("last-name");
  const genderInputEl = document.querySelector(".gender-radio");
  const ageInputEl = document.getElementById("age");
  const descriptionInputEl = document.getElementById("task");
  const inProgressUlEl = document.getElementById("in-progress");
  const finishedUlEl = document.getElementById("finished");
  const counter = document.getElementById("progress-count");
  document.getElementById("clear-btn").addEventListener("click", clearPosts);
  const submitButtonEl = document
    .getElementById("form-btn")
    .addEventListener("click", (ev) => {
      if (
        firstNameInputEl.value !== "" &&
        lastNameInputEl.value !== "" &&
        genderInputEl.value !== "" &&
        ageInputEl.value !== "" &&
        descriptionInputEl.value !== ""
      ) {
        createDish(
          ev,
          firstNameInputEl.value,
          lastNameInputEl.value,
          genderInputEl.value,
          descriptionInputEl.value,
          ageInputEl.value
        );
        clearInputFileds();
      }
    });

  function createDish(
    ev,
    firstNameInputEl,
    lastNameInputEl,
    genderInputEl,
    descriptionInputEl,
    ageInputEl
  ) {
    ev.preventDefault();

    const li = elGenerator("li");
    li.setAttribute("class", "each-line");
    let article = elGenerator("article", "", li);
    elGenerator("h4", `${firstNameInputEl} ${lastNameInputEl}`, article);
    elGenerator("p", `${genderInputEl}, ${ageInputEl}`, article);
    elGenerator("p", `Dish description: ${descriptionInputEl}`, article);

    const editBtn = elGenerator("button", "Edit", li);
    editBtn.setAttribute("class", "edit-btn");
    const completeBtn = elGenerator("button", "Mark as complete", li)
    completeBtn.setAttribute("class", "complete-btn");

    inProgressUlEl.appendChild(li);

    completeBtn.addEventListener("click", (ev) => completePost(ev, article));
    editBtn.addEventListener("click", (ev) =>
      edit(
        ev,
        firstNameInputEl,
        lastNameInputEl,
        ageInputEl,
        genderInputEl,
        descriptionInputEl
      )
    );

    if (counter.textContent == 0) {
      counter.textContent = "";
      counter.textContent = Number(counter.textContent) + 1;
    } else {
      counter.textContent = Number(counter.textContent) + 1;
    }
  }

  function edit(
    ev,
    _firstNameInputEl,
    _lastNameInputEl,
    _ageInputEl,
    _genderInputEl,
    _descriptionInputEl
  ) {
    ev.target.parentNode.remove();

    firstNameInputEl.value = _firstNameInputEl;
    lastNameInputEl.value = _lastNameInputEl;
    ageInputEl.value = _ageInputEl;
    genderInputEl.value = _genderInputEl;
    descriptionInputEl.value = _descriptionInputEl;

    counter.textContent = Number(counter.textContent - 1);
  }

  function completePost(ev, articleEl) {
    ev.target.parentNode.remove();

    const completedUlEl = document.createElement("li");
    completedUlEl.className = "each-line";
    completedUlEl.appendChild(articleEl);
    finishedUlEl.appendChild(completedUlEl);
    counter.textContent = Number(counter.textContent - 1);
  }

  function clearPosts() {
    let finishedDishes = Array.from(finishedUlEl.children);
    finishedDishes.forEach((post) => {
      post.remove();
    });
  }

  function clearInputFileds() {
    firstNameInputEl.value = "";
    lastNameInputEl.value = "";
    ageInputEl.value = "";
    descriptionInputEl.value = "";
  }

  function elGenerator(type, content, parent) {
    const element = document.createElement(type);
    element.textContent = content;

    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
}