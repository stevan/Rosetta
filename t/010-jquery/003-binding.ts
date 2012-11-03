
test( "Rosetta.JQuery - binding test", () => {

    var test_container_prefix = '#testing #003-binding ';

    var n = new Rosetta.Node( Rosetta.JQuery, test_container_prefix + '#test' );

    var clicked = 0;
    var clicker = () => { clicked++ };

    n.bind( 'click', clicker );
    equal( clicked, 0, '... no clicks yet' );

    n.trigger( 'click' );
    equal( clicked, 1, '... one click' );

    n.unbind( 'click', clicker );

    n.trigger( 'click' );
    equal( clicked, 1, '... still one click' );

});
