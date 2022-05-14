var map;
        var searchInput = 'searchBar';
        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 42.393660, lng: -83.055780},
            zoom: 8
          });
          var autocomplete;
          autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
          types: ['geocode'],
          /*componentRestrictions: {
           country: "USA"
          }*/
          });
          //Placeing markers after field update
          const infowindow = new google.maps.InfoWindow();
          const infowindowContent = document.getElementById("infowindow-content");

          infowindow.setContent(infowindowContent);

          const marker = new google.maps.Marker({ map: map });

          marker.addListener("click", () => {
          infowindow.open(map, marker);
          });
          autocomplete.addListener("place_changed", () => {
          infowindow.close();

          const place = autocomplete.getPlace();

          if (!place.geometry || !place.geometry.location) {
            return;
          }

          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(18);
          }

          // Set the position of the marker using the place ID and location.
          marker.setPlace({
          placeId: place.place_id,
          location: place.geometry.location,
          });
          marker.setVisible(true);
          infowindowContent.children.namedItem("place-name").textContent = place.name;
          infowindowContent.children.namedItem("place-id").textContent =
          place.place_id;
          infowindowContent.children.namedItem("place-address").textContent =
          place.formatted_address;
          infowindow.open(map, marker);
          });
        }
        