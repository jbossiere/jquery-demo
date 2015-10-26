/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */

$('button').click(function(){
    var button = $(this).attr('id');
    var selector = $('#selector').val();
    var newContent = $('#newContent').val();

    if (button == "change-content") {
        $(selector).html(newContent);

    } else if (button == "add-at-end") {
        $(selector).append('<div>' + newContent + '</div>');

    } else if (button == "add-at-start") {
        $(selector).prepend('<div>' + newContent + "</div>");

    } else if (button == "insert-before") {
        $("<div>" + newContent + "</div>").insertBefore(selector)

    } else if (button == "move-after") {


    } else if (button == "surround-class") {


    } else if (button == "hide-text") {


    } else if (button == "remove-word") {
        $(selector).replace(newContent, "")

    } 
})

