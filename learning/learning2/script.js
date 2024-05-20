function showContent(contentId, element) {
  // Hide all content items
  var contentItems = document.querySelectorAll(".content-item");
  contentItems.forEach(function (item) {
    item.classList.remove("show");
  });

  // Remove active class from all links
  var navLinks = document.querySelectorAll(".sidenav a");
  navLinks.forEach(function (link) {
    link.classList.remove("active");
  });

  // Show the selected content item
  var selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.classList.add("show");
  }

  // Add active class to the clicked link
  if (element) {
    element.classList.add("active");
  }
}

// Show the home content by default
document.addEventListener("DOMContentLoaded", function () {
  showContent("home", document.querySelector(".sidenav a"));
});
