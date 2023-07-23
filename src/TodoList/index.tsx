import { useEffect, useState } from 'react';
import TaskList from '../Components/TaskList';
import * as S from './styles';

function TodoList() {
  const storageList = localStorage.getItem('@list');
  const [list, setList] = useState<Task[]>(storageList ? JSON.parse(storageList) : []);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    localStorage.setItem('@list', JSON.stringify(list));
  }, [list])

  const addTask = (form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault();
    if (!newItem) { return }

    setList([...list, { text: newItem, isCompleted: false }]);
    setNewItem('');
  }

  const deleteTask = (index: number) => {
    const newList = [...list];
    newList.splice(index,1);
    setList(newList);
  }

  const completeTaskHandler = (index: number) => {
    const newList = [...list]
    newList[index].isCompleted = !newList[index].isCompleted
    setList(newList);
  }

  const deleteAllTasks = () => {
    setList([]);
  }

  return(
    <S.Container>
      <S.Text>Lista de Tarefas</S.Text>
      <S.Form onSubmit={(form) => addTask(form)}>
        <S.InputText
          value={newItem}
          type='text'
          placeholder='Adicione uma tarefa'
          onChange={(e) => setNewItem(e.target.value)}
        />

        <S.SubmitButton
          type='submit'
        >
          Adicionar
        </S.SubmitButton>
      </S.Form>

      <TaskList
        deleteAll={() => deleteAllTasks()} 
        onCompleteTask={(index) => completeTaskHandler(index)} 
        onDelete={(index) => deleteTask(index)} 
        list={list} 
      />

    </S.Container>
	);
}

export default TodoList;