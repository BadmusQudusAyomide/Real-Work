function showContent(contentId) {
  // Hide all content items
  var contentItems = document.querySelectorAll(".content-item");
  contentItems.forEach(function (item) {
    item.style.display = "none";
  });

  // Show the selected content item
  var selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.style.display = "block";
  }
}
