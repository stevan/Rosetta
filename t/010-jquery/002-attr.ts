test( "Rosetta.JQuery - attr test", () => {

    var n = new Rosetta.Node( 'jquery', '#testing #test' );

    equal( n.attr('align'), 'center', '... got the align attr right' );
    n.attr( 'align', 'left' );
    equal( n.attr('align'), 'left', '... got the (changed) align attr right' );

});
