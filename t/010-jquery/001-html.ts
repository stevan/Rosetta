
test( "Rosetta.JQuery.Node - html/text/val test", () => {

    var test_container_prefix = '#testing #001-html ';

    (() => {
        var n = new Rosetta.JQuery.Node( test_container_prefix + '#test' );

        equal( n.html(), 'test', '... got the right value from html()' );
        equal( n.text(), 'test', '... got the right value from text()' );
        equal( n.val(), '', '... got the right value from val()' );
    })();

    (() => {
        var n = new Rosetta.JQuery.Node( test_container_prefix + '#test_val' );

        equal( n.html(), '', '... got the right value from html()' );
        equal( n.text(), '', '... got the right value from text()' );
        equal( n.val(), 'test.val', '... got the right value from val()' );
    })();

    (() => {
        var n = Rosetta.JQuery.Node.create(  '<div>foo</div>' );

        equal( n.html(), 'foo', '... got the right value from html()' );
        equal( n.text(), 'foo', '... got the right value from text()' );
        equal( n.val(), '', '... got the right value from val()' );
    })();

    (() => {
        var n = Rosetta.JQuery.Node.create(  '<input type="radio" value="foo" />' );

        equal( n.html(), '', '... got the right value from html()' );
        equal( n.text(), '', '... got the right value from text()' );
        equal( n.val(), 'foo', '... got the right value from val()' );
    })();

    (() => {
        var n = Rosetta.JQuery.Node.one( test_container_prefix + '#test' );

        equal( n.html(), 'test', '... got the right value from html()' );
        equal( n.text(), 'test', '... got the right value from text()' );
        equal( n.val(), '', '... got the right value from val()' );
    })();

    (() => {
        var n = Rosetta.JQuery.Node.one( test_container_prefix + '#test_val' );

        equal( n.html(), '', '... got the right value from html()' );
        equal( n.text(), '', '... got the right value from text()' );
        equal( n.val(), 'test.val', '... got the right value from val()' );
    })();

    (() => {
        var n = Rosetta.JQuery.Node.all( test_container_prefix + '#test' );

        equal( n.get(0).html(), 'test', '... got the right value from html()' );
        equal( n.get(0).text(), 'test', '... got the right value from text()' );
        equal( n.get(0).val(), '', '... got the right value from val()' );
    })();

    (() => {
        var n = Rosetta.JQuery.Node.all( test_container_prefix + '#test_val' );

        equal( n.get(0).html(), '', '... got the right value from html()' );
        equal( n.get(0).text(), '', '... got the right value from text()' );
        equal( n.get(0).val(), 'test.val', '... got the right value from val()' );
    })();

});
