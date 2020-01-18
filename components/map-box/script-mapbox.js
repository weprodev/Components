/*========================================================================================
*********    
*******      VERSION            : CUSTOM MAPBOX SCRIPT
*****        MAPBOX VERSION     : v0.44.1
***         
*/


$(document).ready(function(){

    // This will let you use the .remove() function later on
    if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
        };
    }
    
    // AccessToken
    mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2lqbmpqazdlMDBsdnRva284cWd3bm11byJ9.V6Hg2oYJwMAxeoR9GEzkAA';

    // This adds the map
    var map = new mapboxgl.Map({
        // container id specified in the HTML
        container: 'map',
        // style URL
        style: 'mapbox://styles/mapbox/light-v9',
        // initial position in [long, lat] format
        center: [-77.034084142948, 38.909671288923],
        // initial zoom
        zoom: 12,
        // scrollZoom: false
    });

    //// JSON DATA INFORMATION
    var stores = {
        "type"      : "FeatureCollection",
        "features"  : [
            {
                "type"          : "Feature",
                "geometry"      : {
                    "type"          : "Point",
                    "coordinates"   : [
                        -73.034084142948,
                        48.909671288923
                    ]
                },
                "properties": {
                    "name"          : "FR BIK",
                    "weather"       : "30 25' N / 49 4' E",
                    "facility"      : "Facility of 41 berth available",
                    "railway"       : "Railway connection available",
                    "airport"       : "Airport connection available",
                    "text"          : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi reprehenderit ad dicta vitae deleniti dolorum est! Laboriosam quidem, illo iure sapiente incidunt facere in, voluptatibus libero perspiciatis quas cumque officiis.",
                    "phone"         : "2022347336",
                    "address"       : "Address here",
                    "city"          : "Washington DC",
                    "country"       : "United States",
                    "state"         : "D.C."
                }
            },                    
            {
                "type"          : "Feature",
                "geometry"      : {
                    "type"          : "Point",
                    "coordinates"   : [
                        -77.034084142948,
                        38.909671288923
                    ]
                },
                "properties": {
                    "name"          : "EN BIK",
                    "weather"       : "20 15' N / 29 1' E",
                    "facility"      : "Facility of 61 berth available",
                    "railway"       : "Railway connection available",
                    "airport"       : "Airport connection available",
                    "text"          : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi reprehenderit ad dicta vitae deleniti dolorum est! Laboriosam quidem, illo iure sapiente incidunt facere in, voluptatibus libero perspiciatis quas cumque officiis.",
                    "phone"         : "2022347336",
                    "address"       : "1471 P St NW",
                    "city"          : "Washington DC",
                    "country"       : "United States",
                    "state"         : "D.C."
                }
            },
            {
                "type"          : "Feature",
                "geometry"      : {
                    "type"          : "Point",
                    "coordinates"   : [
                        -77.049766,
                        38.900772
                    ]
                },
                "properties": {
                    "name"          : "IN BIK",
                    "weather"       : "10 35' N / 49 71' E",
                    "facility"      : "Facility of 11 berth available",
                    "railway"       : "Railway connection available",
                    "airport"       : "Airport connection available",
                    "text"          : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi reprehenderit ad dicta vitae deleniti dolorum est! Laboriosam quidem, illo iure sapiente incidunt facere in, voluptatibus libero perspiciatis quas cumque officiis.",                            
                    "phone"         : "2025078357",
                    "address"       : "2221 I St NW",
                    "city"          : "Washington DC",
                    "country"       : "United States",
                    "state"         : "D.C."
                }
            },
            {
                "type"      : "Feature",
                "geometry"  : {
                    "type"          : "Point",
                    "coordinates"   : [
                        -77.043929,
                        38.910525
                    ]
                },
                "properties": {
                    "name"          : "RU BIK",
                    "weather"       : "40 25' N / 29 2' E",
                    "facility"      : "Facility of 11 berth available",
                    "railway"       : "Railway connection available",
                    "airport"       : "Airport connection available",
                    "text"          : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi reprehenderit ad dicta vitae deleniti dolorum est! Laboriosam quidem, illo iure sapiente incidunt facere in, voluptatibus libero perspiciatis quas cumque officiis.",                                                        
                    "phone"         : "2023879338",
                    "address"       : "1512 Connecticut Ave NW",
                    "city"          : "Washington DC",
                    "country"       : "United States",
                    "state"         : "D.C."
                }
            },
            {
                "type"      : "Feature",
                "geometry"  : {
                    "type"          : "Point",
                    "coordinates"   : [
                        -77.0672,
                        38.90516896
                    ]
                },
                "properties": {
                    "name"          : "IR BIK",
                    "weather"       : "20 15' N / 29 8' E",
                    "facility"      : "Facility of 11 berth available",
                    "railway"       : "Railway connection available",
                    "airport"       : "Airport connection available",
                    "text"          : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi reprehenderit ad dicta vitae deleniti dolorum est! Laboriosam quidem, illo iure sapiente incidunt facere in, voluptatibus libero perspiciatis quas cumque officiis.",                                                                                        
                    "phone"         : "2023379338",
                    "address"       : "3333 M St NW",
                    "city"          : "Washington DC",
                    "country"       : "United States",
                    "state"         : "D.C."
                }
            },
            {
                "type": "Feature",
                "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.002583742142,
                    38.887041080933
                ]
                },
                "properties": {
                    "name"          : "IR BIK",
                    "weather"       : "20 15' N / 29 8' E",
                    "facility"      : "Facility of 11 berth available",
                    "railway"       : "Railway connection available",
                    "airport"       : "Airport connection available",
                    "text"          : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi reprehenderit ad dicta vitae deleniti dolorum est! Laboriosam quidem, illo iure sapiente incidunt facere in, voluptatibus libero perspiciatis quas cumque officiis.",                                                                                                                    
                    "phone"         : "2025479338",
                    "address"       : "221 Pennsylvania Ave SE",
                    "city"          : "Washington DC",
                    "country"       : "United States",
                    "state"         : "D.C."
                }
            },
            {
                "type"      : "Feature",
                "geometry"  : {
                    "type"          : "Point",
                    "coordinates"   : [
                        -77.043929,
                        38.910525
                    ]
                },
                "properties": {
                    "name"          : "RU BIK",
                    "weather"       : "40 25' N / 29 2' E",
                    "facility"      : "Facility of 11 berth available",
                    "railway"       : "Railway connection available",
                    "airport"       : "Airport connection available",
                    "text"          : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi reprehenderit ad dicta vitae deleniti dolorum est! Laboriosam quidem, illo iure sapiente incidunt facere in, voluptatibus libero perspiciatis quas cumque officiis.",                                                        
                    "phone"         : "2023879338",
                    "address"       : "1512 Connecticut Ave NW",
                    "city"          : "Washington DC",
                    "country"       : "United States",
                    "state"         : "D.C."
                }
            },
            {
                "type"      : "Feature",
                "geometry"  : {
                    "type"          : "Point",
                    "coordinates"   : [
                        -77.0672,
                        38.90516896
                    ]
                },
                "properties": {
                    "name"          : "IR BIK",
                    "weather"       : "20 15' N / 29 8' E",
                    "facility"      : "Facility of 11 berth available",
                    "railway"       : "Railway connection available",
                    "airport"       : "Airport connection available",
                    "text"          : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi reprehenderit ad dicta vitae deleniti dolorum est! Laboriosam quidem, illo iure sapiente incidunt facere in, voluptatibus libero perspiciatis quas cumque officiis.",                                                                                        
                    "phone"         : "2023379338",
                    "address"       : "3333 M St NW",
                    "city"          : "Washington DC",
                    "country"       : "United States",
                    "state"         : "D.C."
                }
            },
            {
                "type": "Feature",
                "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.002583742142,
                    38.887041080933
                ]
                },
                "properties": {
                    "name"          : "IR BIK",
                    "weather"       : "20 15' N / 29 8' E",
                    "facility"      : "Facility of 11 berth available",
                    "railway"       : "Railway connection available",
                    "airport"       : "Airport connection available",
                    "text"          : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quasi reprehenderit ad dicta vitae deleniti dolorum est! Laboriosam quidem, illo iure sapiente incidunt facere in, voluptatibus libero perspiciatis quas cumque officiis.",                                                                                                                    
                    "phone"         : "2025479338",
                    "address"       : "221 Pennsylvania Ave SE",
                    "city"          : "Washington DC",
                    "country"       : "United States",
                    "state"         : "D.C."
                }
            },                    
        ]
    };


    // This adds the data to the map
    map.on('load', function (e) {
        // This is where your '.addLayer()' used to be, instead add only the source without styling a layer
        map.addSource("places", {
            "type": "geojson",
            "data": stores
        });
        // Initialize the list
        buildLocationList(stores);
    });


    // This is where your interactions with the symbol layer used to be
    // Now you have interactions with DOM markers instead
    stores.features.forEach(function(marker, i) {
        // Create an img element for the marker
        var el = document.createElement('div');
        el.id  = "marker-" + i;
        el.className = 'marker';
        // Add markers to the map at all points
        new mapboxgl.Marker(el, {offset: [0, -23]})
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);

        el.addEventListener('click', function(e){
            // 1. Fly to the point
            flyToStore(marker);

            // 2. Close all other popups and display popup for clicked store
            createPopUp(marker);

            // 3. Highlight listing in sidebar (and remove highlight for all other listings)
            var activeItem = document.getElementsByClassName('active');

            e.stopPropagation();
            if (activeItem[0]) {
                // activeItem[0].classList.remove('active');
                $(activeItem[0]).removeClass('active');
            }

            // var listing = document.getElementById('listing-' + i);
            // listing.classList.add('active');
            $('#listing-' + i).addClass('active');
            // console.log('hsshs : ' + $('#listing-' + i) );
        });

    });


    function flyToStore(currentFeature) {
        map.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 15
        });
        $('div.item.active').prependTo("#listings");
        $( "#listings" ).animate({ scrollTop: 0 }, 'slow');
    }

    function createPopUp(currentFeature) {

        var popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();


        var popup = new mapboxgl.Popup({closeOnClick: false})
            .setLngLat(currentFeature.geometry.coordinates)
            .setHTML('<h3>' + currentFeature.properties.name +'</h3>' +
                '<h4>' + currentFeature.properties.address + '</h4>')
            .addTo(map);
    }


    function buildLocationList(data) {

        for (i = 0; i < data.features.length; i++) {

            var currentFeature = data.features[i];
            var prop = currentFeature.properties;
            
            // div element , parent section list
            var listings        = document.getElementById('listings');
            var listing         = listings.appendChild(document.createElement('div'));
            listing.className   = 'item';
            listing.id          = "listing-" + i;
    

            // create link contain all data
            var link            = listing.appendChild(document.createElement('a'));
            link.href           = '#';
            link.className      = 'title';
            link.dataPosition   = i;

            // create h4 tag
            var h4          = listing.appendChild(document.createElement('h4'));
            h4.innerHTML    = prop.name;
            link.appendChild(h4);

            //cerate p for description
            var description         = listing.appendChild(document.createElement('p'));
            description.className   = 'description';
            description.innerHTML   = prop.text;
            link.appendChild(description);

            //cerate p for weather
            var weather         = listing.appendChild(document.createElement('p'));
            weather.className   = 'weather';
            weather.innerHTML   = prop.weather;
            link.appendChild(weather);

            //cerate p for facility
            var facility         = listing.appendChild(document.createElement('p'));
            facility.className   = 'facility';
            facility.innerHTML   = prop.facility;
            link.appendChild(facility);
            
            
            //cerate p for railway
            var railway         = listing.appendChild(document.createElement('p'));
            railway.className   = 'railway';
            railway.innerHTML   = prop.railway;
            link.appendChild(railway);
            
            //cerate p for airport
            var airport         = listing.appendChild(document.createElement('p'));
            airport.className   = 'airport';
            airport.innerHTML   = prop.airport;
            link.appendChild(airport);
                                    

            link.addEventListener('click', function(e){

                e.preventDefault();

                // Update the currentFeature to the store associated with the clicked link
                var clickedListing = data.features[this.dataPosition];

                // 1. Fly to the point
                flyToStore(clickedListing);

                // 2. Close all other popups and display popup for clicked store
                createPopUp(clickedListing);

                // 3. Highlight listing in sidebar (and remove highlight for all other listings)
                var activeItem = document.getElementsByClassName('active');

                if (activeItem[0]) {
                activeItem[0].classList.remove('active');
                }
                this.parentNode.classList.add('active');
                
                
                $('div.item.active').prependTo("#listings");
                $( "#listings" ).animate({ scrollTop: 0 }, 'slow');

            });

        }//for

    }//buildLocationList
    

});