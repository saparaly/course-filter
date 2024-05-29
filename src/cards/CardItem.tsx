import { FC } from "react"
import { ICard } from "./types/common"

export interface CardItemProps {
  card: ICard
}

const CardItem: FC<CardItemProps> = ({ card }) => {
  return (
    <div className="rounded-[18px] bg-white shadow-sm w-full h-fit overflow-hidden">
        <div className={`w-full h-[162px]`} style={{ backgroundColor: card.bgColor }}>
           <img className="w-full h-full object-contain" src={`${card.image}`} alt="" /> 
        </div>
        <div className="pt-3 px-[18px] pb-[18px]">
            <span>{card.name}</span>
        </div>
    </div>
  )
}

export default CardItem
