import { useForm } from "react-hook-form";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";
import { ITodo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

const Wrapper = styled.div`
  /* padding-top: 10px; */
  background-color: ${(props) => props.theme.boardColor};
  border: 1px solid ${(props) => props.theme.lightGrayColor};
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  /* min-height: 300px; */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 400;
  margin-bottom: 10px;
  font-size: 20px;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.isDraggingFromThis
      ? "#b2bec3"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.2s ease-in-out;
  padding: 10px;
  min-height: 300px;
  padding-bottom: 35px;
  position: relative;
`;

const Form = styled.form`
  width: 100%;
  height: 26px;
  margin-bottom: 10px;
  input {
    padding: 4px 8px;
    width: 100%;
    border: none;
    background-color: inherit;
    border-bottom: 1px solid ${(props) => props.theme.mediumGrayColor};
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
  }
  input:focus {
    outline: none;
    border-bottom: 3px solid rgba(7, 91, 201, 0.5);
  }
  input:blur {
    border-bottom: 1px solid ${(props) => props.theme.mediumGrayColor};
  }
`;

const Text = styled.p`
  padding: 10px;
  font-size: 14px;
  color: gray;
  position: absolute;
  bottom: 0;
`;

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

interface IForm {
  toDo: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newToDo, ...allBoards[boardId]],
      };
    });
    setValue("toDo", "");
  };
  return (
    <Wrapper>
      <Droppable droppableId={boardId}>
        {(magic, info) => (
          <>
            <Area
              isDraggingOver={info.isDraggingOver}
              isDraggingFromThis={Boolean(info.draggingFromThisWith)}
              ref={magic.innerRef}
              {...magic.droppableProps}
            >
              <Title>{boardId}</Title>
              <Form onSubmit={handleSubmit(onValid)}>
                <input
                  {...register("toDo", { required: true })}
                  type="text"
                  placeholder={`Add task on ${boardId}`}
                  autoComplete="off"
                />
              </Form>
              {toDos.map((toDo, index) => (
                <DragabbleCard
                  key={toDo.id}
                  index={index}
                  toDoId={toDo.id}
                  toDoText={toDo.text}
                />
              ))}
              {magic.placeholder}
              <Text>+ Add another card</Text>
            </Area>
          </>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
