// Add any JavaScript code for interactivity
document.addEventListener("DOMContentLoaded", function() {
  const publicationsSection = document.getElementById("publications");
  const publicationListItems = publicationsSection.querySelectorAll("li");

  publicationListItems.forEach((li) => {
    li.innerHTML = li.innerHTML.replace(/Rosales, O./g, '<strong>Rosales, O.</strong>');
  });
});
