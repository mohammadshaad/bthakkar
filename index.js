var $owl = $('.owl-carousel');

$owl.children().each(function (index) {
    $(this).attr('data-position', index); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
    center: true,
    loop: true,
    items: 5,
});

$(document).on('click', '.owl-item>div', function () {
    // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
    var $speed = 300;  // in ms
    $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
});


// Get the modal by id
var modal = document.getElementById("modal");

// Get the modal image tag
var modalImg = document.getElementById("modal-img");

// this function is called when a small image is clicked
function showModal(src) {
    modal.classList.remove('hidden');
    modalImg.src = src;
}

// this function is called when the close button is clicked
function closeModal() {
    modal.classList.add('hidden');
}
