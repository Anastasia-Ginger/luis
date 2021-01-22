$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "+Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Hide text";
        moreText.style.display = "inline";
    }
}

(function($) {
    $(function() {

        $('#up').click(function() {
            $('body,html').animate({scrollTop:0},500);
            return false;
        })

    })
})(jQuery)

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        datasets: [{
            label: false,
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(238, 238, 238)',
            data: [40, 83, 57, 73, 54, 94, 54, 84, 40]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    max: 100,
                    min: 40,
                    stepSize: 10,
                    callback: function(value, index, values) {
                        return '%' + value;
                    }
                }
            }]
        },
        legend: {
            display: false
        },
    }
});


$(document).ready(function () {
    $("#menu-yak").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
