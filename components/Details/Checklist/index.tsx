import { useEffect, useState } from 'react'
import Checkbox from '@/components/Checkbox'

type ChecklistProps = {
  checklist: any
}

const Checklist = ({ checklist }: ChecklistProps) => {
  const [checkboxes, setCheckboxes] = useState(checklist)
  const [checkedCount, setCheckedCount] = useState(1)

  useEffect(() => {
    const count = checkboxes.reduce((accumulator: any, checkbox: any) => accumulator + (checkbox.isChecked ? 1 : 0), 0)
    setCheckedCount(count)
  }, [checkboxes])

  const handleCheckboxChange = (checkboxId: string) => {
    const updatedCheckboxes = [...checkboxes]
    const checkboxIndex = updatedCheckboxes.findIndex(checkbox => checkbox.id === checkboxId)
    updatedCheckboxes[checkboxIndex].isChecked = !updatedCheckboxes[checkboxIndex].isChecked
    setCheckboxes(updatedCheckboxes)
  }

  return (
    <div className="mt-5 border-t border-dashed border-n-1 pt-4 dark:border-white">
      <div className="mb-2 flex items-center justify-between">
        <div className="font-bold">Checklist</div>
        <div className="text-sm">
          {checkedCount} / {checkboxes.length}
        </div>
      </div>
      <div className="relative mb-4 h-1 bg-green-1">
        <div
          className="absolute bottom-0 left-0 top-0 bg-n-1/30"
          style={{
            width: (checkedCount / checkboxes.length) * 100 + '%',
          }}
        ></div>
      </div>
      <div className="flex flex-col items-start">
        {checklist.map((checkbox: any) => (
          <Checkbox
            className="mb-3 last:mb-0"
            label={checkbox.title}
            key={checkbox.id}
            value={checkbox.isChecked}
            onChange={() => handleCheckboxChange(checkbox.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Checklist
