let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

// modal open function
function openModal() {
  console.log("modal is open");
  modal.classList.add("active");
  overlay.classList.add("overlayActive");
}

// modal close function
function closeModal() {
  console.log("modal is close");
  modal.classList.remove("active");
  overlay.classList.remove("overlayActive");
}

// follow open function
let follow = document.querySelector(".follow");
let overlayFollow = document.querySelector(".overlayFollow");
function openFollow() {
  console.log("follow is open");
  follow.classList.add("open");
  overlayFollow.classList.add("overlayFollowActive");
}

function closeFollow() {
  console.log("follow is closed");
  follow.classList.remove("open");
  overlayFollow.classList.remove("overlayFollowActive");
}
