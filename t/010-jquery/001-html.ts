
test( "Rosetta.JQuery - html/text/val test", () => {

    (() => {
        var n = new Rosetta.Node( Rosetta.JQuery, '#testing #test' );

        equal( n.html(), 'test', '... got the right value from html()' );
        equal( n.text(), 'test', '... got the right value from text()' );
        equal( n.val(), '', '... got the right value from val()' );
    })();

    (() => {
        var n = new Rosetta.Node( Rosetta.JQuery, '#testing #test_val' );

        equal( n.html(), '', '... got the right value from html()' );
        equal( n.text(), '', '... got the right value from text()' );
        equal( n.val(), 'test.val', '... got the right value from val()' );
    })();

    (() => {
        var n = Rosetta.Node.create( Rosetta.JQuery, '<div>foo</div>' );

        equal( n.html(), 'foo', '... got the right value from html()' );
        equal( n.text(), 'foo', '... got the right value from text()' );
        equal( n.val(), '', '... got the right value from val()' );
    })();

    (() => {
        var n = Rosetta.Node.create( Rosetta.JQuery, '<input type="radio" value="foo" />' );

        equal( n.html(), '', '... got the right value from html()' );
        equal( n.text(), '', '... got the right value from text()' );
        equal( n.val(), 'foo', '... got the right value from val()' );
    })();

    (() => {
        var n = Rosetta.Node.one( Rosetta.JQuery, '#testing #test' );

        equal( n.html(), 'test', '... got the right value from html()' );
        equal( n.text(), 'test', '... got the right value from text()' );
        equal( n.val(), '', '... got the right value from val()' );
    })();

    (() => {
        var n = Rosetta.Node.one( Rosetta.JQuery, '#testing #test_val' );

        equal( n.html(), '', '... got the right value from html()' );
        equal( n.text(), '', '... got the right value from text()' );
        equal( n.val(), 'test.val', '... got the right value from val()' );
    })();

    (() => {
        var n = Rosetta.Node.all( Rosetta.JQuery, '#testing #test' );

        equal( n.get(0).html(), 'test', '... got the right value from html()' );
        equal( n.get(0).text(), 'test', '... got the right value from text()' );
        equal( n.get(0).val(), '', '... got the right value from val()' );
    })();

    (() => {
        var n = Rosetta.Node.all( Rosetta.JQuery, '#testing #test_val' );

        equal( n.get(0).html(), '', '... got the right value from html()' );
        equal( n.get(0).text(), '', '... got the right value from text()' );
        equal( n.get(0).val(), 'test.val', '... got the right value from val()' );
    })();

});
