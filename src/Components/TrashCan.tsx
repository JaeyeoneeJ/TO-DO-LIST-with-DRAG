import { useForm } from "react-hook-form";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";
import { ITodo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";
import { BsTrash } from "react-icons/bs";

const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
  cursor: pointer;
`;

interface IAreaProps {
  isDraggingOver: boolean;
}

const Area = styled.div<IAreaProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isDraggingOver ? "#f63d1c" : "#ff6347"};
  transition: all 0.5s;
  padding: 8px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0px 5px 10px hsla(0, 0%, 0%, 0.5);
  border-radius: 25px;
  :hover {
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  }
`;

function TrashCan() {
  return (
    <Wrapper>
      <Droppable droppableId="trashCan">
        {(magic, info) => (
          <Area
            isDraggingOver={info.isDraggingOver}
            ref={magic.innerRef}
            // {...magic.droppableProps}
          >
            <BsTrash size={25} color="white" />
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default TrashCan;
