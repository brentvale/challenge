import { connect } from 'react-redux';

import { updateFilter } from '../../actions/filter_actions';
import { asFilteredArray } from '../../reducers/selectors';

import StepTwo from './step_two';

const mapStateToProps = state => ({
	providersAndOrganizations: asFilteredArray(state),
	searchQuery: state.filters.searchQuery
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (value) => dispatch(updateFilter(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepTwo);