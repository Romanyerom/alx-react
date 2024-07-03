import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('mapStateToProps', () => {
  it('should return the correct isLoggedIn value from state', () => {
    const state = fromJS({
      ui: {
        isLoggedIn: true,
      },
    });
    const expectedProps = {
      isLoggedIn: true,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});

