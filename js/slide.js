import Splide from '../sass/blocks/_catalog.sass';

new Splide( '.splide' ).mount();

var elms = document.getElementsByClassName( 'splide' );

for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ] ).mount();
}