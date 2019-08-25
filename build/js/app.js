var elements = $('.modal-overlay, .modal');

$('.add-btn').click(function(){
    elements.addClass('active');
});

$('.close-modal').click(function(){
    elements.removeClass('active');
});

$('.decline-btn').click(function(){
    elements.removeClass('active');
});