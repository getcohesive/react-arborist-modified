import {jsxs as $hgUW1$jsxs, jsx as $hgUW1$jsx, Fragment as $hgUW1$Fragment} from "react/jsx-runtime";
import $hgUW1$react, {forwardRef as $hgUW1$forwardRef, useRef as $hgUW1$useRef, useMemo as $hgUW1$useMemo, useImperativeHandle as $hgUW1$useImperativeHandle, useEffect as $hgUW1$useEffect, createContext as $hgUW1$createContext, useContext as $hgUW1$useContext, memo as $hgUW1$memo, useCallback as $hgUW1$useCallback, useState as $hgUW1$useState} from "react";
import {useSyncExternalStore as $hgUW1$useSyncExternalStore} from "use-sync-external-store/shim";
import {HTML5Backend as $hgUW1$HTML5Backend, getEmptyImage as $hgUW1$getEmptyImage} from "react-dnd-html5-backend";
import {DndProvider as $hgUW1$DndProvider, useDrag as $hgUW1$useDrag, useDrop as $hgUW1$useDrop, useDragLayer as $hgUW1$useDragLayer} from "react-dnd";
import {createStore as $hgUW1$createStore, combineReducers as $hgUW1$combineReducers} from "redux";
import {FixedSizeList as $hgUW1$FixedSizeList} from "react-window";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}






const $f4ed15b55ee70bb8$export$feef243b04ff4151 = (0, $hgUW1$createContext)(null);
function $f4ed15b55ee70bb8$export$367b0f2231a90ba0() {
    const value = (0, $hgUW1$useContext)($f4ed15b55ee70bb8$export$feef243b04ff4151);
    if (value === null) throw new Error("No Tree Api Provided");
    return value;
}
const $f4ed15b55ee70bb8$export$f6d467aa8b3786af = (0, $hgUW1$createContext)(null);
function $f4ed15b55ee70bb8$export$fd23f19d5d8f3033() {
    const value = (0, $hgUW1$useContext)($f4ed15b55ee70bb8$export$f6d467aa8b3786af);
    if (value === null) throw new Error("Provide a NodesContext");
    return value;
}
const $f4ed15b55ee70bb8$export$2d5c5ceac203fc1e = (0, $hgUW1$createContext)(null);
function $f4ed15b55ee70bb8$export$4930f6bf413be70e() {
    const value = (0, $hgUW1$useContext)($f4ed15b55ee70bb8$export$2d5c5ceac203fc1e);
    if (value === null) throw new Error("Provide a DnDContext");
    return value;
}
const $f4ed15b55ee70bb8$export$d0c71bc5e3e2d897 = (0, $hgUW1$createContext)(0);
function $f4ed15b55ee70bb8$export$83a4f9dc3b36edb8() {
    (0, $hgUW1$useContext)($f4ed15b55ee70bb8$export$d0c71bc5e3e2d897);
}


var $badb6758e30dd716$exports = {};

$parcel$export($badb6758e30dd716$exports, "TreeApi", () => $badb6758e30dd716$export$e2da3477247342d1);
var $fab42eb3dee39b5b$exports = {};

$parcel$export($fab42eb3dee39b5b$exports, "bound", () => $fab42eb3dee39b5b$export$adf7c0fe6059d774);
$parcel$export($fab42eb3dee39b5b$exports, "isItem", () => $fab42eb3dee39b5b$export$5318634f2ee07019);
$parcel$export($fab42eb3dee39b5b$exports, "isClosed", () => $fab42eb3dee39b5b$export$4210f5ea57fbae57);
$parcel$export($fab42eb3dee39b5b$exports, "isDecendent", () => $fab42eb3dee39b5b$export$1e38f72c6c546f70);
$parcel$export($fab42eb3dee39b5b$exports, "indexOf", () => $fab42eb3dee39b5b$export$305f7d4e9d4624f2);
$parcel$export($fab42eb3dee39b5b$exports, "noop", () => $fab42eb3dee39b5b$export$8793edee2d425525);
$parcel$export($fab42eb3dee39b5b$exports, "dfs", () => $fab42eb3dee39b5b$export$51b654aff22fc5a6);
$parcel$export($fab42eb3dee39b5b$exports, "walk", () => $fab42eb3dee39b5b$export$588732934346abbf);
$parcel$export($fab42eb3dee39b5b$exports, "focusNextElement", () => $fab42eb3dee39b5b$export$3b0237e8566c8d65);
$parcel$export($fab42eb3dee39b5b$exports, "focusPrevElement", () => $fab42eb3dee39b5b$export$33b47db07a82b2fb);
$parcel$export($fab42eb3dee39b5b$exports, "access", () => $fab42eb3dee39b5b$export$9bb0e144ba4929ca);
$parcel$export($fab42eb3dee39b5b$exports, "identifyNull", () => $fab42eb3dee39b5b$export$611823266272db76);
$parcel$export($fab42eb3dee39b5b$exports, "identify", () => $fab42eb3dee39b5b$export$65e5b62a4c490288);
$parcel$export($fab42eb3dee39b5b$exports, "mergeRefs", () => $fab42eb3dee39b5b$export$c9058316764c140e);
$parcel$export($fab42eb3dee39b5b$exports, "safeRun", () => $fab42eb3dee39b5b$export$c6d63370cef03886);
$parcel$export($fab42eb3dee39b5b$exports, "waitFor", () => $fab42eb3dee39b5b$export$9bbfceb27f687c1b);
$parcel$export($fab42eb3dee39b5b$exports, "getInsertIndex", () => $fab42eb3dee39b5b$export$e12bf2314d0bc2a9);
$parcel$export($fab42eb3dee39b5b$exports, "getInsertParentId", () => $fab42eb3dee39b5b$export$58fe32731f07ed56);
function $fab42eb3dee39b5b$export$adf7c0fe6059d774(n, min, max) {
    return Math.max(Math.min(n, max), min);
}
function $fab42eb3dee39b5b$export$5318634f2ee07019(node) {
    return node && node.isLeaf;
}
function $fab42eb3dee39b5b$export$4210f5ea57fbae57(node) {
    return node && node.isInternal && !node.isOpen;
}
const $fab42eb3dee39b5b$export$1e38f72c6c546f70 = (a, b)=>{
    let n = a;
    while(n){
        if (n.id === b.id) return true;
        n = n.parent;
    }
    return false;
};
const $fab42eb3dee39b5b$export$305f7d4e9d4624f2 = (node)=>{
    if (!node.parent) throw Error("Node does not have a parent");
    return node.parent.children.findIndex((c)=>c.id === node.id);
};
function $fab42eb3dee39b5b$export$8793edee2d425525() {}
function $fab42eb3dee39b5b$export$51b654aff22fc5a6(node, id) {
    if (!node) return null;
    if (node.id === id) return node;
    if (node.children) for (let child of node.children){
        const result = $fab42eb3dee39b5b$export$51b654aff22fc5a6(child, id);
        if (result) return result;
    }
    return null;
}
function $fab42eb3dee39b5b$export$588732934346abbf(node, fn) {
    fn(node);
    if (node.children) for (let child of node.children)$fab42eb3dee39b5b$export$588732934346abbf(child, fn);
}
function $fab42eb3dee39b5b$export$3b0237e8566c8d65(target) {
    const elements = $fab42eb3dee39b5b$var$getFocusable(target);
    let next;
    for(let i = 0; i < elements.length; ++i){
        const item = elements[i];
        if (item === target) {
            next = $fab42eb3dee39b5b$var$nextItem(elements, i);
            break;
        }
    }
    // @ts-ignore ??
    next?.focus();
}
function $fab42eb3dee39b5b$export$33b47db07a82b2fb(target) {
    const elements = $fab42eb3dee39b5b$var$getFocusable(target);
    let next;
    for(let i = 0; i < elements.length; ++i){
        const item = elements[i];
        if (item === target) {
            next = $fab42eb3dee39b5b$var$prevItem(elements, i);
            break;
        }
    }
    // @ts-ignore
    next?.focus();
}
function $fab42eb3dee39b5b$var$nextItem(list, index) {
    if (index + 1 < list.length) return list[index + 1];
    else return list[0];
}
function $fab42eb3dee39b5b$var$prevItem(list, index) {
    if (index - 1 >= 0) return list[index - 1];
    else return list[list.length - 1];
}
function $fab42eb3dee39b5b$var$getFocusable(target) {
    return Array.from(document.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)')).filter((e)=>e === target || !target.contains(e));
}
function $fab42eb3dee39b5b$export$9bb0e144ba4929ca(obj, accessor) {
    if (typeof accessor === "boolean") return accessor;
    if (typeof accessor === "string") return obj[accessor];
    return accessor(obj);
}
function $fab42eb3dee39b5b$export$611823266272db76(obj) {
    if (obj === null) return null;
    else return $fab42eb3dee39b5b$export$65e5b62a4c490288(obj);
}
function $fab42eb3dee39b5b$export$65e5b62a4c490288(obj) {
    return typeof obj === "string" ? obj : obj.id;
}
function $fab42eb3dee39b5b$export$c9058316764c140e(...refs) {
    return (instance)=>{
        refs.forEach((ref)=>{
            if (typeof ref === "function") ref(instance);
            else if (ref != null) ref.current = instance;
        });
    };
}
function $fab42eb3dee39b5b$export$c6d63370cef03886(fn, ...args) {
    if (fn) return fn(...args);
}
function $fab42eb3dee39b5b$export$9bbfceb27f687c1b(fn) {
    return new Promise((resolve, reject)=>{
        let tries = 0;
        function check() {
            tries += 1;
            if (tries === 100) reject();
            if (fn()) resolve();
            else setTimeout(check, 10);
        }
        check();
    });
}
function $fab42eb3dee39b5b$export$e12bf2314d0bc2a9(tree) {
    const focus = tree.focusedNode;
    if (!focus) return tree.root.children?.length ?? 0;
    if (focus.isOpen) return 0;
    if (focus.parent) return focus.childIndex + 1;
    return 0;
}
function $fab42eb3dee39b5b$export$58fe32731f07ed56(tree) {
    const focus = tree.focusedNode;
    if (!focus) return null;
    if (focus.isOpen) return focus.id;
    if (focus.parent) return focus.parent.id;
    return null;
}




