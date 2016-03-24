/**
 * User: liuxinyi/liu.xinyi@free-sun.com.cn
 */
'use strict';

// action types
export const COUNTER_INCREMENT = "COUNTER_INCREMENT";
export const COUNTER_DECREMENT = "COUNTER_DECREMENT";

// action creator
export function increment() {
    return {
        type: COUNTER_INCREMENT
    }
}

export function decrement() {
    return {
        type: COUNTER_DECREMENT
    }
}