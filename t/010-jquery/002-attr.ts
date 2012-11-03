test( "Rosetta.JQuery - attr test", () => {

    var test_container_prefix = '#testing #002-attr ';

    var n = new Rosetta.Node( Rosetta.JQuery, test_container_prefix + '#test' );

    equal( n.attr('align'), 'center', '... got the align attr right' );
    n.attr( 'align', 'left' );
    equal( n.attr('align'), 'left', '... got the (changed) align attr right' );

});
