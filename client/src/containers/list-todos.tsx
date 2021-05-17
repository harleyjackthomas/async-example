// Component
import ListTodos from "src/components/ListTodos";

// Redux
import { connect } from "react-redux";
import { State } from "src/store/reducers";

const mapStateToProps = (state: State) => ({
    todos: state.todos
});

const ListTodosContainer = connect(
    mapStateToProps,
)(ListTodos);

export default ListTodosContainer;