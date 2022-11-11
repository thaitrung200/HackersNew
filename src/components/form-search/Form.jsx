import React from 'react'
import styles from './Form.module.css'

const Form = () => {
  return (
    <div className={styles.search}>
        <h2>Search Hacker News</h2>
        <form action="" className="form">
            <input type="text" placeholder='Search...' />
        </form>
    </div>
  )
}

export default Form