const $1f311251559e07c9$var$placeholderStyle = {
    display: "flex",
    alignItems: "center",
    zIndex: 1
};
const $1f311251559e07c9$var$lineStyle = {
    flex: 1,
    height: "2px",
    background: "#4B91E2",
    borderRadius: "1px"
};
const $1f311251559e07c9$var$circleStyle = {
    width: "4px",
    height: "4px",
    boxShadow: "0 0 0 3px #4B91E2",
    borderRadius: "50%"
};
const $1f311251559e07c9$export$6cb3c16721363d11 = /*#__PURE__*/ (0, $hgUW1$react).memo(function DefaultCursor({ top: top , left: left , indent: indent  }) {
    const style = {
        position: "absolute",
        pointerEvents: "none",
        top: top - 2 + "px",
        left: left + "px",
        right: indent + "px"
    };
    return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        style: {
            ...$1f311251559e07c9$var$placeholderStyle,
            ...style
        },
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                style: {
                    ...$1f311251559e07c9$var$circleStyle
                }
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
                style: {
                    ...$1f311251559e07c9$var$lineStyle
                }
            })
        ]
    });
});




function $b2b9258243d0947f$export$f9c541e71856c524({ node: node , attrs: attrs , innerRef: innerRef , children: children  }) {
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        ...attrs,
        ref: innerRef,
        onFocus: (e)=>e.stopPropagation(),
        onClick: node.handleClick,
        children: children
    });
}




function $1cf21b02c215d80f$export$909e23cbfbbd3351(props) {
    return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        ref: props.dragHandle,
        style: props.style,
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
                onClick: (e)=>{
                    e.stopPropagation();
                    props.node.toggle();
                },
                children: props.node.isLeaf ? "\uD83C\uDF33" : props.node.isOpen ? "\uD83D\uDDC1" : "\uD83D\uDDC0"
            }),
            " ",
            props.node.isEditing ? /*#__PURE__*/ (0, $hgUW1$jsx)($1cf21b02c215d80f$var$Edit, {
                ...props
            }) : /*#__PURE__*/ (0, $hgUW1$jsx)($1cf21b02c215d80f$var$Show, {
                ...props
            })
        ]
    });
}
function $1cf21b02c215d80f$var$Show(props) {
    return /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Fragment), {
        children: /*#__PURE__*/ (0, $hgUW1$jsx)("span", {
            children: props.node.data.name
        })
    });
}
function $1cf21b02c215d80f$var$Edit({ node: node  }) {
    const input = (0, $hgUW1$useRef)();
    (0, $hgUW1$useEffect)(()=>{
        input.current?.focus();
        input.current?.select();
    }, []);
    return /*#__PURE__*/ (0, $hgUW1$jsx)("input", {
        ref: input,
        // @ts-ignore
        defaultValue: node.data.name,
        onBlur: ()=>node.reset(),
        onKeyDown: (e)=>{
            if (e.key === "Escape") node.reset();
            if (e.key === "Enter") node.submit(input.current?.value || "");
        }
    });
}


function $0653cf521546277e$export$e1a8e267487c59d1(id) {
    return {
        type: "EDIT",
        id: id
    };
}
function $0653cf521546277e$export$1650419e431d3ba3(state = {
    id: null
}, action) {
    if (action.type === "EDIT") return {
        ...state,
        id: action.id
    };
    else return state;
}


function $eb3d9db7e5c4e4b5$export$d7ddd398f22d79ef(id) {
    return {
        type: "FOCUS",
        id: id
    };
}
function $eb3d9db7e5c4e4b5$export$6b6c976e46a06288() {
    return {
        type: "TREE_BLUR"
    };
}
function $eb3d9db7e5c4e4b5$export$1650419e431d3ba3(state = {
    id: null,
    treeFocused: false
}, action) {
    if (action.type === "FOCUS") return {
        ...state,
        id: action.id,
        treeFocused: true
    };
    else if (action.type === "TREE_BLUR") return {
        ...state,
        treeFocused: false
    };
    else return state;
}


var $bfd4e380870e2175$exports = {};

$parcel$export($bfd4e380870e2175$exports, "NodeApi", () => $bfd4e380870e2175$export$d4b903da0f522dc8);

class $bfd4e380870e2175$export$d4b903da0f522dc8 {
    constructor(params){
        this.tree = params.tree;
        this.id = params.id;
        this.data = params.data;
        this.level = params.level;
        this.children = params.children;
        this.parent = params.parent;
        this.isDraggable = params.isDraggable;
        this.isDroppable = params.isDroppable;
        this.rowIndex = params.rowIndex;
    }
    get isRoot() {
        return this.id === (0, $04514ba8ecc1e155$export$ec71a3379b43ae5c);
    }
    get isLeaf() {
        return !Array.isArray(this.children);
    }
    get isInternal() {
        return !this.isLeaf;
    }
    get isOpen() {
        return this.isLeaf ? false : this.tree.isOpen(this.id);
    }
    get isClosed() {
        return this.isLeaf ? false : !this.tree.isOpen(this.id);
    }
    get isEditing() {
        return this.tree.editingId === this.id;
    }
    get isSelected() {
        return this.tree.isSelected(this.id);
    }
    get isOnlySelection() {
        return this.isSelected && this.tree.hasOneSelection;
    }
    get isSelectedStart() {
        return this.isSelected && !this.prev?.isSelected;
    }
    get isSelectedEnd() {
        return this.isSelected && !this.next?.isSelected;
    }
    get isFocused() {
        return this.tree.isFocused(this.id);
    }
    get isDragging() {
        return this.tree.isDragging(this.id);
    }
    get willReceiveDrop() {
        return this.tree.willReceiveDrop(this.id);
    }
    get state() {
        return {
            isClosed: this.isClosed,
            isDragging: this.isDragging,
            isEditing: this.isEditing,
            isFocused: this.isFocused,
            isInternal: this.isInternal,
            isLeaf: this.isLeaf,
            isOpen: this.isOpen,
            isSelected: this.isSelected,
            isSelectedEnd: this.isSelectedEnd,
            isSelectedStart: this.isSelectedStart,
            willReceiveDrop: this.willReceiveDrop
        };
    }
    get childIndex() {
        if (this.parent && this.parent.children) return this.parent.children.findIndex((child)=>child.id === this.id);
        else return -1;
    }
    get next() {
        if (this.rowIndex === null) return null;
        return this.tree.at(this.rowIndex + 1);
    }
    get prev() {
        if (this.rowIndex === null) return null;
        return this.tree.at(this.rowIndex - 1);
    }
    get nextSibling() {
        const i = this.childIndex;
        return this.parent?.children[i + 1] ?? null;
    }
    select() {
        this.tree.select(this);
    }
    deselect() {
        this.tree.deselect(this);
    }
    selectMulti() {
        this.tree.selectMulti(this);
    }
    selectContiguous() {
        this.tree.selectContiguous(this);
    }
    activate() {
        this.tree.activate(this);
    }
    focus() {
        this.tree.focus(this);
    }
    toggle() {
        this.tree.toggle(this);
    }
    open() {
        this.tree.open(this);
    }
    openParents() {
        this.tree.openParents(this);
    }
    close() {
        this.tree.close(this);
    }
    submit(value) {
        this.tree.submit(this, value);
    }
    reset() {
        this.tree.reset();
    }
    clone() {
        return new $bfd4e380870e2175$export$d4b903da0f522dc8({
            ...this
        });
    }
    edit() {
        return this.tree.edit(this);
    }
    handleClick = (e)=>{
        if (e.metaKey) this.isSelected ? this.deselect() : this.selectMulti();
        else if (e.shiftKey) this.selectContiguous();
        else {
            this.select();
            this.activate();
        }
    };
}


const $04514ba8ecc1e155$export$ec71a3379b43ae5c = "__REACT_ARBORIST_INTERNAL_ROOT__";
function $04514ba8ecc1e155$export$882461b6382ed46c(tree) {
    function visitSelfAndChildren(data, level, parent) {
        const id = tree.accessId(data);
        const node = new (0, $bfd4e380870e2175$export$d4b903da0f522dc8)({
            tree: tree,
            data: data,
            level: level,
            parent: parent,
            id: id,
            children: null,
            isDraggable: tree.isDraggable(data),
            isDroppable: tree.isDroppable(data),
            rowIndex: null
        });
        const children = tree.accessChildren(data);
        if (children) node.children = children.map((child)=>visitSelfAndChildren(child, level + 1, node));
        return node;
    }
    const root = new (0, $bfd4e380870e2175$export$d4b903da0f522dc8)({
        tree: tree,
        id: $04514ba8ecc1e155$export$ec71a3379b43ae5c,
        // @ts-ignore
        data: {
            id: $04514ba8ecc1e155$export$ec71a3379b43ae5c
        },
        level: -1,
        parent: null,
        children: null,
        isDraggable: true,
        isDroppable: true,
        rowIndex: null
    });
    const data = tree.props.data ?? [];
    root.children = data.map((child)=>{
        return visitSelfAndChildren(child, 0, root);
    });
    return root;
}


