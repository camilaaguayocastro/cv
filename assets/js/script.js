$(document).ready(function(){

    $('a').click(function(){
        var hashtag = this.hash

        $('html, body').animate(
            {
                scrollTop: $(hashtag).offset().top - 70
            },
            800
        )
    });

    $('#myModal').modal('show');
})

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})