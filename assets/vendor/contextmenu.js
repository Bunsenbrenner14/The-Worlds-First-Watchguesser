var contextMenu = document.getElementById('context-menu');

  // Preventing the default context menu
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    var menuWidth = contextMenu.offsetWidth;
    var menuHeight = contextMenu.offsetHeight;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var mouseX = e.pageX;
    var mouseY = e.pageY;

    var menuX = mouseX;
    var menuY = mouseY;

     //Check if there's enough space on the right
    if (mouseX + menuWidth > windowWidth) {
      menuX = mouseX - menuWidth;
    }
/*
    // Check if there's not enough space at the bottom
    if (mouseY + menuHeight > windowHeight) {
      menuY = windowHeight - menuHeight;
    }
*/
    contextMenu.style.display = 'block';
    contextMenu.style.left = menuX + 'px';
    contextMenu.style.top = menuY + 'px';
    
    // Check if the user hovered over a link
    var hoveredElement = document.elementFromPoint(mouseX, mouseY);
    if (hoveredElement.tagName === 'A') {
      var openLinkButton = document.getElementById('open-link');
      openLinkButton.style.display = 'block';
        document.getElementById('cm-line').style.display = 'block';
      openLinkButton.addEventListener('click', function() {
        window.open(hoveredElement.href, '_blank');
      });
    } else {
      document.getElementById('open-link').style.display = 'none';
      document.getElementById('cm-line').style.display = 'none';
    }
  });

  // Hiding the custom context menu when the mouse leaves the menu area
  contextMenu.addEventListener('mouseleave', function(e) {
    var bounds = contextMenu.getBoundingClientRect();
    if (e.pageX < bounds.left || e.pageX > bounds.right ||
        e.pageY < bounds.top || e.pageY > bounds.bottom) {
      contextMenu.style.display = 'none';
    }
  });

  
  //click event listener

  document.getElementById('home').addEventListener('click', function() {
    window.location.href = 'https://scrimfinder.de';
  });
  document.getElementById('twitter').addEventListener('click', function() {
    window.location.href = 'https://twitter.com/scrimfinderDE';
  });
  document.getElementById('invite').addEventListener('click', function() {
    window.location.href = 'https://docs.scrimfinder.de/invite';
  });