module Rosetta {
    export module Driver {
        export module JQuery {

            export class Node implements Rosetta.INode {

                public e : any;

                constructor ( selector : any ) {
                    this.e = jQuery( selector );
                }

                static create ( html : string ): Rosetta.INode {
                    return new Node( jQuery( html ) );
                }

                static one ( selector : string ): Rosetta.INode {
                    if ( selector.indexOf(':first') == -1 ) {
                        selector += ':first';
                    }
                    return new Node( jQuery( selector ) );
                }

                static all ( selector : string ): Rosetta.INodeList {
                    var nodes : Rosetta.INode[] = [];
                    jQuery( selector ).each(function () {
                        nodes.push( new Node( this ) );
                    });
                    return new NodeList( nodes );
                }

                find_one ( selector : string ): Rosetta.INode {
                    return new Node( this.e.find( selector ) );
                }

                find_all ( selector : string ): Rosetta.INodeList  {
                    var nodes : Rosetta.INode[] = [];
                    this.e.find( selector ).each(function () {
                        nodes.push( new Node( this ) );
                    });
                    return new NodeList( nodes );
                }

                html ( text? : string ): string { return text != undefined ? this.e.html( text ) : this.e.html() }
                text ( text? : string ): string { return text != undefined ? this.e.text( text ) : this.e.text() }
                val  ( text? : string ): string { return text != undefined ? this.e.val( text )  : this.e.val()  }

                attr ( key : string, value? : any ): any {
                    if ( value == undefined ) {
                        return this.e.attr( key );
                    }
                    else {
                        return this.e.attr( key, value );
                    }
                }

                append ( node : INode ): void {
                    this.e.append( node.e )
                }

                remove (): void { this.e.remove() }

                empty (): void { this.e.empty() }

                siblings ( selector? : string ): Rosetta.INodeList {
                    var nodes : Rosetta.INode[] = [];
                    if ( selector == undefined ) {
                        this.e.siblings().each(function () {
                            nodes.push( new Node( this ) );
                        });
                    }
                    else {
                        this.e.siblings( selector ).each(function () {
                            nodes.push( new Node( this ) );
                        });
                    }
                    return new NodeList( nodes );
                }

                next ( selector? : string ): Rosetta.INode { return new Node( selector != undefined ? this.e.next( selector ) : this.e.next() ) }
                prev ( selector? : string ): Rosetta.INode { return new Node( selector != undefined ? this.e.prev( selector ) : this.e.prev() ) }

                parent (): Rosetta.INode { return new Node( this.e.parent() ) }

                children (): Rosetta.INodeList {
                    var nodes : Rosetta.INode[] = [];
                    this.e.children().each(function () {
                        nodes.push( new Node( this ) );
                    });
                    return new NodeList( nodes );
                }

                ancestor ( selector : string ): Rosetta.INode {
                    return new Node( this.e.closest( selector ) )
                }

                contains ( descendent : Rosetta.INode ): bool {
                    return jQuery.contains( this.e, descendent.e );
                }

                show (): void { this.e.show() }
                hide (): void { this.e.hide() }

                bind    ( event : string, callback : Function ): void { this.e.bind( event, callback ) }
                unbind  ( event : string, callback : Function ): void { this.e.unbind( event, callback ) }
                trigger ( event : string ): void { this.e.trigger( event ) }

                remove_class ( selector : string ): void { this.e.removeClass( selector ) }
                add_class    ( selector : string ): void { this.e.addClass( selector ) }
                toggle_class ( selector : string ): void { this.e.toggleClass( selector ) }
                has_class    ( selector : string ): bool { return this.e.hasClass( selector ) }

                css ( attributes : Object ): void;
                css ( attribute : string ): string;
                css ( attribute : any ): any {
                    return this.e.css( attribute );
                }
            }

            export class NodeList implements Rosetta.INodeList {

                public length : number = 0;

                private nodes : Rosetta.INode[] = [];

                constructor ( nodes : Rosetta.INode[] ) {
                    this.nodes  = nodes;
                    this.length = nodes.length;
                }

                each ( fn : ( n : Rosetta.INode ) => void ): void {
                    this.nodes.map( fn );
                }

                filter ( fn : ( n : Rosetta.INode ) => bool ): Rosetta.INodeList {
                    var nodes : Rosetta.INode[] = [];
                    this.nodes.map(function () {
                        if ( fn( this ) ) {
                            nodes.push( this );
                        }
                    });
                    return new NodeList( nodes );
                }

                map ( fn : ( n : Rosetta.INode ) => Rosetta.INode ): Rosetta.INodeList {
                    return new NodeList( this.nodes.map( fn ) );
                }
            }

            export class AJAX implements Rosetta.IAJAX {

                private options : Rosetta.IAJAXOptions;

                constructor ( options : Rosetta.IAJAXOptions ) {
                    this.options = options;
                }

                exec (): void {
                    //jQuery.ajax( this.options );
                }

            }
        }
    }
}