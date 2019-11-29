import { connect } from 'react-redux';
import todoComponent from '../components/Todo';

const mapStateToProp = (state) => state.todo;

export default connect(mapStateToProp)(todoComponent);
