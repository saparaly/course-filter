import { FC } from "react"
import { Button } from "../shared/Button"

export interface TagFilterProps {
  tags: string[]
  activeTag: string
  setActiveTag: (tag: string) => void
}

export const TagFilter: FC<TagFilterProps> = ({ tags, activeTag, setActiveTag }) => {
  return (
    <div className="flex flex-col border border-border p-2.5 rounded-[18px] min-w-[264px] h-fit">
      <Button variant={activeTag === "" ? "primary" : "default"} onClick={() => setActiveTag("")}>Все темы</Button>
      {tags.map(tag => (
        <Button 
          key={tag} 
          variant={activeTag === tag ? "primary" : "default"} 
          onClick={() => setActiveTag(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  )
}