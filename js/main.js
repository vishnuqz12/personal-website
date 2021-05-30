// jshint esversion:6
// ---------about section------------
( () => {
  const aboutSection = document.querySelector(".about-section"),
  tabsContainer=document.querySelector(".about-tabs");

  tabsContainer.addEventListener("click", (event) =>   {

/***if event.target contains 'tab-items' class and contain 'active' class****/
if(event.target.classList.contains("tab-item") &&
!event.target.classList.contains("active")){
   const target=event.target.getAttribute("data-target");
   // deactivate existing active 'tab item'
   tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
   // activate new tab-items
   event.target.classList.add("active","outer-shadow");

   // deactivate active 'tab-content'
aboutSection.querySelector(".tab-content.active").classList.remove("active");
// activate new tab-content
aboutSection.querySelector(target).classList.add("active");


}
});

})();
