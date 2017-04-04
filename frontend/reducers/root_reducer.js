import { combineReducers } from 'redux';

import providersReducer from './providers_reducer';
import organizationsReducer from './organizations_reducer';

const RootReducer = combineReducers({
  organizations: organizationsReducer,
  providers: providersReducer
});

export default RootReducer;


