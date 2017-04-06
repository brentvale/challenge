import { combineReducers } from 'redux';

import providersAndOrganizationsReducer from './providers_and_organizations_reducer';
import filtersReducer from './filters_reducer';

const RootReducer = combineReducers({
  providersAndOrganizations: providersAndOrganizationsReducer,
	filters: filtersReducer
});

export default RootReducer;


