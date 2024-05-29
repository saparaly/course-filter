import { FC } from "react"
import CardItem from "./CardItem"
import { ICard } from "./types/common"

export interface CardItemProps {
  cards: ICard[]
}

const Cards: FC<CardItemProps> = ({ cards }) => {

  return (
    <div>
      <div className="grid grid-cols-3 gap-[18px] w-full">
        {
          cards.map((card) => (
            <CardItem card={card} key={card.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Cards
