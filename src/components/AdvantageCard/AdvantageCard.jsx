import classes from './AdvantageCard.module.css'


const AdvantageCard = ({ title, content, image }) => {
  return (
    <div className={classes.advantageCard}>
      <h2>{title}</h2>
      <img src={image} alt={image} />
      <hr className={classes.dividerGreen} />
      <h3 dangerouslySetInnerHTML={{ __html: content }}></h3>
    </div>
  )
}

export default AdvantageCard