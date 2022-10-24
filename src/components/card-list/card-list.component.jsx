import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = ({ canavarlar }) => (
  <div className='card-list'>
    {canavarlar.map((canavar) => {
      return <Card key={canavar.id} canavar={canavar} />
    })}
  </div>
)

export default CardList
