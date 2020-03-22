// local dependencies
import { TYPE } from "./types";

const initial = {
  expectAnswer: false,
  initialized: false,
  errorMessage: null,
  today: {},
  list: []
};

export default function(state = initial, action) {
  const { type, ...options } = action;
  switch (type) {
    case TYPE.CLEAR:
      return { ...initial };
    case TYPE.META:
      return { ...state, ...options, data: state.data };
    default:
      return state;
  }
}