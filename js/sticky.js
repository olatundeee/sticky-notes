$(document).ready(function() {

    $(".brand-logo").click(function() {
        var newCol = '<div class="col l4 m6 s12"><a href="#"><h2 class="note-header" contenteditable="true">Title</h2><p class="note-content" contenteditable="true">Description</p></a></div>';

        $(".row").append(newCol);
    });
});