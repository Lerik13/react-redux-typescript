import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: React.FC = () => {
	const {todos, page, limit, error, loading} = useTypedSelector(state => state.todo)
	const {fetchTodos} = useActions()
	
	useEffect(() => {
		fetchTodos(page, limit)
	}, [])

	if (loading) {
		return <h1>Loading ...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			{todos. map(todo => 
				<div key={todo.id}>{todo.id} - {todo.title}</div>
			)}
		</div>
	);
};

export default TodoList;