const $1c61be8efb674d8d$export$e324594224ef24da = {
    open (id, filtered) {
        return {
            type: "VISIBILITY_OPEN",
            id: id,
            filtered: filtered
        };
    },
    close (id, filtered) {
        return {
            type: "VISIBILITY_CLOSE",
            id: id,
            filtered: filtered
        };
    },
    toggle (id, filtered) {
        return {
            type: "VISIBILITY_TOGGLE",
            id: id,
            filtered: filtered
        };
    },
    clear (filtered) {
        return {
            type: "VISIBILITY_CLEAR",
            filtered: filtered
        };
    }
};
/* Reducer */ function $1c61be8efb674d8d$var$openMapReducer(state = {}, action) {
    if (action.type === "VISIBILITY_OPEN") return {
        ...state,
        [action.id]: true
    };
    else if (action.type === "VISIBILITY_CLOSE") return {
        ...state,
        [action.id]: false
    };
    else if (action.type === "VISIBILITY_TOGGLE") {
        const prev = state[action.id];
        return {
            ...state,
            [action.id]: !prev
        };
    } else if (action.type === "VISIBILITY_CLEAR") return {};
    else return state;
}
function $1c61be8efb674d8d$export$1650419e431d3ba3(state = {
    filtered: {},
    unfiltered: {}
}, action) {
    if (!action.type.startsWith("VISIBILITY")) return state;
    if (action.filtered) return {
        ...state,
        filtered: $1c61be8efb674d8d$var$openMapReducer(state.filtered, action)
    };
    else return {
        ...state,
        unfiltered: $1c61be8efb674d8d$var$openMapReducer(state.unfiltered, action)
    };
}



const $cc76b5b84c1e0cdd$export$d4c72bab9d6cc13a = (props)=>({
        nodes: {
            // Changes together
            open: {
                filtered: {},
                unfiltered: props?.initialOpenState ?? {}
            },
            focus: {
                id: null,
                treeFocused: false
            },
            edit: {
                id: null
            },
            drag: {
                id: null,
                idWillReceiveDrop: null
            },
            selection: {
                ids: new Set(),
                anchor: null,
                mostRecent: null
            }
        },
        dnd: {
            cursor: {
                type: "none"
            },
            dragId: null
        }
    });


const $33cb815da494952c$export$e324594224ef24da = {
    clear: ()=>({
            type: "SELECTION_CLEAR"
        }),
    only: (id)=>({
            type: "SELECTION_ONLY",
            id: (0, $fab42eb3dee39b5b$export$65e5b62a4c490288)(id)
        }),
    add: (id)=>({
            type: "SELECTION_ADD",
            ids: (Array.isArray(id) ? id : [
                id
            ]).map((0, $fab42eb3dee39b5b$export$65e5b62a4c490288))
        }),
    remove: (id)=>({
            type: "SELECTION_REMOVE",
            ids: (Array.isArray(id) ? id : [
                id
            ]).map((0, $fab42eb3dee39b5b$export$65e5b62a4c490288))
        }),
    set: (ids)=>({
            type: "SELECTION_SET",
            ids: ids
        }),
    mostRecent: (id)=>({
            type: "SELECTION_MOST_RECENT",
            id: id === null ? null : (0, $fab42eb3dee39b5b$export$65e5b62a4c490288)(id)
        }),
    anchor: (id)=>({
            type: "SELECTION_ANCHOR",
            id: id === null ? null : (0, $fab42eb3dee39b5b$export$65e5b62a4c490288)(id)
        })
};
function $33cb815da494952c$export$1650419e431d3ba3(state = (0, $cc76b5b84c1e0cdd$export$d4c72bab9d6cc13a)()["nodes"]["selection"], action) {
    const ids = state.ids;
    switch(action.type){
        case "SELECTION_CLEAR":
            return {
                ...state,
                ids: new Set()
            };
        case "SELECTION_ONLY":
            return {
                ...state,
                ids: new Set([
                    action.id
                ])
            };
        case "SELECTION_ADD":
            if (action.ids.length === 0) return state;
            action.ids.forEach((id)=>ids.add(id));
            return {
                ...state,
                ids: new Set(ids)
            };
        case "SELECTION_REMOVE":
            if (action.ids.length === 0) return state;
            action.ids.forEach((id)=>ids.delete(id));
            return {
                ...state,
                ids: new Set(ids)
            };
        case "SELECTION_SET":
            return {
                ...state,
                ids: new Set(action.ids)
            };
        case "SELECTION_MOST_RECENT":
            return {
                ...state,
                mostRecent: action.id
            };
        case "SELECTION_ANCHOR":
            return {
                ...state,
                anchor: action.id
            };
        default:
            return state;
    }
}



const $d4a160479bbc41b1$export$e324594224ef24da = {
    cursor (cursor) {
        return {
            type: "DND_CURSOR",
            cursor: cursor
        };
    },
    dragStart (id) {
        return {
            type: "DND_DRAG_START",
            id: id
        };
    },
    dragEnd () {
        return {
            type: "DND_DRAG_END"
        };
    }
};
function $d4a160479bbc41b1$export$1650419e431d3ba3(state = (0, $cc76b5b84c1e0cdd$export$d4c72bab9d6cc13a)()["dnd"], action) {
    switch(action.type){
        case "DND_CURSOR":
            return {
                ...state,
                cursor: action.cursor
            };
        case "DND_DRAG_START":
            return {
                ...state,
                dragId: action.id
            };
        case "DND_DRAG_END":
            return {
                ...state,
                dragId: null
            };
        default:
            return state;
    }
}





const $9746410ec71fd03a$var$layerStyles = {
    position: "fixed",
    pointerEvents: "none",
    zIndex: 100,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%"
};
const $9746410ec71fd03a$var$getStyle = (offset)=>{
    if (!offset) return {
        display: "none"
    };
    const { x: x , y: y  } = offset;
    return {
        transform: `translate(${x}px, ${y}px)`
    };
};
const $9746410ec71fd03a$var$getCountStyle = (offset)=>{
    if (!offset) return {
        display: "none"
    };
    const { x: x , y: y  } = offset;
    return {
        transform: `translate(${x + 10}px, ${y + 10}px)`
    };
};
function $9746410ec71fd03a$export$84e211ad8431a387({ offset: offset , mouse: mouse , id: id , dragIds: dragIds , isDragging: isDragging  }) {
    return /*#__PURE__*/ (0, $hgUW1$jsxs)($9746410ec71fd03a$var$Overlay, {
        isDragging: isDragging,
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)($9746410ec71fd03a$var$Position, {
                offset: offset,
                children: /*#__PURE__*/ (0, $hgUW1$jsx)($9746410ec71fd03a$var$PreviewNode, {
                    id: id,
                    dragIds: dragIds
                })
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)($9746410ec71fd03a$var$Count, {
                mouse: mouse,
                count: dragIds.length
            })
        ]
    });
}
const $9746410ec71fd03a$var$Overlay = /*#__PURE__*/ (0, $hgUW1$memo)(function Overlay(props) {
    if (!props.isDragging) return null;
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        style: $9746410ec71fd03a$var$layerStyles,
        children: props.children
    });
});
function $9746410ec71fd03a$var$Position(props) {
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        className: "row preview",
        style: $9746410ec71fd03a$var$getStyle(props.offset),
        children: props.children
    });
}
function $9746410ec71fd03a$var$Count(props) {
    const { count: count , mouse: mouse  } = props;
    if (count > 1) return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        className: "selected-count",
        style: $9746410ec71fd03a$var$getCountStyle(mouse),
        children: count
    });
    else return null;
}
const $9746410ec71fd03a$var$PreviewNode = /*#__PURE__*/ (0, $hgUW1$memo)(function PreviewNode(props) {
    const tree = (0, $f4ed15b55ee70bb8$export$367b0f2231a90ba0)();
    const node = tree.get(props.id);
    if (!node) return null;
    return /*#__PURE__*/ (0, $hgUW1$jsx)(tree.renderNode, {
        preview: true,
        node: node,
        style: {
            paddingLeft: node.level * tree.indent,
            opacity: 0.2,
            background: "transparent"
        },
        tree: tree
    });
});










function $c7374da4b4afe2bd$export$b6a79797ad180576() {
    const tree = (0, $f4ed15b55ee70bb8$export$367b0f2231a90ba0)();
    const state = (0, $f4ed15b55ee70bb8$export$4930f6bf413be70e)();
    const cursor = state.cursor;
    if (!cursor || cursor.type !== "line") return null;
    const indent = tree.indent;
    const top = tree.rowHeight * cursor.index + ((tree.props.padding ?? tree.props.paddingTop) ?? 0);
    const left = indent * cursor.level;
    const Cursor = tree.renderCursor;
    return /*#__PURE__*/ (0, $hgUW1$jsx)(Cursor, {
        top: top,
        left: left,
        indent: indent
    });
}


const $1712c1958416fa12$export$70c2b8898b86d3ad = /*#__PURE__*/ (0, $hgUW1$forwardRef)(function Outer(props, ref) {
    const { children: children , ...rest } = props;
    const tree = (0, $f4ed15b55ee70bb8$export$367b0f2231a90ba0)();
    return /*#__PURE__*/ (0, $hgUW1$jsxs)("div", {
        // @ts-ignore
        ref: ref,
        ...rest,
        onClick: (e)=>{
            if (e.currentTarget === e.target) tree.deselectAll();
        },
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)($1712c1958416fa12$var$DropContainer, {}),
            children
        ]
    });
});
const $1712c1958416fa12$var$DropContainer = ()=>{
    const tree = (0, $f4ed15b55ee70bb8$export$367b0f2231a90ba0)();
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        style: {
            height: tree.visibleNodes.length * tree.rowHeight,
            width: "100%",
            position: "absolute",
            left: "0",
            right: "0"
        },
        children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $c7374da4b4afe2bd$export$b6a79797ad180576), {})
    });
};






