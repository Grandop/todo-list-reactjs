import * as S from './styles';
import emptyList from '../../assets/todo-empty.png';

interface TaskListProps {
  list: Task[];
  onDelete: (index: number) => void;
  onCompleteTask: (index: number) => void;
  deleteAll: () => void;
}

function TaskList({ list, onDelete, onCompleteTask, deleteAll}: TaskListProps) {
  return(
    <S.Container>
      { list.length < 1
        ?
        <img src={emptyList}/>
        :
        list.map((item, index) => (
          !item.isCompleted
          ?
          <S.Item key={index}>
            <S.TaskName onClick={() => onCompleteTask(index)}>{item.text}</S.TaskName>
            <S.DeleteButton onClick={() => onDelete(index)}>Deletar</S.DeleteButton>
          </S.Item>
          :
          <S.CompleteItem key={index} >
            <S.TaskNameComplete onClick={() => onCompleteTask(index)}>{item.text}</S.TaskNameComplete>
            <S.DeleteButton onClick={() => onDelete(index)}>Deletar</S.DeleteButton>
          </S.CompleteItem>
        ))
      }

      <S.DeleteAllButton onClick={deleteAll}>Deletar Todos</S.DeleteAllButton>
    </S.Container>
  );
}

export default TaskList;