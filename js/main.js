'use strict'

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
    renderModal(gProjects);
  };
  
  
  // rendering portfolio grid
  function renderPortfolioGrid(arr) {
    var elGridItems = document.querySelector("#gridItems");
    for (var i = 0; i < arr.length; i++) {
      var gridStr = '';
      gridStr = '<div class="col-md-4 col-sm-6 portfolio-item">' +
        '<a class="portfolio-link" data-toggle="modal" href="#portfolioModal' + i + '">' +
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

  // rendering modals

function renderModal(arr) {
    var elModalContainer = document.querySelector('#modal-container');
    for (var i = 0; i < arr.length; i++) {
        var modalStr = '';
        modalStr = '\
            <div class="portfolio-modal modal fade" id="portfolioModal' + i + '" tabindex="-1" role="dialog" aria-hidden="true">\
                <div class="modal-dialog">\
                <div class="modal-content">\
                    <div class="close-modal" data-dismiss="modal">\
                    <div class="lr">\
                        <div class="rl"></div>\
                    </div>\
                    </div>\
                    <div class="container">\
                    <div class="row">\
                        <div class="col-lg-8 mx-auto">\
                        <div class="modal-body">\
                            <h2>'+ gProjects[i].name +'</h2> \
                            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>\
                            <img class="img-fluid d-block mx-auto" src="img/portfolio/'+ gProjects[i].id + '-large.png" alt="">\
                            <p>'+ gProjects[i].desc +'</p>\
                            <ul class="list-inline">\
                            <li>'+ gProjects[i].publishedAt +'</li>\
                            <li>Client: Threads</li>\
                            <li>Category: Illustration</li>\
                            </ul>\
                            <button class="btn btn-primary" data-dismiss="modal" type="button">\
                                <i class="fa fa-times"></i>\
                                Close Project</button>\
                        </div>\
                        </div>\
                    </div>\
                    </div>\
                </div>\
                </div>\
            </div>/' 
        elModalContainer.innerHTML += modalStr; 
    }
}

// contact me

function contactMe() {
    var strSubj = document.querySelector('#subject').value;
    var strMsg = document.querySelector('#comment').value;
    window.location.href='https://mail.google.com/mail/?view=cm&fs=1&to=eyal@bookmap.com&su='+strSubj;
}