$(document).ready(function()
{
	pathObj = {
		"1":
		{
		    "s1": {
		        "strokepath": [
		            {
		                "path": "M0,495.1c43.9-0.4,98.8,0.3,158.5,4c219,10.2,328.5,9.4,328.5,9.4s200.7-0.2,251.7-0.8c130-1.5,303.5,16.8,444.6,35.8",
		                "duration": 500
		            },
		            {
		                "path": "M1394.7,575.5c16.8,2.8,35.7,6.1,45.3,7.8",
		                "duration": 50
		            }
		        ],
		        "dimensions": {
		            "width": 1440,
		            "height": 770
		        }
		    },
		},
		"2":		
        {
            "s2": {
                "strokepath": [
                    {
                        "path": "M165.3,541.7c-0.1,0-0.3,0-0.3-0.1c-0.1-0.1-0.2-0.2-0.2-0.4V303.7c0-0.1,0.1-0.3,0.2-0.4c0.1-0.1,0.2-0.1,0.4-0.1l339.9,17c0.3,0,0.5,0.2,0.5,0.5v208.4c0,0.3-0.2,0.5-0.5,0.5L165.3,541.7C165.3,541.7,165.3,541.7,165.3,541.7z,M165.8,304.2v236.5l338.9-12V321.2L165.8,304.2",
                        "duration": 1000
                    }
                ],
                "dimensions": {
                    "width": 1440,
                    "height": 770
                }
            },
        },        
        "3":
        {
            "s3": {
                "strokepath": [
                    {
                        "path": "M465.3,545c-1.2,0-3.5-0.7-3.5-3.4l-0.3-6c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5l0.3,6c0,2.4,2.2,2.5,2.4,2.5c0.6,0,66.6-2,70.5-2c3.6,0,5.4-1.7,8.4-5.7c12.1-21,16.8-44.8,17.9-51.7c2.5-18.3,1.6-47.6,1.5-47.9c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5c0,0.3,1,29.6-1.6,48c-1.1,6.9-5.8,30.9-18.1,52.1c-2.8,3.7-4.9,6.1-9.2,6.1C531.9,543.1,465.9,545,465.3,545z",
                        "duration": 500
                    }
                ],
                "dimensions": {
                    "width": 1440,
                    "height": 770
                }
            },
        },
        "4":
        {
            "s4": {
                "strokepath": [
                    {
                        "path": "M1440,614l-207.8-35.4l-139.301-40.7L895.1,553.2l-395.5,3L416,522.6c0,0-43.2-30.899-64.8-45.899c-33.4-23.2-74.7-50.4-75.8-50.4c-2.1,0-96.2-83.8-96.2-83.8l-77-57.3L38.4,277l-38.2-3.601",
                        "duration": 1000,
                        "strokeWidth": 1.6
                    }
                ],
                "dimensions": {
                    "width": 1440,
                    "height": 770
                }
            },
        },
        "5":
        {
            "s5": {
                "strokepath": [
                    {
                        "path": "M260.9,565.7c-4.6,0-9.1-1.3-12.3-2.9c-3.5-1.9-9.5-5.7-9.5-10.5c0-3.6-2.6-31.1-3-35c-1.9,0-8.9,0.2-12.2,0.2c-27.1,0-58.7-34.6-58.7-79.2c0-43.3,22.9-78.5,51-78.5c5.7,0,11.3,1.5,16.6,4.5c0.2,0.1,0.3,0.4,0.2,0.7c-0.1,0.2-0.4,0.3-0.7,0.2c-5.2-2.9-10.6-4.4-16.1-4.4c-27.5,0-50,34.8-50,77.5c0,44,31,78.2,57.7,78.2c3.8,0,12.5-0.2,12.6-0.2c0.3,0,0.5,0.2,0.5,0.5c0.1,1.3,3,31.6,3,35.5c0,4.3,5.6,7.8,8.9,9.6c4.5,2.4,11.8,3.9,18,1.9c6.2-2,10.9-7.3,10.9-10.8c0-1.8,1.4-15.2,2.9-30.8c1.8-18.4,3.9-39.2,3.9-42.5c0-1.6-0.6-2.8-1.7-3.6c-2.2-1.6-6.5-1.6-11.1-0.1c-16,5.8-39.1,23.3-39.3,23.5c-0.2,0.2-0.5,0.1-0.7-0.1c-0.2-0.2-0.1-0.5,0.1-0.7c0.2-0.2,23.4-17.8,39.6-23.6c3.9-1.3,9-1.9,12,0.3c1.4,1,2.1,2.5,2.1,4.4c0,3.3-2.1,24.1-4,42.6c-1.5,14.9-2.9,28.9-2.9,30.7c0,4.3-5.4,9.8-11.6,11.8C265.3,565.4,263.1,565.7,260.9,565.7z",
                        "duration": 500
                    },
                    {
                        "path": "M288.7,422.1c-5.9,0-13.7-4.7-23.2-14.1c-23.6-23.2-18.1-39.3-16.4-42.8c-4.7-0.1-29.1,0.2-60.8,9.9c-0.3,0.1-0.5-0.1-0.6-0.3c-0.1-0.3,0.1-0.5,0.3-0.6c35.3-10.9,61.6-10,61.9-10c0.2,0,0.3,0.1,0.4,0.3c0.1,0.2,0.1,0.4,0,0.5c-0.1,0.2-10.3,16.6,15.8,42.3c11.3,11.1,20,15.6,25.8,13.2c7-2.9,7.3-15.1,7.3-15.2c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5c0,0.5-0.3,13-7.9,16.1C291.1,421.9,289.9,422.1,288.7,422.1z",
                        "duration": 500
                    },
                    {
                        "path": "M284.5,495.2c-0.1,0-0.3-0.1-0.4-0.2c-0.2-0.2-0.2-0.5,0-0.7c0.4-0.3,37-33.7,19.6-80c-16.5-43.9-53.9-49.2-54.3-49.2c-0.3,0-0.5-0.3-0.4-0.6c0-0.3,0.3-0.5,0.6-0.4c0.4,0,38.5,5.4,55.1,49.8c17.6,46.9-19.5,80.7-19.9,81.1C284.8,495.1,284.7,495.2,284.5,495.2z",
                        "duration": 500
                    }
                ],
                "dimensions": {
                    "width": 1440,
                    "height": 770
                }
            },
        },
        "6":
        {
            "s6": {
                "strokepath": [
                    {
                        "path": "M565.4,591.2c-29.4,0-54.3-19.3-55.6-43.1c-0.5-9.8,3.2-19.5,10.4-27.1c9.7-10.2,24.5-16,40.7-16c29.4,0,54.3,19.3,55.6,43.1c0.5,9.8-3.2,19.5-10.4,27.1C596.4,585.3,581.6,591.2,565.4,591.2z,M560.9,506c-15.9,0-30.5,5.7-39.9,15.7c-7.1,7.4-10.7,16.8-10.2,26.4c1.2,23.2,25.7,42.1,54.6,42.1c15.9,0,30.5-5.7,39.9-15.7c7.1-7.4,10.7-16.8,10.2-26.4C614.3,524.9,589.8,506,560.9,506z",
                        "duration": 50
                    },
                    {
                        "path": "M286,608.9C286,608.9,286,608.9,286,608.9c-22.6,0-47.7-9.9-69-27.1c-19.1-15.4-33-35-39.1-55c-6.2-20.1-3.8-38.2,6.7-51.1c9.1-11.3,23.9-17.5,41.5-17.5c22.6,0,47.7,9.9,69,27.1c19.1,15.4,33,35,39.1,55c6.2,20.1,3.8,38.2-6.7,51.1C318.4,602.7,303.6,608.9,286,608.9z,M226,459.2c-17.3,0-31.8,6.1-40.7,17.1c-10.2,12.6-12.5,30.5-6.5,50.2c6.1,19.8,19.9,39.2,38.8,54.5c21.1,17.1,46.1,26.9,68.4,26.9c0,0,0,0,0,0c17.3,0,31.8-6.1,40.7-17.1c10.2-12.6,12.5-30.5,6.5-50.2c-6.1-19.8-19.9-39.2-38.8-54.5C273.3,469,248.4,459.2,226,459.2z",
                        "duration": 500
                    }
                ],
                "dimensions": {
                    "width": 1440,
                    "height": 770
                }
            },
        },
        "7":
        {
            "s7": {
                "strokepath": [
                    {
                        "path": "M275.7,421.5c-110.7,0-200.8-33.2-200.8-74.1s90.1-74.1,200.8-74.1s200.8,33.2,200.8,74.1 S386.4,421.5,275.7,421.5z,M275.7,274.2c-110.2,0-199.9,32.8-199.9,73.2c0,40.4,89.7,73.2,199.9,73.2s199.9-32.8,199.9-73.2 C475.6,307,385.9,274.2,275.7,274.2z",
                        "duration": 1000
                    }
                ],
                "dimensions": {
                    "width": 1440,
                    "height": 770
                }
            },
        },
        "8":
        {
            "s8": {
                "strokepath": [
                    {
                        "path": "M1440,614l-207.8-35.4l-139.301-40.7L895.1,553.2l-395.5,3L416,522.6c0,0-43.2-30.899-64.8-45.899c-33.4-23.2-74.7-50.4-75.8-50.4c-2.1,0-96.2-83.8-96.2-83.8l-77-57.3L38.4,277l-38.2-3.601",
                        "duration": 1000,
                        "strokeWidth": 1.6
                    }
                ],
                "dimensions": {
                    "width": 1440,
                    "height": 770
                }
            },
        },
        "9":
        {
            "s9": {
                "strokepath": [
                    {
                        "path": "M260.9,565.7c-4.6,0-9.1-1.3-12.3-2.9c-3.5-1.9-9.5-5.7-9.5-10.5c0-3.6-2.6-31.1-3-35c-1.9,0-8.9,0.2-12.2,0.2c-27.1,0-58.7-34.6-58.7-79.2c0-43.3,22.9-78.5,51-78.5c5.7,0,11.3,1.5,16.6,4.5c0.2,0.1,0.3,0.4,0.2,0.7c-0.1,0.2-0.4,0.3-0.7,0.2c-5.2-2.9-10.6-4.4-16.1-4.4c-27.5,0-50,34.8-50,77.5c0,44,31,78.2,57.7,78.2c3.8,0,12.5-0.2,12.6-0.2c0.3,0,0.5,0.2,0.5,0.5c0.1,1.3,3,31.6,3,35.5c0,4.3,5.6,7.8,8.9,9.6c4.5,2.4,11.8,3.9,18,1.9c6.2-2,10.9-7.3,10.9-10.8c0-1.8,1.4-15.2,2.9-30.8c1.8-18.4,3.9-39.2,3.9-42.5c0-1.6-0.6-2.8-1.7-3.6c-2.2-1.6-6.5-1.6-11.1-0.1c-16,5.8-39.1,23.3-39.3,23.5c-0.2,0.2-0.5,0.1-0.7-0.1c-0.2-0.2-0.1-0.5,0.1-0.7c0.2-0.2,23.4-17.8,39.6-23.6c3.9-1.3,9-1.9,12,0.3c1.4,1,2.1,2.5,2.1,4.4c0,3.3-2.1,24.1-4,42.6c-1.5,14.9-2.9,28.9-2.9,30.7c0,4.3-5.4,9.8-11.6,11.8C265.3,565.4,263.1,565.7,260.9,565.7z",
                        "duration": 500
                    },
                    {
                        "path": "M288.7,422.1c-5.9,0-13.7-4.7-23.2-14.1c-23.6-23.2-18.1-39.3-16.4-42.8c-4.7-0.1-29.1,0.2-60.8,9.9c-0.3,0.1-0.5-0.1-0.6-0.3c-0.1-0.3,0.1-0.5,0.3-0.6c35.3-10.9,61.6-10,61.9-10c0.2,0,0.3,0.1,0.4,0.3c0.1,0.2,0.1,0.4,0,0.5c-0.1,0.2-10.3,16.6,15.8,42.3c11.3,11.1,20,15.6,25.8,13.2c7-2.9,7.3-15.1,7.3-15.2c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5c0,0.5-0.3,13-7.9,16.1C291.1,421.9,289.9,422.1,288.7,422.1z",
                        "duration": 500
                    },
                    {
                        "path": "M284.5,495.2c-0.1,0-0.3-0.1-0.4-0.2c-0.2-0.2-0.2-0.5,0-0.7c0.4-0.3,37-33.7,19.6-80c-16.5-43.9-53.9-49.2-54.3-49.2c-0.3,0-0.5-0.3-0.4-0.6c0-0.3,0.3-0.5,0.6-0.4c0.4,0,38.5,5.4,55.1,49.8c17.6,46.9-19.5,80.7-19.9,81.1C284.8,495.1,284.7,495.2,284.5,495.2z",
                        "duration": 500
                    }
                ],
                "dimensions": {
                    "width": 1440,
                    "height": 770
                }
            },
        }
	};

	$("#move-arrow").click(function(){$.fn.fullpage.moveSectionDown();});

	var total = $("#fullpage .section").length;
	$("#fullpage").fullpage(
	{
		'navigation': false,
		'menu': '#nav',
		'anchors': ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9'],
		'loopBottom': true,
		'scrollOverflow': true,
		'controlArrows': true,
		'touchSensitivity': 22,
		'afterLoad': function(anchorLink, index)
		{
            		if(index<total) $("#footer").fadeOut(200, function(){$("#move-arrow").fadeIn(200);});
            		else $("#move-arrow").fadeOut(200, function(){$("#footer").fadeIn(200);});

			if(!device.tablet())
			{
				var path = pathObj[index];
	
				if(index == 2) seq = false;
				else seq = true;
	
				$('#s'+index).lazylinepainter( 
				{
					"svgData": path,
					"strokeWidth": 0.8,
					"responsive": true,
					"drawSequential": seq,
					"strokeColor": "#71EEEE"
				}).lazylinepainter('paint');
			}
			else {
				$("#s5").children("ellipse").attr("class", "st56");
			}
		},
		afterRender: function()
		{

			$("#footer").hide();
			if(!device.tablet())
			{
				$("#s1").lazylinepainter( 
				{
					"svgData": pathObj[1],
					"strokeWidth": 1,
					"responsive": true,
					"drawSequential": true,
					"strokeColor": "#71EEEE"
				}).lazylinepainter('paint');
			}
		}
	});

    /*$("#s1").lazylinepainter( 
    {
        "svgData": pathObj[1],
        "strokeWidth": 1,
        "responsive": true,
        "drawSequential": true,
        "strokeColor": "#71EEEE"
    }).lazylinepainter('paint');*/

	resize();
});

$(window).resize(function(){resize();});

function resize()
{
    var h = 95;
    if($("body").width()<=1600 && $("body").height()>=800) h = 450;
	$("svg").css("height",$("body").height()+h);
}