const $244de757158eecf7$export$a9af0da3ae60cd00 = /*#__PURE__*/ (0, $hgUW1$forwardRef)(function InnerElement({ style: style , ...rest }, ref) {
    const tree = (0, $f4ed15b55ee70bb8$export$367b0f2231a90ba0)();
    const paddingTop = (tree.props.padding ?? tree.props.paddingTop) ?? 0;
    const paddingBottom = (tree.props.padding ?? tree.props.paddingBottom) ?? 0;
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        ref: ref,
        style: {
            ...style,
            height: `${parseFloat(style.height) + paddingTop + paddingBottom}px`
        },
        ...rest
    });
});












function $42f047b822e819e2$export$715c0d031ede7907(node) {
    const tree = (0, $f4ed15b55ee70bb8$export$367b0f2231a90ba0)();
    const ids = tree.selectedIds;
    const [_, ref, preview] = (0, $hgUW1$useDrag)(()=>({
            canDrag: ()=>node.isDraggable,
            type: "NODE",
            item: ()=>({
                    id: node.id,
                    dragIds: tree.isSelected(node.id) ? Array.from(ids) : [
                        node.id
                    ]
                }),
            start: ()=>{
                tree.dispatch((0, $d4a160479bbc41b1$export$e324594224ef24da).dragStart(node.id));
            },
            end: (item, monitor)=>{
                tree.dispatch((0, $d4a160479bbc41b1$export$e324594224ef24da).dragEnd());
                tree.hideCursor();
                const drop = monitor.getDropResult();
                // If they held down meta, we need to create a copy
                // if (drop.dropEffect === "copy")
                if (drop && drop.parentId) {
                    const parentId = drop.parentId === (0, $04514ba8ecc1e155$export$ec71a3379b43ae5c) ? null : drop.parentId;
                    (0, $fab42eb3dee39b5b$export$c6d63370cef03886)(tree.props.onMove, {
                        dragIds: item.dragIds,
                        parentId: parentId,
                        index: drop.index,
                        dragNodes: item.dragIds.map((id)=>tree.get(id)),
                        parentNode: tree.get(drop.parentId)
                    });
                    tree.open(drop.parentId);
                }
            }
        }), [
        ids,
        node
    ]);
    (0, $hgUW1$useEffect)(()=>{
        preview((0, $hgUW1$getEmptyImage)());
    }, [
        preview
    ]);
    return ref;
}






function $3f9bbcd042b3151a$var$measureHover(el, offset) {
    const rect = el.getBoundingClientRect();
    const x = offset.x - Math.round(rect.x);
    const y = offset.y - Math.round(rect.y);
    const height = rect.height;
    const inTopHalf = y < height / 2;
    const inBottomHalf = !inTopHalf;
    const pad = height / 4;
    const inMiddle = y > pad && y < height - pad;
    const atTop = !inMiddle && inTopHalf;
    const atBottom = !inMiddle && inBottomHalf;
    return {
        x: x,
        inTopHalf: inTopHalf,
        inBottomHalf: inBottomHalf,
        inMiddle: inMiddle,
        atTop: atTop,
        atBottom: atBottom
    };
}
function $3f9bbcd042b3151a$var$getNodesAroundCursor(node, prev, next, hover) {
    if (!node) // We're hoving over the empty part of the list, not over an item,
    // Put the cursor below the last item which is "prev"
    return [
        prev,
        null
    ];
    if (node.isInternal) {
        if (hover.atTop) return [
            prev,
            node
        ];
        else if (hover.inMiddle) return [
            node,
            node
        ];
        else return [
            node,
            next
        ];
    } else {
        if (hover.inTopHalf) return [
            prev,
            node
        ];
        else return [
            node,
            next
        ];
    }
}
function $3f9bbcd042b3151a$var$getDropLevel(hovering, aboveCursor, belowCursor, indent) {
    const hoverLevel = Math.round(Math.max(0, hovering.x - indent) / indent);
    let min, max;
    if (!aboveCursor) {
        max = 0;
        min = 0;
    } else if (!belowCursor) {
        max = aboveCursor.level;
        min = 0;
    } else {
        max = aboveCursor.level;
        min = belowCursor.level;
    }
    return (0, $fab42eb3dee39b5b$export$adf7c0fe6059d774)(hoverLevel, min, max);
}
function $3f9bbcd042b3151a$var$canDrop(above, below) {
    if (!above) return true;
    let n = above;
    if ((0, $fab42eb3dee39b5b$export$4210f5ea57fbae57)(above) && above !== below) n = above.parent;
    while(n){
        if (!n.isDroppable) return false;
        n = n.parent;
    }
    return true;
}
function $3f9bbcd042b3151a$var$dropAt(parentId, index) {
    return {
        parentId: parentId || null,
        index: index
    };
}
function $3f9bbcd042b3151a$var$lineCursor(index, level) {
    return {
        type: "line",
        index: index,
        level: level
    };
}
function $3f9bbcd042b3151a$var$noCursor() {
    return {
        type: "none"
    };
}
function $3f9bbcd042b3151a$var$highlightCursor(id) {
    return {
        type: "highlight",
        id: id
    };
}
function $3f9bbcd042b3151a$var$walkUpFrom(node, level) {
    let drop = node;
    while(drop.parent && drop.level > level)drop = drop.parent;
    const parentId = drop.parent?.id || null;
    const index = (0, $fab42eb3dee39b5b$export$305f7d4e9d4624f2)(drop) + 1;
    return {
        parentId: parentId,
        index: index
    };
}
function $3f9bbcd042b3151a$export$f502ca02ebb85a1c(args) {
    const hover = $3f9bbcd042b3151a$var$measureHover(args.element, args.offset);
    const { node: node , nextNode: nextNode , prevNode: prevNode  } = args;
    const [above, below] = $3f9bbcd042b3151a$var$getNodesAroundCursor(node, prevNode, nextNode, hover);
    if (!$3f9bbcd042b3151a$var$canDrop(above, below)) return {
        drop: null,
        cursor: $3f9bbcd042b3151a$var$noCursor()
    };
    /* Hovering over the middle of a folder */ if (node && node.isInternal && hover.inMiddle) return {
        drop: $3f9bbcd042b3151a$var$dropAt(node.id, 0),
        cursor: $3f9bbcd042b3151a$var$highlightCursor(node.id)
    };
    /* At the top of the list */ if (!above) return {
        drop: $3f9bbcd042b3151a$var$dropAt(below?.parent?.id, 0),
        cursor: $3f9bbcd042b3151a$var$lineCursor(0, 0)
    };
    /* The above node is an item or a closed folder */ if ((0, $fab42eb3dee39b5b$export$5318634f2ee07019)(above) || (0, $fab42eb3dee39b5b$export$4210f5ea57fbae57)(above)) {
        const level = $3f9bbcd042b3151a$var$getDropLevel(hover, above, below, args.indent);
        return {
            drop: $3f9bbcd042b3151a$var$walkUpFrom(above, level),
            cursor: $3f9bbcd042b3151a$var$lineCursor(above.rowIndex + 1, level)
        };
    }
    /* The above node is an open folder */ return {
        drop: $3f9bbcd042b3151a$var$dropAt(above?.id, 0),
        cursor: $3f9bbcd042b3151a$var$lineCursor(above.rowIndex + 1, above.level + 1)
    };
}


function $60c95f13b6c22875$export$57afafec4637d997(el, node) {
    const tree = (0, $f4ed15b55ee70bb8$export$367b0f2231a90ba0)();
    const [_, dropRef] = (0, $hgUW1$useDrop)(()=>({
            accept: "NODE",
            canDrop: (item, m)=>{
                if (node.tree.isFiltered) return false;
                const offset = m.getClientOffset();
                if (!el.current || !offset) return false;
                const { drop: drop  } = (0, $3f9bbcd042b3151a$export$f502ca02ebb85a1c)({
                    element: el.current,
                    offset: offset,
                    indent: tree.indent,
                    node: node,
                    prevNode: node.prev,
                    nextNode: node.next
                });
                if (!drop) return false;
                const dropParent = tree.get(drop.parentId) ?? tree.root;
                for (let id of item.dragIds){
                    const drag = tree.get(id);
                    if (!drag) return false;
                    if (!dropParent) return false;
                    if (drag.isInternal && (0, $fab42eb3dee39b5b$export$1e38f72c6c546f70)(dropParent, drag)) return false;
                }
                return true;
            },
            hover: (item, m)=>{
                if (m.canDrop()) {
                    const offset = m.getClientOffset();
                    if (!el.current || !offset) return;
                    const { cursor: cursor  } = (0, $3f9bbcd042b3151a$export$f502ca02ebb85a1c)({
                        element: el.current,
                        offset: offset,
                        indent: tree.indent,
                        node: node,
                        prevNode: node.prev,
                        nextNode: node.next
                    });
                    if (cursor) tree.showCursor(cursor);
                } else tree.hideCursor();
            },
            drop: (item, m)=>{
                const offset = m.getClientOffset();
                if (!el.current || !offset) return;
                const { drop: drop  } = (0, $3f9bbcd042b3151a$export$f502ca02ebb85a1c)({
                    element: el.current,
                    offset: offset,
                    indent: tree.indent,
                    node: node,
                    prevNode: node.prev,
                    nextNode: node.next
                });
                return drop;
            }
        }), [
        node,
        el.current,
        tree.props
    ]);
    return dropRef;
}




