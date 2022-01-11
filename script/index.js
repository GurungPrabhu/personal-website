function toggleSideNavMenu() {
  let sideNav = document
    .getElementById("top-nav")
    .getElementsByClassName("top-nav-menu")[0];

  const topNavHidden = "top-nav-menu--hidden";

  if (sideNav.classList.contains(topNavHidden))
    sideNav.classList.remove(topNavHidden);
  else sideNav.classList.add(topNavHidden);
}
