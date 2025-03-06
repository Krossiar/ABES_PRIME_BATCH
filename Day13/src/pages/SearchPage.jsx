import React from 'react'
import "./SearchPage.css"
import Cards from './Cards'
const cards=[
    {
        title:"Invitation",
        text:"You are invited"
    },
    {
        title:"Notice",
        text:"Please have a look on it."
    }
]
const SearchPage = () => {
  return (
    <div className='search-page'>
      <header>
        LOGO
      </header>
      <main>
        <h2>Search Here...</h2>
        <div>
            {cards.map((elem)=>{
                return(
                <Cards key={elem.title} title={elem.title} text={elem.text}></Cards>
                )
            })}
        </div>
        <p>We will help you search</p>
        <input/>
        <button>Search</button>
      </main>
      <footer>
        &copy; CopyRight @ Logo
      </footer>
    </div>
  )
}

export default SearchPage
