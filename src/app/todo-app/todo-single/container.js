import { connect } from 'react-redux';

import { actions } from '@state';
import presentational from './presentational';

const mapStateToProps = (state, ownProps) => ({
    todoList: state.todoList,
});

const mapDispatchToProps = {
    toggleTodo: actions.todoListActions.ToggleTodo
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(presentational);