import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { REMOVE_INGREDIENT } from "../../../services/actions/ingredients-constructor";
import { ingredientType } from '../../../utils/componentTypes';

const DraggableElement = ({ item, index, moveList }) => {
  
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
    hover: (item, monitor) => {
      const hoverIndex = index;
      const dragIndex = item.index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;
      moveList(dragIndex, hoverIndex);
      item.index = hoverIndex
    },
  })

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));
  const opacity = isDragging ? 0 : 1;

  return (
    <div style={{ display: 'flex', alignItems: 'center', opacity }}
      draggable
      ref={dragDropRef}
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

DraggableElement.propTypes = {
  item: ingredientType,
  index: PropTypes.number.isRequired,
  moveList: PropTypes.func.isRequired
};

export default DraggableElement;
