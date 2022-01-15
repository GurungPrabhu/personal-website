function toggleSideNavMenu() {
  let sideNav = document
    .getElementById("top-nav")
    .getElementsByClassName("top-nav-menu")[0];

  const topNavHidden = "top-nav-menu--hidden";

  if (sideNav.classList.contains(topNavHidden))
    sideNav.classList.remove(topNavHidden);
  else sideNav.classList.add(topNavHidden);
}

// window.addEventListener("scroll", () => {
//   let header = document.getElementsByTagName("header")[0];
//   const opacity = parseFloat(window.scrollY / 120).toFixed(2);
//   header.style.background = `rgba(0, 0, 0, ${opacity})`;
// });
