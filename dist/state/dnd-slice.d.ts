import { Cursor } from "../dnd/compute-drop";
import { ActionTypes } from "../types/utils";
export declare type DndState = {
    dragId: null | string;
    cursor: Cursor;
};
export declare const actions: {
    cursor(cursor: Cursor): {
        type: "DND_CURSOR";
        cursor: Cursor;
    };
    dragStart(id: string): {
        type: "DND_DRAG_START";
        id: string;
    };
    dragEnd(): {
        type: "DND_DRAG_END";
    };
};
export declare function reducer(state: DndState | undefined, action: ActionTypes<typeof actions>): DndState;
