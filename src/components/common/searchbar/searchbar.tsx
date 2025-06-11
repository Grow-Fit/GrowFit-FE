"use client"
import styles from "./searchbar.module.scss"
import { DeleteIcon, SearchIcon } from "@/components/common/icon"
import { useState } from "react"

const SearchBar = ({ placeholder, onSubmit }) => {
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const clearInput = () => {
    setValue("")
  }
  return (
    <div className={styles.searchbar}>
      <SearchIcon onClick={onSubmit} />
      <input placeholder={placeholder} value={value} onChange={handleChange} />
      {value && <DeleteIcon onClick={clearInput} />}
    </div>
  )
}

export default SearchBar
