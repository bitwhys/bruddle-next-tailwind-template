import { useState } from 'react'
import Layout from '@/components/Layout'
import { DragDropContext, Droppable } from '@hello-pangea/dnd'
import Icon from '@/components/Icon'
import TaskCard from './TaskCard'

import { columnsFromBackend } from '@/mocks/kanban'

const KanbanDescPage = () => {
  const [columns, setColumns] = useState(columnsFromBackend)

  const onDragEnd = (result: any, columns: any, setColumns: any) => {
    if (!result.destination) return
    const { source, destination } = result
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId]
      const destColumn = columns[destination.droppableId]
      const sourceItems = [...sourceColumn.items]
      const destItems = [...destColumn.items]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      })
    } else {
      const column = columns[source.droppableId]
      const copiedItems = [...column.items]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      })
    }
  }
  return (
    <Layout title="Kanban Desk">
      <div className="2xl:-mx-8 lg:-mx-6 md:-mx-5">
        <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
          <div className="flex overflow-auto scroll-smooth scrollbar-none 2xl:before:w-8 2xl:before:shrink-0 2xl:after:w-8 2xl:after:shrink-0 lg:before:w-6 lg:after:w-6 md:before:w-5 md:after:w-5">
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <Droppable key={columnId} droppableId={columnId}>
                  {(provided, snapshot) => (
                    <div
                      className="mr-5 flex min-w-[20.2rem] flex-col pt-2 last:mr-0 lg:min-w-[19.3rem]"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <div className="mb-4 flex justify-between md:mb-2">
                        <div className="flex shrink-0 items-center">
                          <div
                            className="mr-3.5 h-2 w-2"
                            style={{
                              backgroundColor: column.color,
                            }}
                          ></div>
                          <div className="text-h4">{column.title}</div>
                        </div>
                        <button className="btn-stroke btn-small btn-square ml-3 shrink-0">
                          <Icon name="dots" />
                        </button>
                      </div>
                      {column.items.map((item: any, index) => (
                        <TaskCard key={item} item={item} index={index} />
                      ))}
                      {provided.placeholder}
                      <button className="mt-3 flex h-13 items-center justify-center border border-dashed border-n-1 text-xs font-bold transition-colors hover:!border-purple-1 dark:border-white">
                        <Icon className="mr-1.5 dark:fill-white" name="plus-circle" />
                        Add a task
                      </button>
                    </div>
                  )}
                </Droppable>
              )
            })}
          </div>
        </DragDropContext>
      </div>
    </Layout>
  )
}

export default KanbanDescPage
