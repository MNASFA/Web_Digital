import './Services.css'
import {Card,Confiance} from '../../Components/index';
import MostPopularData from '../../Data/MostPopularData';


const Services = () => {

 
  const services_cards = MostPopularData.map(card => {
    return <Card key={card.id} title={card.title} para={card.para}/>
  })

  return (
    <>
    <div className="service_container reveal">
      <div style={{marginBottom:'40px' , textAlign:'center'}}>
        <strong className="title">Services</strong>
      </div>
      <div className="cards">
          {services_cards}
      </div>
      <div>
        <Confiance/>
      </div>
    </div>
    </>
  )
}

export default Services