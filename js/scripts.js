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
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