function $2d10d5436b8ade7d$export$d75ab90b05ebbfaa(index) {
    const tree = (0, $f4ed15b55ee70bb8$export$367b0f2231a90ba0)();
    const original = tree.at(index);
    if (!original) throw new Error(`Could not find node for index: ${index}`);
    return (0, $hgUW1$useMemo)(()=>{
        const fresh = original.clone();
        tree.visibleNodes[index] = fresh; // sneaky
        return fresh;
    // Return a fresh instance if the state values change
    }, [
        ...Object.values(original.state),
        original
    ]);
}


const $4faac6a0e4c550ff$export$a9754b3c8daa5172 = /*#__PURE__*/ (0, $hgUW1$react).memo(function RowContainer({ index: index , style: style  }) {
    /* When will the <Row> will re-render.
   *
   * The row component is memo'd so it will only render
   * when a new instance of the NodeApi class is passed
   * to it.
   *
   * The TreeApi instance is stable. It does not
   * change when the internal state changes.
   *
   * The TreeApi has all the references to the nodes.
   * We need to clone the nodes when their state
   * changes. The node class contains no state itself,
   * It always checks the tree for state. The tree's
   * state will always be up to date.
   */ (0, $f4ed15b55ee70bb8$export$83a4f9dc3b36edb8)(); // Re-render when tree props or visability changes
    const _ = (0, $f4ed15b55ee70bb8$export$fd23f19d5d8f3033)(); // So that we re-render appropriately
    const tree = (0, $f4ed15b55ee70bb8$export$367b0f2231a90ba0)(); // Tree already has the fresh state
    const node = (0, $2d10d5436b8ade7d$export$d75ab90b05ebbfaa)(index);
    const el = (0, $hgUW1$useRef)(null);
    const dragRef = (0, $42f047b822e819e2$export$715c0d031ede7907)(node);
    const dropRef = (0, $60c95f13b6c22875$export$57afafec4637d997)(el, node);
    const innerRef = (0, $hgUW1$useCallback)((n)=>{
        el.current = n;
        dropRef(n);
    }, [
        dropRef
    ]);
    const indent = tree.indent * node.level;
    const nodeStyle = (0, $hgUW1$useMemo)(()=>({
            paddingLeft: indent
        }), [
        indent
    ]);
    const rowStyle = (0, $hgUW1$useMemo)(()=>({
            ...style,
            top: parseFloat(style.top) + ((tree.props.padding ?? tree.props.paddingTop) ?? 0)
        }), [
        style,
        tree.props.padding,
        tree.props.paddingTop
    ]);
    const rowAttrs = {
        role: "treeitem",
        "aria-level": node.level,
        "aria-selected": node.isSelected,
        style: rowStyle,
        tabIndex: -1,
        className: tree.props.rowClassName
    };
    (0, $hgUW1$useEffect)(()=>{
        if (!node.isEditing && node.isFocused) el.current?.focus();
    }, [
        node.isEditing,
        node.isFocused,
        el.current
    ]);
    const Node = tree.renderNode;
    const Row = tree.renderRow;
    return /*#__PURE__*/ (0, $hgUW1$jsx)(Row, {
        node: node,
        innerRef: innerRef,
        attrs: rowAttrs,
        children: /*#__PURE__*/ (0, $hgUW1$jsx)(Node, {
            node: node,
            tree: tree,
            style: nodeStyle,
            dragHandle: dragRef
        })
    });
});


let $14e105aaf1949805$var$focusSearchTerm = "";
let $14e105aaf1949805$var$timeoutId = null;
function $14e105aaf1949805$export$ff4858a4110d9246() {
    (0, $f4ed15b55ee70bb8$export$83a4f9dc3b36edb8)();
    const tree = (0, $f4ed15b55ee70bb8$export$367b0f2231a90ba0)();
    return /*#__PURE__*/ (0, $hgUW1$jsx)("div", {
        style: {
            height: tree.height,
            width: tree.width,
            minHeight: 0,
            minWidth: 0
        },
        children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$FixedSizeList), {
            className: tree.props.className,
            outerRef: tree.listEl,
            itemCount: tree.visibleNodes.length,
            height: tree.height,
            width: tree.width,
            itemSize: tree.rowHeight,
            itemKey: (index)=>tree.visibleNodes[index]?.id || index,
            outerElementType: (0, $1712c1958416fa12$export$70c2b8898b86d3ad),
            innerElementType: (0, $244de757158eecf7$export$a9af0da3ae60cd00),
            onScroll: tree.props.onScroll,
            onItemsRendered: tree.onItemsRendered.bind(tree),
            ref: tree.list,
            children: (0, $4faac6a0e4c550ff$export$a9754b3c8daa5172)
        })
    });
}


function $04d0b24e7c5af142$export$5897d8d7c7a3d871(tree) {
    if (tree.isFiltered) return $04d0b24e7c5af142$var$flattenAndFilterTree(tree.root, tree.isMatch.bind(tree));
    else return $04d0b24e7c5af142$var$flattenTree(tree.root);
}
function $04d0b24e7c5af142$var$flattenTree(root) {
    const list = [];
    function collect(node) {
        if (node.level >= 0) list.push(node);
        if (node.isOpen) node.children?.forEach(collect);
    }
    collect(root);
    list.forEach($04d0b24e7c5af142$var$assignRowIndex);
    return list;
}
function $04d0b24e7c5af142$var$flattenAndFilterTree(root, isMatch) {
    function collect(node) {
        let result = [];
        const yes = !node.isRoot && isMatch(node);
        if (node.children) for (let child of node.children)result = result.concat(collect(child));
        if (result.length) {
            if (!node.isRoot) result.unshift(node);
            return result;
        }
        if (yes) return [
            node
        ];
        else return [];
    }
    const list = collect(root).filter((n)=>n.parent?.isOpen);
    list.forEach($04d0b24e7c5af142$var$assignRowIndex);
    return list;
}
function $04d0b24e7c5af142$var$assignRowIndex(node, index) {
    node.rowIndex = index;
}


const $5b90a997a7666e37$export$c6d108d7c8095f19 = (nodes)=>{
    return nodes.reduce((map, node, index)=>{
        map[node.id] = index;
        return map;
    }, {});
};


