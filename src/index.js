import "./styles/main.css";


const main = () => {
  const hamburgerButton = document.getElementById("hamburger-button");
  const hamburgerButtonIcon = document.getElementById("hamburger-button-icon");
  const mobileNavList = document.getElementById("mobile-nav-list");
  const navItem = document.querySelectorAll("#mobile-nav-item");

  if (hamburgerButton) {
    hamburgerButton.addEventListener("click", () => {
      mobileNavList.classList.toggle("invisible");

      if (!mobileNavList.classList.contains("invisible")) {
        hamburgerButtonIcon.innerHTML = `
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />`;
      } else {
        hamburgerButtonIcon.innerHTML = `
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />`;
      }
    });
  }

  if (navItem) {
    navItem.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.stopPropagation();
        hamburgerButtonIcon.innerHTML = `
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />`;
        mobileNavList.classList.add("invisible");
      });
    });
  }

  console.log(hamburgerButton);
  console.log(mobileNavList);
};

window.addEventListener("DOMContentLoaded", main);
