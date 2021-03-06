function createCategoryIcon(categoryID) {
  var categories = ['Cat 1', 'Cat2', 'Cat3', 'Cat4', 'Cat5'];
  return categories[categoryID];
};

function createIndexCard(resource) {
  var title = resource.title;
  var description = resource.description;
  var location = resource.location;
  var imageURL = 'http://bulma.io/images/placeholders/480x480.png';
  var duration = resource.duration;
  var category = createCategoryIcon(resource.category_id);

  return  `<div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img src="${imageURL}" alt="${title}">
      </figure>
    </div>
    <div class="content-container">
      <span class="icon is-pulled-right">
        <span class="fa fa-star" aria-hidden="true"></span>
      </span>
      <span class="card-toggle">
        <a><span class="icon fa fa-chevron-up chev-rotate-again"></span></a>
      </span>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title">${title}</p>
            <p class="subtitle"><a>${location}</a></p>
            <small>Recommended duration: ~${duration}</small>
          </div>
        </div>
        <span class="card-details">
          <small>
            <span class="icon is-small"><i class="fa fa-tree" aria-hidden="true"></i></span> ${category}<br>
          </small>
          <div class="content">
            <p class="subtitle is-small">${description}</p>
          </div>
        </span>
      </div>
    </div>
  </div>`;
};

function addDescriptionToggle($card) {
  $card.find('.card-toggle').on('click', function() {
    $card.find('.card-details').slideToggle();
    $card.toggleClass('expanded');
    $card.find('.fa-chevron-up').toggleClass('chev-rotate');
    $card.find('.fa-chevron-up').toggleClass('chev-rotate-again');
  });
};

function renderIndexCards(resources) {
  var $resources = $('.all-cards');
  $resources.empty();
  for(var item of resources) {
    var card = createIndexCard(item);
    var $card = $(card);
    $resources.prepend($card);
    addDescriptionToggle($card);
  }
};




