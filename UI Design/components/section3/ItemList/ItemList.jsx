import Items from './Items'
import ZzPlant from '../../../assets/ZZ-Plant.png'
import HousePlant from '../../../assets/Leaf-Houseplant.png'
import PottedBamboo from '../../../assets/potted-bamboo-plant.png'
import FiddleLeafFig from '../../../assets/Fiddle-leaf-fig.png'

const items = [
  { elem: 'Zanzibar Gem', img: ZzPlant, price: '$23.99' },
  { elem: 'Leaf Houseplant', img: HousePlant, price: '$15.99' },
  { elem: 'Bamboo-Plant', img: PottedBamboo, price: '$18.99' },
  { elem: 'Fiddle Leaf Fig', img: FiddleLeafFig, price: '$22.99' },

]

const ItemList = () => {
  return (
    <div className='flex w-full min-w-0 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
      {items.map(({ elem, img, price }) => (
        <Items key={elem} elem={elem} img={img} price={price} />
      ))}
    </div>
  )
}

export default ItemList