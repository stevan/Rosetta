
test( "Rosetta.JQuery - html/text/val test", () => {

    (() => {
        var n = new Rosetta.Node( 'jquery', '#testing #test' );

        equal( n.html(), 'test', '... got the right value from html()' );
        equal( n.text(), 'test', '... got the right value from text()' );
        equal( n.val(), '', '... got the right value from val()' );
    })();

    (() => {
        var n = new Rosetta.Node( 'jquery', '#testing #test_val' );

        equal( n.html(), '', '... got the right value from html()' );
        equal( n.text(), '', '... got the right value from text()' );
        equal( n.val(), 'test.val', '... got the right value from val()' );
    })();

});
