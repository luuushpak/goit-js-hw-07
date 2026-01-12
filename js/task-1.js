const allItemsArray = document.querySelectorAll("#categories > li");
console.log("Nubmer of categories: " + allItemsArray.length);

allItemsArray.forEach((elem) => {
  const categoryTitle = elem.querySelector("h2");
  const categoryListItemsCount = elem.querySelectorAll("ul > li").length;
  console.log("Category: " + categoryTitle.textContent);
  console.log("Elements: " + categoryListItemsCount);
});
