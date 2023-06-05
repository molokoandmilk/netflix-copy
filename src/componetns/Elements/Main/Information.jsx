import React from 'react'
import styles from './Main.module.scss'
import Button from '../../UI/Button/Button'

const Information = ({movie}) => {

  const addToFavorites = (movieName) => {
    let favorites = localStorage.getItem('favMovies')

    if(favorites){
      favorites = JSON.parse(favorites)
      localStorage.setItem('favMovies', movieName)
      alert(`${movieName} теперь в избраном`)
    }
    

  }

  return (
    <div className={styles.info}>
      <img src={movie.logo} alt={movie.name} width='200'></img>

      <div className={styles.additional}>
        <span>{movie.year}</span>
        <span>{movie.lomitAge}</span>
        <span>{movie.rating}</span>
        <span>{movie.duration}</span>
      </div>

      <div className={styles.description}>
        {movie.description}
      </div>

      <div className={styles.buttons}>
        <Button cb={() => console.log('video open')}>
          <i className='bx bx-play' style={{color:'#c62e21'}}></i>
          <span>Play</span>
        </Button>
        <Button cb={addToFavorites}>
          <i className='bx bx-plus'></i>
          <span>My list</span>
        </Button>
      </div>

    </div>
  )
}

export default Information
