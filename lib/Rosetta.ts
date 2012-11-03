
module Rosetta {

    // define the interfaces here

    export interface INode {

        // the actual instance
        e : any;

        // clone the object and DOM
        clone ( with_events? : bool ): INode;

        // find first sub-node
        find_one ( selector : string ): INode;
        // find multiple sub-nodes
        find_all ( selector : string, filter? : string ): INodeList;

        // extract data from the node
        html ( text? : string ): string;
        text ( text? : string ): string;
        val  ( text? : string ): string;

        // get/set the attributes of the node
        attr ( key : string, value? : any ): any;

        // append the node to the invocant
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
        map    ( fn : ( n : INode ) => INode ): INodeList;
        filter ( fn : ( n : INode ) => bool  ): INodeList;
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

}