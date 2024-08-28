import { Map } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map();

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return state.merge(coursesNormalizer(action.data).entities.courses);
    case SELECT_COURSE:
      return state.setIn([action.index.toString(), 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn([action.index.toString(), 'isSelected'], false);
    default:
      return state;
  }
};

export default courseReducer;

