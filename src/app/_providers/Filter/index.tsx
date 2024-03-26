"use client"

import { useState, createContext, useContext, ReactNode, SetStateAction } from "react"

type ContextType = {
  categoryFilters: string[];
  setCategoryFilters: React.Dispatch<SetStateAction<string[]>>;
  sort: string;
  setSort: React.Dispatch<SetStateAction<string>>;
}

export const INITIAL_FILTER_DATA : ContextType = {
  categoryFilters: [],
  setCategoryFilters: () => [],
  sort: '',
  setSort: () => ''
}

export const FilterContext = createContext(INITIAL_FILTER_DATA);

export const FilterProvier = ({ children }: { children: ReactNode }) => {
  const [categoryFilters, setCategoryFilters] = useState([])
  const [sort, setSort] = useState('-createdAt')

  return (
    <FilterContext.Provider value={{
      categoryFilters,
      setCategoryFilters,
      sort,
      setSort
    }}>
      { children }
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext);