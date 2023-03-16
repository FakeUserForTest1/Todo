import React from 'react';

import { useDispatchMainContentContext } from './contexts/MainContentContext.js';
import { deleteCell, updateCell } from './../model/cellStorageHandler.js';

import closeSvg from './../assets/icons/red_close.svg';
import './../assets/css/Cell.css';

export default function Cell({ cellObj }) {
  const dispatchMainContent = useDispatchMainContentContext();
  function deleteSelf() {
    deleteCell(cellObj.listId, cellObj.id)
    dispatchMainContent({ type: 'show_cells', id: cellObj.listId})
  }
  function handleChange(e) {
    const { name, checked} = e.target;
    updateCell(cellObj.listId, cellObj.id, name, checked)
    dispatchMainContent({ type: 'show_cells', id: cellObj.listId})
  }
  
  return (
    <li className='cells'>
      <input
        type='checkbox'
        name='completed'
        checked={cellObj.completed}
        onChange={handleChange}
      />
      <h4>{ cellObj.title }</h4>
      <span>{ cellObj.priority }</span>
      <button type='button' onClick={deleteSelf}><img src={closeSvg} alt='remove cell' /></button>
    </li>
  );
};