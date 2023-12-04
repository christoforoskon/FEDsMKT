import Intro from '../../components/Intro/Intro'
import CoinsGrid from '../../components/CoinsGrid/CoinsGrid'
import Carousel from '../../components/Carousel/Carousel'
import Registration from '../../components/Registration/Registration'
import Services from '../../components/Services/Services'

import classes from './Home.module.css'
import Advantages from '../../components/Advantages/Advantages'

const Home = () => {
  const slides = [
    <div key="slide1" className={classes.slide} />,
    <div key="slide2" className={classes.slide} />,
    <div key="slide3" className={classes.slide} />,
    <div key="slide4" className={classes.slide} />,
    <div key="slide5" className={classes.slide} />,
    <div key="slide6" className={classes.slide} />,
  ];

  return (
    <>
      <div className={classes.container}>
        <Intro />
        <CoinsGrid />
        <Advantages />
        <Registration />

        <div className={classes.gna2} />
        <div className={classes.cubeGlass6} />
        <div className={classes.zeroBiggerTinted} />
        <div className={classes.gn1Img} />
        {/* <div className={classes.cubeGlass3} /> */}
        {/* <div className={classes.perforatedRing} /> */}
        <div className={classes.vector4} />
      </div >

      <div className={classes.gallery}>
        <h3>Event Gallery</h3>
        <Carousel slides={slides} />
      </div>

      <Services />

    </>
  )
}

export default Home