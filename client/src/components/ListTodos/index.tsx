// Components
import { TodoCard } from "src/components/TodoCard";

// Styling
import { useStyles } from './styles';

// Entities
import { Todo } from "src/entities/todo";

// Components
import AddTodoCard from "../AddTodoCard";

const ListTodos = ({ todos }: { todos: Todo[] }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                todos.map(todo => <TodoCard todo={todo} key={todo.title}/>)
            }

            {/*<AddTodoCard />*/}
        </div>
    );
}

export default ListTodos;