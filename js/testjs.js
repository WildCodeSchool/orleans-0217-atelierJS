
$('#go').click(function (e) {
    var value = $('#todo').val();

    var newDeleteLink = $('<a>', {
        href: '#',
        class: 'pull-right',
    }).append('<span class="glyphicon glyphicon-trash"></span>').on('click', handlerDel);

    var newMoveUpLink = $('<a>', {
        href: '#',
        class: 'up',
    }).append('<span class="glyphicon glyphicon-chevron-up"></span>').on('click', handlerMoveUp);

    var newMoveDownLink = $('<a>', {
        href: '#',
        class: 'down',
    }).append('<span class="glyphicon glyphicon-chevron-down"></span>').on('click', handlerMoveDown);

    var newList = $('<li>');
    newList.append(value + ' ');
    newList.append(newMoveUpLink);
    newList.append(newMoveDownLink);
    newList.append(newDeleteLink);
    $('#list').append(newList);
    hideArrow();
});

function hideArrow() {
    $('#list li a.up').show();
    $('#list li a.down').show();
    $('#list li:first-child a.up').hide();
    $('#list li:last-child a.down').hide();
}

function handlerDel() {
    $(this).parent().remove();
    hideArrow();
}

function handlerMoveUp() {
    $(this).parent().insertBefore($(this).parent().prev('li'));
    hideArrow();
}
function handlerMoveDown() {
    $(this).parent().insertAfter($(this).parent().next('li'));
    hideArrow();
}
