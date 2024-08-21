import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

test('selectCourse returns correct action', () => {
  expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
});

test('unSelectCourse returns correct action', () => {
  expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
});

