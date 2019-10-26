$(function() {
  // // JSON, $.getJSON
  let flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  $.getJSON(flickrApiUrl, {
    // configuration options
    tags: "sun, beach, flowers, cars",
    tagmode: "any",
    format: "json"
  }).done( function(data) {
    // success
    console.log(data);
    $.each(data.items, function(index, value) {
      console.log(value)
      $("<img>").attr('src', value.media.m).appendTo('#flickr');
      // if(index === 4 ) {
      //   return false;
      // }
    })
  }).fail( function() {
    // error callback
    alert("Ajax call failed!")
  });


  /* ============================================ *\
      POKEMON AJAX API
  \* ============================================ */
  // let pokeApiUrl = 'https://pokeapi.co/api/v2/generation/1';
  // let pokeApiUrlByName = 'https://pokeapi.co/api/v2/pokemon/';

  // $.getJSON(pokeApiUrl).done( function(data) {
  //   console.log(data);
  //   $.each(data.pokemon_species, function(index, pokemon) {
  //     let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
  //         link = $('<a>').attr('id', pokemon.name).attr('href', '#').append($('<strong>').text(name));
  //         par = $('<p>').html('Pokemon species no. ' + (index+1) + " is ").append(link);

  //     link.click( function(event) {
  //       $.getJSON(pokeApiUrlByName + pokemon.name).done( function(details) {
  //         console.log(details);
  //         let pokemonDiv = $('#pokemon-details');
  //         pokemonDiv.empty();
  //         pokemonDiv.append('<h2>' + name + '</h2>');
  //         pokemonDiv.append('<img src="' + details.sprites.front_default + '">');
  //       })
  //       // event.peventDefault();
  //     })
  //     par.appendTo('#pokemon');
  //   });
  // }).fail( function() {
  //   console.log('requerst to pokemon failed!')
  // }).always( function() {
  //   console.log('always will execute everytime running the code')
  // });
});