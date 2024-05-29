import { useState, useEffect, FC, useRef } from "react"
import Cards from "./cards/Cards"
import { cardsApiService } from "./cards/api/cards"
import { ICard } from "./cards/types/common"
import { TagFilter } from "./cards/TagFilter"

function App() {
  const [courses, setCourses] = useState<ICard[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [activeTag, setActiveTag] = useState('')

  const originalCourses = useRef<ICard[]>([])

  useEffect(() => {
    const fetchCards = async () => {
      const response = await cardsApiService.cardsList()
      const tagsSet = new Set<string>()
      response.data.forEach(course => course.tags.forEach(tag => tagsSet.add(tag)))
      setCourses(response.data)
      originalCourses.current = response.data
      setTags(Array.from(tagsSet))
    }

    fetchCards()
  }, [])

  useEffect(() => {
    if (activeTag) {
      setCourses(originalCourses.current.filter(course => course.tags.includes(activeTag)))
    } else {
      setCourses(originalCourses.current)
    }
  }, [activeTag])

  return (
    <div className="container flex gap-6">
      <TagFilter tags={tags} activeTag={activeTag} setActiveTag={setActiveTag} />
      <Cards cards={courses ?? []} />
    </div>
  )
}


export default App
