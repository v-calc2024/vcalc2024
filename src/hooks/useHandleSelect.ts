import { useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'

export function useHandleSelect ({ defaultValue, handleSelect }: { defaultValue: string, handleSelect: (value: string) => void }) {
  const [filter, setFilter] = useState<string>(defaultValue)

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value)
    handleSelect(event.target.value)
  }

  return { handleChange, filter }
}
