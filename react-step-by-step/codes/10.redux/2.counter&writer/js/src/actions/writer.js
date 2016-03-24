/**
 * Created by liu.xinyi
 * on 2016/3/24.
 */
'use strict';

// action types
export const WRITER_CHANGE = "WRITER_CHANGE";

// action creator
export function change(text) {
    return {
        type: WRITER_CHANGE,
        text: text
    }
}