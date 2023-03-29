
import './Card.css';

const Card = (props) => {
  return (
    <>
        <div className="card reveal">
          <small className='mainsmall'>{props.title}</small>
            <form action='' className="hovertext">
            <fieldset>
              <legend>{props.title}</legend>
              <p>
                {props.para}
              </p>
            </fieldset>
            </form>
        </div>
    </>
  )
}

export default Card