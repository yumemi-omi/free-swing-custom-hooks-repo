import React, { useRef, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

interface DnDItem<T> {
  value: T;
  key: string;
  position: Position;
  element: HTMLElement;
}

interface DnDRef<T> {
  keys: Map<T, string>;
  dndItems: DnDItem<T>[];
  canCheckHovered: boolean;
  pointerPosition: Position;
  dragElement: DnDItem<T> | null;
}

interface DnDSortResult<T> {
  key: string;
  value: T;
  events: {
    ref: (elemet: HTMLElement | null) => void;
    onMouseDown: (event: React.MouseEvent<HTMLElement>) => void;
  };
}

export const useDnDSort = <T>(defaultItems: T[]): DnDSortResult<T>[] => {
  const [items, setItems] = useState(defaultItems);

  const state = useRef<DnDRef<T>>({
    dndItems: [],
    keys: new Map(),
    dragElement: null,
    canCheckHovered: true,
    pointerPosition: {
      x: 0,
      y: 0,
    },
  }).current;

  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const { dragElement, pointerPosition } = state;

    if (!dragElement) return;
    const x = clientX - pointerPosition.x;
    const y = clientY - pointerPosition.y;

    const dragStyle = dragElement.element.style;

    dragStyle.zIndex = '100';
    dragStyle.cursor = 'grabbing';
    dragStyle.transform = `translate(${x}px, ${y}px)`;
  };

  const onMouseUp = (event: MouseEvent) => {
    const { dragElement } = state;

    if (!dragElement) return;

    const dragStyle = dragElement.element.style;

    dragStyle.zIndex = '';
    dragStyle.cursor = '';
    dragStyle.transform = '';

    state.dragElement = null;

    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('mousemove', onMouseMove);
  };

  return items.map(
    (value: T): DnDSortResult<T> => {
      const key = state.keys.get(value) || Math.random().toString(16);

      state.keys.set(value, key);

      return {
        value,
        key,
        events: {
          ref: () => void 0,
          onMouseDown: (event: React.MouseEvent<HTMLElement>) => {
            const element = event.currentTarget;

            state.pointerPosition.x = event.clientX;
            state.pointerPosition.y = event.clientY;

            element.style.transition = '';
            element.style.cursor = 'grabbing';

            const { left: x, top: y } = element.getBoundingClientRect();
            const position: Position = { x, y };

            state.dragElement = { key, value, element, position };

            window.addEventListener('mouseup', onMouseUp);
            window.addEventListener('mousemove', onMouseMove);
          },
        },
      };
    }
  );
};