const { safeRun: $badb6758e30dd716$var$safeRun , identify: $badb6758e30dd716$var$identify , identifyNull: $badb6758e30dd716$var$identifyNull  } = $fab42eb3dee39b5b$exports;
class $badb6758e30dd716$export$e2da3477247342d1 {
    constructor(store, props, list, listEl){
        this.store = store;
        this.props = props;
        this.list = list;
        this.listEl = listEl;
        this.visibleStartIndex = 0;
        this.visibleStopIndex = 0;
        /* Changes here must also be made in update() */ this.root = (0, $04514ba8ecc1e155$export$882461b6382ed46c)(this);
        this.visibleNodes = (0, $04d0b24e7c5af142$export$5897d8d7c7a3d871)(this);
        this.idToIndex = (0, $5b90a997a7666e37$export$c6d108d7c8095f19)(this.visibleNodes);
    }
    /* Changes here must also be made in constructor() */ update(props) {
        this.props = props;
        this.root = (0, $04514ba8ecc1e155$export$882461b6382ed46c)(this);
        this.visibleNodes = (0, $04d0b24e7c5af142$export$5897d8d7c7a3d871)(this);
        this.idToIndex = (0, $5b90a997a7666e37$export$c6d108d7c8095f19)(this.visibleNodes);
    }
    /* Store helpers */ dispatch(action) {
        return this.store.dispatch(action);
    }
    get state() {
        return this.store.getState();
    }
    get openState() {
        return this.state.nodes.open.unfiltered;
    }
    /* Tree Props */ get width() {
        return this.props.width ?? 300;
    }
    get height() {
        return this.props.height ?? 500;
    }
    get indent() {
        return this.props.indent ?? 24;
    }
    get rowHeight() {
        return this.props.rowHeight ?? 24;
    }
    get searchTerm() {
        return (this.props.searchTerm || "").trim();
    }
    get matchFn() {
        const match = this.props.searchMatch ?? ((node, term)=>{
            const string = JSON.stringify(Object.values(node.data));
            return string.toLocaleLowerCase().includes(term.toLocaleLowerCase());
        });
        return (node)=>match(node, this.searchTerm);
    }
    accessChildren(data) {
        const get = this.props.childrenAccessor || "children";
        return $fab42eb3dee39b5b$exports.access(data, get) ?? null;
    }
    accessId(data) {
        const get = this.props.idAccessor || "id";
        const id = $fab42eb3dee39b5b$exports.access(data, get);
        if (!id) throw new Error("Data must contain an 'id' property or props.idAccessor must return a string");
        return id;
    }
    /* Node Access */ get firstNode() {
        return this.visibleNodes[0] ?? null;
    }
    get lastNode() {
        return this.visibleNodes[this.visibleNodes.length - 1] ?? null;
    }
    get focusedNode() {
        return this.get(this.state.nodes.focus.id) ?? null;
    }
    get mostRecentNode() {
        return this.get(this.state.nodes.selection.mostRecent) ?? null;
    }
    get nextNode() {
        const index = this.indexOf(this.focusedNode);
        if (index === null) return null;
        else return this.at(index + 1);
    }
    get prevNode() {
        const index = this.indexOf(this.focusedNode);
        if (index === null) return null;
        else return this.at(index - 1);
    }
    get(id) {
        if (!id) return null;
        if (id in this.idToIndex) return this.visibleNodes[this.idToIndex[id]] || null;
        else return null;
    }
    at(index) {
        return this.visibleNodes[index] || null;
    }
    nodesBetween(startId, endId) {
        if (startId === null || endId === null) return [];
        const index1 = this.indexOf(startId) ?? 0;
        const index2 = this.indexOf(endId);
        if (index2 === null) return [];
        const start = Math.min(index1, index2);
        const end = Math.max(index1, index2);
        return this.visibleNodes.slice(start, end + 1);
    }
    indexOf(id) {
        const key = $fab42eb3dee39b5b$exports.identifyNull(id);
        if (!key) return null;
        return this.idToIndex[key];
    }
    /* Data Operations */ get editingId() {
        return this.state.nodes.edit.id;
    }
    createInternal() {
        return this.create({
            type: "internal"
        });
    }
    createLeaf() {
        return this.create({
            type: "leaf"
        });
    }
    async create(opts = {}) {
        const parentId = opts.parentId === undefined ? $fab42eb3dee39b5b$exports.getInsertParentId(this) : opts.parentId;
        const index = opts.index ?? $fab42eb3dee39b5b$exports.getInsertIndex(this);
        const type = opts.type ?? "leaf";
        const data = await $badb6758e30dd716$var$safeRun(this.props.onCreate, {
            type: type,
            parentId: parentId,
            index: index,
            parentNode: this.get(parentId)
        });
        if (data) {
            this.focus(data);
            setTimeout(()=>{
                this.edit(data).then(()=>{
                    this.select(data);
                    this.activate(data);
                });
            });
        }
    }
    async delete(node) {
        if (!node) return;
        const idents = Array.isArray(node) ? node : [
            node
        ];
        const ids = idents.map($badb6758e30dd716$var$identify);
        const nodes = ids.map((id)=>this.get(id)).filter((n)=>!!n);
        await $badb6758e30dd716$var$safeRun(this.props.onDelete, {
            nodes: nodes,
            ids: ids
        });
    }
    edit(node) {
        const id = $badb6758e30dd716$var$identify(node);
        this.resolveEdit({
            cancelled: true
        });
        this.scrollTo(id);
        this.dispatch((0, $0653cf521546277e$export$e1a8e267487c59d1)(id));
        return new Promise((resolve)=>{
            $badb6758e30dd716$export$e2da3477247342d1.editPromise = resolve;
        });
    }
    async submit(identity, value) {
        if (!identity) return;
        const id = $badb6758e30dd716$var$identify(identity);
        await $badb6758e30dd716$var$safeRun(this.props.onRename, {
            id: id,
            name: value,
            node: this.get(id)
        });
        this.dispatch((0, $0653cf521546277e$export$e1a8e267487c59d1)(null));
        this.resolveEdit({
            cancelled: false,
            value: value
        });
        setTimeout(()=>this.onFocus()); // Return focus to element;
    }
    reset() {
        this.dispatch((0, $0653cf521546277e$export$e1a8e267487c59d1)(null));
        this.resolveEdit({
            cancelled: true
        });
        setTimeout(()=>this.onFocus()); // Return focus to element;
    }
    activate(id) {
        const node = this.get($badb6758e30dd716$var$identifyNull(id));
        if (!node) return;
        $badb6758e30dd716$var$safeRun(this.props.onActivate, node);
    }
    resolveEdit(value) {
        const resolve = $badb6758e30dd716$export$e2da3477247342d1.editPromise;
        if (resolve) resolve(value);
        $badb6758e30dd716$export$e2da3477247342d1.editPromise = null;
    }
    /* Focus and Selection */ get selectedIds() {
        return this.state.nodes.selection.ids;
    }
    get selectedNodes() {
        let nodes = [];
        for (let id of Array.from(this.selectedIds)){
            const node = this.get(id);
            if (node) nodes.push(node);
        }
        return nodes;
    }
    focus(node, opts = {}) {
        if (!node) return;
        /* Focus is responsible for scrolling, while selection is
     * responsible for focus. If selectionFollowsFocus, then
     * just select it. */ if (this.props.selectionFollowsFocus) this.select(node);
        else {
            this.dispatch((0, $eb3d9db7e5c4e4b5$export$d7ddd398f22d79ef)($badb6758e30dd716$var$identify(node)));
            if (opts.scroll !== false) this.scrollTo(node);
            if (this.focusedNode) $badb6758e30dd716$var$safeRun(this.props.onFocus, this.focusedNode);
        }
    }
    pageUp() {
        const start = this.visibleStartIndex;
        const stop = this.visibleStopIndex;
        const page = stop - start;
        let index = this.focusedNode?.rowIndex ?? 0;
        if (index > start) index = start;
        else index = Math.max(start - page, 0);
        this.focus(this.at(index));
    }
    pageDown() {
        const start = this.visibleStartIndex;
        const stop = this.visibleStopIndex;
        const page = stop - start;
        let index = this.focusedNode?.rowIndex ?? 0;
        if (index < stop) index = stop;
        else index = Math.min(index + page, this.visibleNodes.length - 1);
        this.focus(this.at(index));
    }
    select(node, opts = {}) {
        if (!node) return;
        const id = $badb6758e30dd716$var$identify(node);
        this.dispatch((0, $eb3d9db7e5c4e4b5$export$d7ddd398f22d79ef)(id));
        this.dispatch((0, $33cb815da494952c$export$e324594224ef24da).only(id));
        this.dispatch((0, $33cb815da494952c$export$e324594224ef24da).anchor(id));
        this.dispatch((0, $33cb815da494952c$export$e324594224ef24da).mostRecent(id));
        this.scrollTo(id, opts.align);
        if (this.focusedNode) $badb6758e30dd716$var$safeRun(this.props.onFocus, this.focusedNode);
        $badb6758e30dd716$var$safeRun(this.props.onSelect, this.selectedNodes);
    }
    deselect(node) {
        if (!node) return;
        const id = $badb6758e30dd716$var$identify(node);
        this.dispatch((0, $33cb815da494952c$export$e324594224ef24da).remove(id));
    }
    selectMulti(identity) {
        const node = this.get($badb6758e30dd716$var$identifyNull(identity));
        if (!node) return;
        this.dispatch((0, $eb3d9db7e5c4e4b5$export$d7ddd398f22d79ef)(node.id));
        this.dispatch((0, $33cb815da494952c$export$e324594224ef24da).add(node.id));
        this.dispatch((0, $33cb815da494952c$export$e324594224ef24da).anchor(node.id));
        this.dispatch((0, $33cb815da494952c$export$e324594224ef24da).mostRecent(node.id));
        this.scrollTo(node);
        if (this.focusedNode) $badb6758e30dd716$var$safeRun(this.props.onFocus, this.focusedNode);
        $badb6758e30dd716$var$safeRun(this.props.onSelect, this.selectedNodes);
    }
    selectContiguous(identity) {
        if (!identity) return;
        const id = $badb6758e30dd716$var$identify(identity);
        const { anchor: anchor , mostRecent: mostRecent  } = this.state.nodes.selection;
        this.dispatch((0, $eb3d9db7e5c4e4b5$export$d7ddd398f22d79ef)(id));
        this.dispatch((0, $33cb815da494952c$export$e324594224ef24da).remove(this.nodesBetween(anchor, mostRecent)));
        this.dispatch((0, $33cb815da494952c$export$e324594224ef24da).add(this.nodesBetween(anchor, $badb6758e30dd716$var$identifyNull(id))));
        this.dispatch((0, $33cb815da494952c$export$e324594224ef24da).mostRecent(id));
        this.scrollTo(id);
        if (this.focusedNode) $badb6758e30dd716$var$safeRun(this.props.onFocus, this.focusedNode);
        $badb6758e30dd716$var$safeRun(this.props.onSelect, this.selectedNodes);
    }
    deselectAll() {
        this.dispatch((0, $33cb815da494952c$export$e324594224ef24da).clear());
        this.dispatch((0, $33cb815da494952c$export$e324594224ef24da).anchor(null));
        this.dispatch((0, $33cb815da494952c$export$e324594224ef24da).mostRecent(null));
        $badb6758e30dd716$var$safeRun(this.props.onSelect, this.selectedNodes);
    }
    selectAll() {
        this.dispatch((0, $33cb815da494952c$export$e324594224ef24da).set(new Set(Object.keys(this.idToIndex))));
        this.dispatch((0, $eb3d9db7e5c4e4b5$export$d7ddd398f22d79ef)(this.lastNode?.id));
        this.dispatch((0, $33cb815da494952c$export$e324594224ef24da).anchor(this.firstNode));
        this.dispatch((0, $33cb815da494952c$export$e324594224ef24da).mostRecent(this.lastNode));
        if (this.focusedNode) $badb6758e30dd716$var$safeRun(this.props.onFocus, this.focusedNode);
        $badb6758e30dd716$var$safeRun(this.props.onSelect, this.selectedNodes);
    }
    /* Drag and Drop */ get cursorParentId() {
        const { cursor: cursor  } = this.state.dnd;
        switch(cursor.type){
            case "highlight":
                return cursor.id;
            default:
                return null;
        }
    }
    get cursorOverFolder() {
        return this.state.dnd.cursor.type === "highlight";
    }
    hideCursor() {
        this.dispatch((0, $d4a160479bbc41b1$export$e324594224ef24da).cursor({
            type: "none"
        }));
    }
    showCursor(cursor) {
        this.dispatch((0, $d4a160479bbc41b1$export$e324594224ef24da).cursor(cursor));
    }
    /* Visibility */ open(identity) {
        const id = $badb6758e30dd716$var$identifyNull(identity);
        if (!id) return;
        if (this.isOpen(id)) return;
        this.dispatch((0, $1c61be8efb674d8d$export$e324594224ef24da).open(id, this.isFiltered));
        $badb6758e30dd716$var$safeRun(this.props.onToggle, id);
    }
    close(identity) {
        const id = $badb6758e30dd716$var$identifyNull(identity);
        if (!id) return;
        if (!this.isOpen(id)) return;
        this.dispatch((0, $1c61be8efb674d8d$export$e324594224ef24da).close(id, this.isFiltered));
        $badb6758e30dd716$var$safeRun(this.props.onToggle, id);
    }
    toggle(identity) {
        const id = $badb6758e30dd716$var$identifyNull(identity);
        if (!id) return;
        return this.isOpen(id) ? this.close(id) : this.open(id);
    }
    openParents(identity) {
        const id = $badb6758e30dd716$var$identifyNull(identity);
        if (!id) return;
        const node = $fab42eb3dee39b5b$exports.dfs(this.root, id);
        let parent = node?.parent;
        while(parent){
            this.open(parent.id);
            parent = parent.parent;
        }
    }
    openSiblings(node) {
        const parent = node.parent;
        if (!parent) this.toggle(node.id);
        else if (parent.children) {
            const isOpen = node.isOpen;
            for (let sibling of parent.children)if (sibling.isInternal) isOpen ? this.close(sibling.id) : this.open(sibling.id);
            this.scrollTo(this.focusedNode);
        }
    }
    openAll() {
        $fab42eb3dee39b5b$exports.walk(this.root, (node)=>{
            if (node.isInternal) node.open();
        });
    }
    closeAll() {
        $fab42eb3dee39b5b$exports.walk(this.root, (node)=>{
            if (node.isInternal) node.close();
        });
    }
    /* Scrolling */ scrollTo(identity, align = "smart") {
        if (!identity) return;
        const id = $badb6758e30dd716$var$identify(identity);
        this.openParents(id);
        return $fab42eb3dee39b5b$exports.waitFor(()=>id in this.idToIndex).then(()=>{
            const index = this.idToIndex[id];
            if (index === undefined) return;
            this.list.current?.scrollToItem(index, align);
        }).catch(()=>{
            console.log(`Id: ${id} never appeared in the list.`);
        });
    }
    /* State Checks */ get isEditing() {
        return this.state.nodes.edit.id !== null;
    }
    get isFiltered() {
        return !!this.props.searchTerm?.trim();
    }
    get hasFocus() {
        return this.state.nodes.focus.treeFocused;
    }
    get hasNoSelection() {
        return this.state.nodes.selection.ids.size === 0;
    }
    get hasOneSelection() {
        return this.state.nodes.selection.ids.size === 1;
    }
    get hasMultipleSelections() {
        return this.state.nodes.selection.ids.size > 1;
    }
    isSelected(id) {
        if (!id) return false;
        return this.state.nodes.selection.ids.has(id);
    }
    isOpen(id) {
        if (!id) return false;
        if (id === (0, $04514ba8ecc1e155$export$ec71a3379b43ae5c)) return true;
        const def = this.props.openByDefault ?? true;
        if (this.isFiltered) return this.state.nodes.open.filtered[id] ?? true; // Filtered folders are always opened by default
        else return this.state.nodes.open.unfiltered[id] ?? def;
    }
    isDraggable(data) {
        const check = this.props.disableDrag || (()=>false);
        return !$fab42eb3dee39b5b$exports.access(data, check) ?? true;
    }
    isDroppable(data) {
        const check = this.props.disableDrop || (()=>false);
        return !$fab42eb3dee39b5b$exports.access(data, check) ?? true;
    }
    isDragging(node) {
        const id = $badb6758e30dd716$var$identifyNull(node);
        if (!id) return false;
        return this.state.nodes.drag.id === id;
    }
    isFocused(id) {
        return this.hasFocus && this.state.nodes.focus.id === id;
    }
    isMatch(node) {
        return this.matchFn(node);
    }
    willReceiveDrop(node) {
        const id = $badb6758e30dd716$var$identifyNull(node);
        if (!id) return false;
        return id === this.state.nodes.drag.idWillReceiveDrop;
    }
    /* Tree Event Handlers */ onFocus() {
        const node = this.focusedNode || this.firstNode;
        if (node) this.dispatch((0, $eb3d9db7e5c4e4b5$export$d7ddd398f22d79ef)(node.id));
    }
    onBlur() {
        this.dispatch((0, $eb3d9db7e5c4e4b5$export$6b6c976e46a06288)());
    }
    onItemsRendered(args) {
        this.visibleStartIndex = args.visibleStartIndex;
        this.visibleStopIndex = args.visibleStopIndex;
    }
    /* Get Renderers */ get renderContainer() {
        return this.props.renderContainer || (0, $14e105aaf1949805$export$ff4858a4110d9246);
    }
    get renderRow() {
        return this.props.renderRow || (0, $b2b9258243d0947f$export$f9c541e71856c524);
    }
    get renderNode() {
        return this.props.children || (0, $1cf21b02c215d80f$export$909e23cbfbbd3351);
    }
    get renderDragPreview() {
        return this.props.renderDragPreview || (0, $9746410ec71fd03a$export$84e211ad8431a387);
    }
    get renderCursor() {
        return this.props.renderCursor || (0, $1f311251559e07c9$export$6cb3c16721363d11);
    }
}









