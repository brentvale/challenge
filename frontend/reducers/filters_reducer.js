import { UPDATE_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultFilters = Object.freeze({
  searchQuery: ""
});

const FiltersReducer = (state = _defaultFilters, action) => {
  Object.freeze(state)
  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      searchQuery: action.value
    };
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};

export default FiltersReducer;