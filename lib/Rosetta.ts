module Rosetta {

        export interface Node {
            // find first sub-node
            find_one ( selector : string ): Node;
            // find multiple sub-nodes
            find_all ( selector : string ): NodeList;

            // extract data from the node
            html ( text? : string ): string;
            text ( text? : string ): string;
            val  ( text? : string ): string;

            // get/set the attributes of the node
            attr ( key : string, value? : any ): any;

            // append the node to to the parent (the invocant)
            append ( node : Node ): void;

            // remove the node from its parent
            remove (): void;

            // removes the node from the DOM and detaches all events
            empty (): void;

            // finds all siblings
            siblings ( selector? : string ): NodeList;

            // finding the next and previous
            next ( selector? : string ): Node;
            prev ( selector? : string ): Node;

            // get parent
            parent (): Node;

            // get children
            children (): NodeList;

            // get nearest matching ancestor
            ancestor ( selector? : string ): Node;

            // is a node contained within the invocant
            contains ( descendent : Node ): bool;

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

            // information about the current node
            height(): number;
            width(): number;

            inner_height(): number;
            inner_width(): number;

            outer_height(): number;
            outer_width(): number;

            offset(): number;
            offset( props: Object ): void;
        }

        declare var Node : {
            new ( selector : string ): Node;
            create ( html : string ): Node;
            one ( selector : string ): Node;
            all ( selector : string ): NodeList;
        }

        export interface NodeList {
            length : bool;
            each   ( fn : ( n : Node ) => void ): void;
            filter ( fn : ( n : Node ) => bool ): NodeList;
            map    ( fn : ( n : Node ) => Node ): NodeList;
        }

        export interface AJAXOptions {
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

        export interface AJAX {
            ( options : AJAXOptions ): void;
        }

}