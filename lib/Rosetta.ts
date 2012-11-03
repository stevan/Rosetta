/// <reference path="../lib/Rosetta/Driver/JQuery.ts" />

module Rosetta {

        export interface INode {

            // the actual instance
            e : any;

            // find first sub-node
            find_one ( selector : string ): INode;
            // find multiple sub-nodes
            find_all ( selector : string ): INodeList;

            // extract data from the node
            html ( text? : string ): string;
            text ( text? : string ): string;
            val  ( text? : string ): string;

            // get/set the attributes of the node
            attr ( key : string, value? : any ): any;

            // append the node to to the parent (the invocant)
            append ( node : INode ): void;

            // remove the node from its parent
            remove (): void;

            // removes the node from the DOM and detaches all events
            empty (): void;

            // finds all siblings
            siblings ( selector? : string ): INodeList;

            // finding the next and previous
            next ( selector? : string ): INode;
            prev ( selector? : string ): INode;

            // get parent
            parent (): INode;

            // get children
            children (): INodeList;

            // get nearest matching ancestor
            ancestor ( selector : string ): INode;

            // is a node contained within the invocant
            contains ( descendent : INode ): bool;

            // simple show/hide of nodes
            show (): void;
            hide (): void;

            // binding, unbinding and triggering events
            bind    ( event : string, callback : Function ): void;
            unbind  ( event : string, callback : Function ): void;
            trigger ( event : string ): void;

            // helpers for removing, adding, toggling and querying classes
            remove_class ( selector : string ): void;
            add_class    ( selector : string ): void;
            toggle_class ( selector : string ): void;
            has_class    ( selector : string ): bool;

            // css manipulation
            css ( attributes : Object ): void;
            css ( attribute : string ): string;
        }

        export interface INodeList {
            length : number;
            get    ( index : number ): INode;
            each   ( fn : ( n : INode ) => void  ): void;
            filter ( fn : ( n : INode ) => bool  ): INodeList;
            map    ( fn : ( n : INode ) => INode ): INodeList;
        }

        export interface IAJAXOptions {
            url      : string;
            method?  : string;
            headers? : Object;
            data?    : any;
            sync?    : bool;
            timeout? : number;
            on       : {
                success   : Function;
                start?    : Function; // jquery beforeSend
                complete? : Function;
                failure?  : Function;
                end?      : Function;
            };
        }

        export interface IAJAX {
            exec (): void;
        }

        // implementations ...

        export class Node implements INode {

            public e : any;
            private driver : INode;

            constructor ( driver : string, selector : any ) {
                switch ( driver.toLowerCase() ) {
                    case 'jquery':
                        this.driver = new Rosetta.Driver.JQuery.Node ( selector );
                        break;
                    case 'yui':
                        //this.driver = new Rosetta.Driver.YUI.Node ( selector );
                        break;
                }
                this.e = this.driver.e;
            }

            static create ( driver : string, html : string ): INode {
                switch ( driver.toLowerCase() ) {
                    case 'jquery' : return Rosetta.Driver.JQuery.Node.create( html );
                    //case 'yui'    : return Rosetta.Driver.YUI.create( html );
                }
            }

            static one ( driver : string, selector : string ): INode {
                switch ( driver.toLowerCase() ) {
                    case 'jquery' : return Rosetta.Driver.JQuery.Node.one( selector );
                    //case 'yui'    : return Rosetta.Driver.YUI.one( html );
                }
            }

            static all ( driver : string, selector : string ): INodeList {
                switch ( driver.toLowerCase() ) {
                    case 'jquery' : return Rosetta.Driver.JQuery.Node.all( selector );
                    //case 'yui'    : return Rosetta.Driver.YUI.all( html );
                }
            }

            find_one ( selector : string ): INode { return this.driver.find_one( selector ) }
            find_all ( selector : string ): INodeList  { return this.driver.find_all( selector ) }

            html ( text? : string ): string { return this.driver.html( text ) }
            text ( text? : string ): string { return this.driver.text( text ) }
            val  ( text? : string ): string { return this.driver.val( text )  }

            attr ( key : string, value? : any ): any { return this.driver.attr( key, value ) }

            append ( node : INode ): void { this.driver.append( node ) }

            remove (): void { this.driver.remove() }

            empty (): void { this.driver.empty() }

            siblings ( selector? : string ): INodeList { return this.driver.siblings( selector ) }

            next ( selector? : string ): INode { return this.driver.next( selector ) }
            prev ( selector? : string ): INode { return this.driver.prev( selector ) }

            parent (): INode { return this.driver.parent() }

            children (): INodeList { return this.driver.children() }

            ancestor ( selector : string ): INode { return this.driver.ancestor( selector ) }

            contains ( descendent : INode ): bool { return this.driver.contains( descendent ) }

            show (): void { this.driver.show() }
            hide (): void { this.driver.hide() }

            bind    ( event : string, callback : Function ): void { this.driver.bind( event, callback ) }
            unbind  ( event : string, callback : Function ): void { this.driver.unbind( event, callback ) }
            trigger ( event : string ): void { this.driver.trigger( event ) }

            remove_class ( selector : string ): void { this.driver.remove_class( selector ) }
            add_class    ( selector : string ): void { this.driver.add_class( selector ) }
            toggle_class ( selector : string ): void { this.driver.toggle_class( selector ) }
            has_class    ( selector : string ): bool { return this.driver.has_class( selector ) }

            css ( attributes : Object ): void;
            css ( attribute : string ): string;
            css ( attribute : any ): any {
                return this.driver.css( attribute );
            }
        }

        export class AJAX implements IAJAX {

            private driver : IAJAX;

            constructor ( driver : string, options : IAJAXOptions ) {
                switch ( driver.toLowerCase() ) {
                    case 'jquery':
                        this.driver = new Rosetta.Driver.JQuery.AJAX ( options );
                        break;
                    case 'yui':
                        //this.driver = new Rosetta.Driver.YUI.AJAX ( options );
                        break;
                }
            }

            exec (): void { this.driver.exec() }
        }

}