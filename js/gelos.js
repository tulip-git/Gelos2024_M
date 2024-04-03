  

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  function responsiveNav() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  }
  function overSquarFunc(divId) {
      var element = document.getElementById(divId);
      element.style.display = 'none';
      var newId = divId.concat('Over')
      var newElement = document.getElementById(newId);
      newElement.style.display = 'grid'
      newElement.classList.add("show");
  }
  function overSquarFuncDefault(divId) {
      var element = document.getElementById(divId);
      element.style.display = 'none';
      var newId = divId.slice(0, -4)
      var newElement = document.getElementById(newId);
      newElement.style.display = 'grid'
      newElement.classList.add("show");
  }