function $195257341c49be33$export$1650419e431d3ba3(state = {
    id: null,
    idWillReceiveDrop: null
}, action) {
    switch(action.type){
        case "DND_DRAG_START":
            return {
                ...state,
                id: action.id
            };
        case "DND_DRAG_END":
            return {
                ...state,
                id: null
            };
        case "DND_CURSOR":
            const c = action.cursor;
            if (c.type === "highlight" && c.id !== state.idWillReceiveDrop) return {
                ...state,
                idWillReceiveDrop: c.id
            };
            else if (c.type !== "highlight" && state.idWillReceiveDrop !== null) return {
                ...state,
                idWillReceiveDrop: null
            };
            else return state;
        default:
            return state;
    }
}


const $686185383ec202ea$export$a8a69c316169e623 = (0, $hgUW1$combineReducers)({
    nodes: (0, $hgUW1$combineReducers)({
        focus: $eb3d9db7e5c4e4b5$export$1650419e431d3ba3,
        edit: $0653cf521546277e$export$1650419e431d3ba3,
        open: $1c61be8efb674d8d$export$1650419e431d3ba3,
        selection: $33cb815da494952c$export$1650419e431d3ba3,
        drag: $195257341c49be33$export$1650419e431d3ba3
    }),
    dnd: $d4a160479bbc41b1$export$1650419e431d3ba3
});






const $701ba38f84342b89$var$SERVER_STATE = (0, $cc76b5b84c1e0cdd$export$d4c72bab9d6cc13a)();
function $701ba38f84342b89$export$c49dab5eb1b4ce0c({ treeProps: treeProps , imperativeHandle: imperativeHandle , children: children  }) {
    const list = (0, $hgUW1$useRef)(null);
    const listEl = (0, $hgUW1$useRef)(null);
    const store = (0, $hgUW1$useRef)((0, $hgUW1$createStore)((0, $686185383ec202ea$export$a8a69c316169e623), (0, $cc76b5b84c1e0cdd$export$d4c72bab9d6cc13a)(treeProps)));
    const state = (0, $hgUW1$useSyncExternalStore)(store.current.subscribe, store.current.getState, ()=>$701ba38f84342b89$var$SERVER_STATE);
    /* The tree api object is stable. */ const api = (0, $hgUW1$useMemo)(()=>{
        return new (0, $badb6758e30dd716$export$e2da3477247342d1)(store.current, treeProps, list, listEl);
    }, []);
    /* Make sure the tree instance stays in sync */ const updateCount = (0, $hgUW1$useRef)(0);
    (0, $hgUW1$useMemo)(()=>{
        updateCount.current += 1;
        api.update(treeProps);
    }, [
        ...Object.values(treeProps),
        state.nodes.open
    ]);
    /* Expose the tree api */ (0, $hgUW1$useImperativeHandle)(imperativeHandle, ()=>api);
    /* Change selection based on props */ (0, $hgUW1$useEffect)(()=>{
        if (api.props.selection) api.select(api.props.selection);
        else api.deselectAll();
    }, [
        api.props.selection
    ]);
    /* Clear visability for filtered nodes */ (0, $hgUW1$useEffect)(()=>{
        if (!api.props.searchTerm) store.current.dispatch((0, $1c61be8efb674d8d$export$e324594224ef24da).clear(true));
    }, [
        api.props.searchTerm
    ]);
    return /*#__PURE__*/ (0, $hgUW1$jsx)((0, $f4ed15b55ee70bb8$export$feef243b04ff4151).Provider, {
        value: api,
        children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $f4ed15b55ee70bb8$export$d0c71bc5e3e2d897).Provider, {
            value: updateCount.current,
            children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $f4ed15b55ee70bb8$export$f6d467aa8b3786af).Provider, {
                value: state.nodes,
                children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $f4ed15b55ee70bb8$export$2d5c5ceac203fc1e).Provider, {
                    value: state.dnd,
                    children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$DndProvider), {
                        backend: (0, $hgUW1$HTML5Backend),
                        options: {
                            rootElement: api.props.dndRootElement || undefined
                        },
                        children: children
                    })
                })
            })
        })
    });
}






