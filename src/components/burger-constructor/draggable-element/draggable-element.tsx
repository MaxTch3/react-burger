import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { FC, useRef } from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { REMOVE_INGREDIENT } from "../../../services/actions/ingredients-constructor";
import { TIngredient } from '../../../utils/component-types';

type TDraggableElementProps = {
  item: TIngredient;
  index: number;
  moveList: FC
}
type TDraggableElement = {
  type?: string;
  item: TIngredient;
  index: number;
};

const DraggableElement: FC<TDraggableElementProps> = ({ item, index, moveList }) => {

  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    type: 'item',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [, dropRef] = useDrop({
    accept: 'item',
    hover: (item: TDraggableElement, monitor: any) => {
      if (!ref.current) {return};
      const hoverIndex = index;
      const dragIndex = item.index;
      if (dragIndex === hoverIndex) { return };
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;
      moveList(dragIndex, hoverIndex);
      item.index = hoverIndex
    },
  })

  const ref = useRef<HTMLInputElement>(null);
  dragRef(dropRef(ref));
  const opacity = isDragging ? 0 : 1;

  return (
    <div style={{ display: 'flex', alignItems: 'center', opacity }}
      draggable
      ref={ref}
    >
      <DragIcon type='primary' />
      <ConstructorElement
        text={String(item?.name)}
        price={Number(item?.price)}
        thumbnail={String(item?.image)}
        extraClass='ml-2'
        handleClose={() => {
          dispatch({ type: REMOVE_INGREDIENT, item })
        }}
      />
    </div>
  )
}

export default DraggableElement;
