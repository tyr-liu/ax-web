/**
 * User: liuxinyi/liu.xinyi@free-sun.com.cn
 */
'use strict';

// action types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// action creator
export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}