function $15a9acfdcd39710b$export$5a6c424b1725f44f() {
    const tree = (0, $f4ed15b55ee70bb8$export$367b0f2231a90ba0)();
    // In case we drop an item at the bottom of the list
    const [, drop] = (0, $hgUW1$useDrop)(()=>({
            accept: "NODE",
            hover: (item, m)=>{
                if (!m.isOver({
                    shallow: true
                })) return;
                if (m.canDrop()) {
                    const offset = m.getClientOffset();
                    if (!tree.listEl.current || !offset) return;
                    const { cursor: cursor  } = (0, $3f9bbcd042b3151a$export$f502ca02ebb85a1c)({
                        element: tree.listEl.current,
                        offset: offset,
                        indent: tree.indent,
                        node: null,
                        prevNode: tree.visibleNodes[tree.visibleNodes.length - 1],
                        nextNode: null
                    });
                    if (cursor) tree.showCursor(cursor);
                } else tree.hideCursor();
            },
            canDrop: (item, m)=>{
                if (!m.isOver({
                    shallow: true
                })) return false;
                if (tree.isFiltered) return false;
                const offset = m.getClientOffset();
                if (!tree.listEl.current || !offset) return false;
                const { drop: drop  } = (0, $3f9bbcd042b3151a$export$f502ca02ebb85a1c)({
                    element: tree.listEl.current,
                    offset: offset,
                    indent: tree.indent,
                    node: null,
                    prevNode: tree.visibleNodes[tree.visibleNodes.length - 1],
                    nextNode: null
                });
                if (!drop) return false;
                const dropParent = tree.get(drop.parentId) ?? tree.root;
                for (let id of item.dragIds){
                    const drag = tree.get(id);
                    if (!drag) return false;
                    if (!dropParent) return false;
                    if (drag.isInternal && (0, $fab42eb3dee39b5b$export$1e38f72c6c546f70)(dropParent, drag)) return false;
                }
                return true;
            },
            drop: (item, m)=>{
                if (m.didDrop()) return;
                const offset = m.getClientOffset();
                if (!tree.listEl.current || !offset) return;
                const { drop: drop  } = (0, $3f9bbcd042b3151a$export$f502ca02ebb85a1c)({
                    element: tree.listEl.current,
                    offset: offset,
                    indent: tree.indent,
                    node: null,
                    prevNode: tree.visibleNodes[tree.visibleNodes.length - 1],
                    nextNode: null
                });
                return drop;
            }
        }), [
        tree
    ]);
    drop(tree.listEl);
}


function $70f07a0a4836b6bd$export$a6ee728c3c6ef11d(props) {
    (0, $15a9acfdcd39710b$export$5a6c424b1725f44f)();
    return props.children;
}






function $1de3b6514a984643$export$cdf2ef3f6364d85() {
    const tree = (0, $f4ed15b55ee70bb8$export$367b0f2231a90ba0)();
    const Container = tree.props.renderContainer || (0, $14e105aaf1949805$export$ff4858a4110d9246);
    return /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$Fragment), {
        children: /*#__PURE__*/ (0, $hgUW1$jsx)(Container, {})
    });
}






function $82133e20a315bb64$export$3e21b60650ec7e55() {
    const tree = (0, $f4ed15b55ee70bb8$export$367b0f2231a90ba0)();
    const { offset: offset , mouse: mouse , item: item , isDragging: isDragging  } = (0, $hgUW1$useDragLayer)((m)=>{
        return {
            offset: m.getSourceClientOffset(),
            mouse: m.getClientOffset(),
            item: m.getItem(),
            isDragging: m.isDragging()
        };
    });
    const DragPreview = tree.props.renderDragPreview || (0, $9746410ec71fd03a$export$84e211ad8431a387);
    return /*#__PURE__*/ (0, $hgUW1$jsx)(DragPreview, {
        offset: offset,
        mouse: mouse,
        id: item?.id || null,
        dragIds: item?.dragIds || [],
        isDragging: isDragging
    });
}


var $1f9876c2c91e41f6$exports = {};

$parcel$export($1f9876c2c91e41f6$exports, "useSimpleTree", () => $1f9876c2c91e41f6$export$dcd27aa2043b2724);

var $2426d842c0aef9d3$exports = {};

$parcel$export($2426d842c0aef9d3$exports, "SimpleTree", () => $2426d842c0aef9d3$export$e32206264f456dce);
class $2426d842c0aef9d3$export$e32206264f456dce {
    constructor(data){
        this.root = $2426d842c0aef9d3$var$createRoot(data);
    }
    get data() {
        return this.root.children?.map((node)=>node.data) ?? [];
    }
    create(args) {
        const parent = args.parentId ? this.find(args.parentId) : this.root;
        if (!parent) return null;
        parent.addChild(args.data, args.index);
    }
    move(args) {
        const src = this.find(args.id);
        const parent = args.parentId ? this.find(args.parentId) : this.root;
        if (!src || !parent) return;
        parent.addChild(src.data, args.index);
        src.drop();
    }
    update(args) {
        const node = this.find(args.id);
        if (node) node.update(args.changes);
    }
    drop(args) {
        const node = this.find(args.id);
        if (node) node.drop();
    }
    find(id, node = this.root) {
        if (!node) return null;
        if (node.id === id) return node;
        if (node.children) {
            for (let child of node.children){
                const found = this.find(id, child);
                if (found) return found;
            }
            return null;
        }
        return null;
    }
}
function $2426d842c0aef9d3$var$createRoot(data) {
    const root = new $2426d842c0aef9d3$var$SimpleNode({
        id: "ROOT"
    }, null);
    root.children = data.map((d)=>$2426d842c0aef9d3$var$createNode(d, root));
    return root;
}
function $2426d842c0aef9d3$var$createNode(data, parent) {
    const node = new $2426d842c0aef9d3$var$SimpleNode(data, parent);
    if (data.children) node.children = data.children.map((d)=>$2426d842c0aef9d3$var$createNode(d, node));
    return node;
}
class $2426d842c0aef9d3$var$SimpleNode {
    constructor(data, parent){
        this.data = data;
        this.parent = parent;
        this.id = data.id;
    }
    hasParent() {
        return !!this.parent;
    }
    get childIndex() {
        return this.hasParent() ? this.parent.children.indexOf(this) : -1;
    }
    addChild(data, index) {
        const node = $2426d842c0aef9d3$var$createNode(data, this);
        this.children = this.children ?? [];
        this.children.splice(index, 0, node);
        this.data.children = this.data.children ?? [];
        this.data.children.splice(index, 0, data);
    }
    removeChild(index) {
        this.children?.splice(index, 1);
        this.data.children?.splice(index, 1);
    }
    update(changes) {
        if (this.hasParent()) {
            const i = this.childIndex;
            this.parent.addChild({
                ...this.data,
                ...changes
            }, i);
            this.drop();
        }
    }
    drop() {
        if (this.hasParent()) this.parent.removeChild(this.childIndex);
    }
}


let $1f9876c2c91e41f6$var$nextId = 0;
function $1f9876c2c91e41f6$export$dcd27aa2043b2724(initialData) {
    const [data, setData] = (0, $hgUW1$useState)(initialData);
    const tree = (0, $hgUW1$useMemo)(()=>new (0, $2426d842c0aef9d3$export$e32206264f456dce)(data), [
        data
    ]);
    const onMove = (args)=>{
        for (const id of args.dragIds)tree.move({
            id: id,
            parentId: args.parentId,
            index: args.index
        });
        setData(tree.data);
    };
    const onRename = ({ name: name , id: id  })=>{
        tree.update({
            id: id,
            changes: {
                name: name
            }
        });
        setData(tree.data);
    };
    const onCreate = ({ parentId: parentId , index: index , type: type  })=>{
        const data = {
            id: `simple-tree-id-${$1f9876c2c91e41f6$var$nextId++}`,
            name: ""
        };
        if (type === "internal") data.children = [];
        tree.create({
            parentId: parentId,
            index: index,
            data: data
        });
        setData(tree.data);
        return data;
    };
    const onDelete = (args)=>{
        args.ids.forEach((id)=>tree.drop({
                id: id
            }));
        setData(tree.data);
    };
    const controller = {
        onMove: onMove,
        onRename: onRename,
        onCreate: onCreate,
        onDelete: onDelete
    };
    return [
        data,
        controller
    ];
}


function $347ddbd59946cb18$export$d227906824a13416(props) {
    if (props.initialData && props.data) throw new Error(`React Arborist Tree => Provide either a data or initialData prop, but not both.`);
    if (props.initialData && (props.onCreate || props.onDelete || props.onMove || props.onRename)) throw new Error(`React Arborist Tree => You passed the initialData prop along with a data handler.
Use the data prop if you want to provide your own handlers.`);
    if (props.initialData) {
        /**
     * Let's break the rules of hooks here. If the initialData prop
     * is provided, we will assume it will not change for the life of
     * the component.
     *
     * We will provide the real data and the handlers to update it.
     *   */ const [data, controller] = (0, $1f9876c2c91e41f6$export$dcd27aa2043b2724)(props.initialData);
        return {
            ...props,
            ...controller,
            data: data
        };
    } else return props;
}


const $2ff25b50090add72$export$7fbedc92909ed28e = /*#__PURE__*/ (0, $hgUW1$forwardRef)(function Tree(props, ref) {
    const treeProps = (0, $347ddbd59946cb18$export$d227906824a13416)(props);
    return /*#__PURE__*/ (0, $hgUW1$jsxs)((0, $701ba38f84342b89$export$c49dab5eb1b4ce0c), {
        treeProps: treeProps,
        imperativeHandle: ref,
        children: [
            /*#__PURE__*/ (0, $hgUW1$jsx)((0, $70f07a0a4836b6bd$export$a6ee728c3c6ef11d), {
                children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $1de3b6514a984643$export$cdf2ef3f6364d85), {})
            }),
            /*#__PURE__*/ (0, $hgUW1$jsx)((0, $82133e20a315bb64$export$3e21b60650ec7e55), {})
        ]
    });
});


var $879a759e1a6a8d69$exports = {};


var $fa7dfa180437344f$exports = {};


var $555ac9a55fb12221$exports = {};








export {$2ff25b50090add72$export$7fbedc92909ed28e as Tree, $bfd4e380870e2175$export$d4b903da0f522dc8 as NodeApi, $badb6758e30dd716$export$e2da3477247342d1 as TreeApi, $2426d842c0aef9d3$export$e32206264f456dce as SimpleTree, $1f9876c2c91e41f6$export$dcd27aa2043b2724 as useSimpleTree};
//# sourceMappingURL=module.js.map
