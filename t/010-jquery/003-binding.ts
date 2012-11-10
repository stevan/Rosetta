
test( "Rosetta.JQuery.Node - binding test", () => {

    var test_container_prefix = '#testing #003-binding ';

    var n = new Rosetta.JQuery.Node( test_container_prefix + '#test' );

    var clicked = 0;
    var clicker = () => { clicked++ };

    n.bind( 'click', clicker );
    equal( clicked, 0, '... no clicks yet' );

    n.trigger( 'click' );
    equal( clicked, 1, '... one click' );

    var n2 = n.clone( true );
    var n3 = n.clone();

    n2.trigger( 'click' );
    equal( clicked, 2, '... two clicks' );

    n3.trigger( 'click' );
    equal( clicked, 2, '... (still) two clicks' );

    n.unbind( 'click', clicker );

    n.trigger( 'click' );
    equal( clicked, 2, '... still two clicks' );

    n2.trigger( 'click' );
    equal( clicked, 3, '... now three clicks' );

});
