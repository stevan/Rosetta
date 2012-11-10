test( "Rosetta.JQuery.Node - traversing test", () => {

    var test_container_prefix = '#testing #004-traversing ';

    var n = new Rosetta.JQuery.Node( test_container_prefix + '#test-0' );

    equal( n.siblings().length, 0, '... no siblings on the root node' );

    var c = n.children();
    equal( c.length, 2, '... two children');

    var c1   = c.get(0);
    var c1_s = c1.siblings();
    var c1_c = c1.children();

    equal( c1.parent().attr('id'), 'test-0', '... got the right parentage');

    equal( c1_s.length, 1, '... there is one sibling on the 0-0 node' );

    equal( c1.attr('id'), 'test-0-0', '... got the right node');
    equal( c1.next().attr('id'), 'test-0-1', '... got the right next() node');
    equal( c1_s.get(0).attr('id'), 'test-0-1', '... got the right sibling node');
    equal( c1_s.get(0).prev().attr('id'), 'test-0-0', '... got the right sibling node');

    equal( c1_c.length, 4, '... there are four children of the 0-0 node' );

    equal( c1_c.get(0).attr('id'), 'test-0-0-0', '... got the right node');
    equal( c1_c.get(0).index(), 0, '... got the right node index');

    equal( c1_c.get(1).attr('id'), 'test-0-0-1', '... got the right node');
    equal( c1_c.get(1).index(), 1, '... got the right node index');

    equal( c1_c.get(2).attr('id'), 'test-0-0-2', '... got the right node');
    equal( c1_c.get(2).index(), 2, '... got the right node index');

    equal( c1_c.get(3).attr('id'), 'test-0-0-3', '... got the right node');
    equal( c1_c.get(3).index(), 3, '... got the right node index');

    var c1_c1 = c1_c.get(0);
    equal( c1_c1.parent().attr('id'), 'test-0-0', '... got the right parentage');
    equal( c1_c1.next().attr('id'), 'test-0-0-1', '... got the right node');
    equal( c1_c1.next().next().attr('id'), 'test-0-0-2', '... got the right node');
    equal( c1_c1.next().next().next().attr('id'), 'test-0-0-3', '... got the right node');

    var acc = [];
    c1_c.each( ( n ) => { acc.push( n.attr('id') ) });
    deepEqual( acc, [ 'test-0-0-0', 'test-0-0-1', 'test-0-0-2', 'test-0-0-3' ], '... got the expected ids');

    var f = n.find_one('#test-0-1-1-0');
    ok( f != null, '... found a node');
    equal( f.attr('id'), 'test-0-1-1-0', '... found the right node');
    equal( f.parent().attr('id'), 'test-0-1-1', '... got the right parentage');
    equal( f.parent().prev().attr('id'), 'test-0-1-0', '... got the right uncle');

    var a = f.ancestor('#test-0-1');
    ok( a != null, '... found a node');
    equal( a.attr('id'), 'test-0-1', '... got the ancestor');
    ok( a.contains( f ), '... the ancestor contains test-0-1');
    ok( n.contains( f ), '... root node contain test-0-1-1-0');
});


/*

<div id="test-0">
    <div id="test-0-0">
        <div id="test-0-0-0"></div>
        <div id="test-0-0-1"></div>
        <div id="test-0-0-2"></div>
        <div id="test-0-0-3"></div>
    </div>
    <div id="test-0-1">
        <div id="test-0-1-0"></div>
        <div id="test-0-1-1">
            <div id="test-0-1-1-0"></div>
        </div>
    </div>
</div>

*/