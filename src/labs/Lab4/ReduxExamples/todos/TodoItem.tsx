import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./TodoReducer"

export default function TodoItem({todo}: {todo: any}) {
    const dispatch = useDispatch();
    return (
        <ListGroup.Item key={todo.id}>
            <Button onClick={() => dispatch(deleteTodo(todo.id))}
                id="Wd-delete-todo-click">Delete</Button>
            <Button onClick={() => dispatch(setTodo(todo))}
                id="Wd-set-todo-click">Edit</Button>
                {todo.title}
        </ListGroup.Item>
    );
}