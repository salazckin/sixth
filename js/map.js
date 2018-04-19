$(document).ready(function()
{
    $("#feedback").validate(
    {
        submitHandler:function(form)
        {
            $.get("/feedback.php", $(form).serialize(), function()
            {
                $(form).trigger("reset");
                $("#modal").fadeIn(500).delay(1000).fadeOut(500);
            });
        }
    });

	var moscow = new google.maps.LatLng(55.715136,37.517122);
	var icon = new google.maps.MarkerImage('/i/balloon.png',new google.maps.Size(60,71),new google.maps.Point(0,0));
	var map = new google.maps.Map(document.getElementById("map"), {zoom:14, center:moscow, scrollwheel:false, mapTypeId:google.maps.MapTypeId.ROADMAP});
	var styles = [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#333333"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#333333"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#333333"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#333333"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#333333"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#333333"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#333333"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#333333"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#333333"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#333333"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
	];

	map.setOptions({styles:styles, draggable:false});

	var marker = new google.maps.Marker(
	{
		position: moscow,
		map: map,
		icon: icon,
		title: 'Studio DK'
	});

	var infowindow = new google.maps.InfoWindow({content:'<div style="line-height:1.35; overflow:hidden; white-space:nowrap;">Studio DK, Москва, ул. Мосфильмовская, 17Б</div>'});
	google.maps.event.addListener(marker,'click',function(){infowindow.open(map,marker);});
});