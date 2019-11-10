/* eslint-disable import/prefer-default-export */
import { ADD_POST } from './actionTypes';

export const addPost = post => ({ type: ADD_POST, payload: post });
