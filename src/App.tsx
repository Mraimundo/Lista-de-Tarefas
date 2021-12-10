import React, { useState } from 'react';
import { Item } from './types/Item';
import { AddArea } from './components/AddArea';
import { ListItem } from './components/ListItem';
import * as S from './App.styles';
export function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];

    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }


  const handleAddTaskChange = (id: number, done: boolean) => {
    let newList = [...list];

    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
      setList(newList);
    }

  }

  return (
    <S.Container>
      <S.Area>
        <S.Header>Lista de Tarefas</S.Header>

        <AddArea
          onEnter={handleAddTask}
        />

        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onChange={handleAddTaskChange}
          />
        ))}
      </S.Area>
    </S.Container>
  );
}

