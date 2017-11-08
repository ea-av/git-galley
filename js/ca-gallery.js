//Data structure for projects
var gProjects = [
  {
    id: 'minesweeper', name: 'Minesweeper', title: "Don't get blown up!", desc: 'Clear the board without setpping on any mine',
    publishedAt: 0, lables: ['matrixes', 'keyboard events', 'HTML DOM']
  },
  {
    id: 'sokoban', name: 'Sokoban', title: 'Push them blocks!', desc: 'Can you push all the boxed to their place?',
    publishedAt: 0, lables: ['matrixes', 'keyboard events', 'HTML DOM']
  },
  {
    id: 'pushNums', name: 'Just push it', title: 'How fast are you?', desc: 'Click the numbers in the right order as fast as you can',
    publishedAt: 0, lables: ['matrixes', 'keyboard events', 'HTML DOM']
  },
  {
    id: 'calc', name: 'Calculator', title: "Don't pick your brain", desc: 'Good old calculator to help you get the tip right',
    publishedAt: 0, lables: ['matrixes', 'keyboard events', 'HTML DOM']
  },
   {
    id: 'balloons', name: 'Balloon Pop', title: "Pop'em as they go", desc: 'Release some of that stress or use this as an anger management tool',
    publishedAt: 0, lables: ['matrixes', 'keyboard events', 'HTML DOM']
  },
   {
    id: 'guess', name: 'Guess', title: "Gotta hunch?", desc: 'Geller nailed it perfectly last week',
    publishedAt: 0, lables: ['matrixes', 'keyboard events', 'HTML DOM']
  }
];

function initPage() {
  renderPortfolioGrid(gProjects);
};


// rendering portfolio modal
function renderPortfolioGrid(arr) {
  var elGridItems = document.querySelector("#gridItems");
  for (var i = 0; i < arr.length; i++) {
    var gridStr = '';
    gridStr = '<div class="col-md-4 col-sm-6 portfolio-item">' +
      '<a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">' +
      '<div class="portfolio-hover">' +
      '<div class="portfolio-hover-content">' +
      ' <i class="fa fa-plus fa-3x"></i></div></div>' +
      '<img class="img-fluid" src="img/portfolio/' + gProjects[i].id +'-thumbnail.png" alt=""></a>' +
    '<div class="portfolio-caption">' +
      '<h4>' + gProjects[i].name + '</h4>' +
      '<p class="text-muted">' + gProjects[i].title + '</p></div></div>';
    elGridItems.innerHTML += gridStr;
  }
}

(function ($) {
  "use strict"; // Start of use strict




  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict
