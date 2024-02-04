import React from 'react'
import './ArticlesSection.css'
import vektor from '../assets/image/vektor.svg'
import Card from './Card.jsx'
import bloglar from "../blogs.json"

const ArticlesSection = () => {
  return (
    <div className="container mt-5">
      <nav className='Tab-links d-flex justify-content-center gap-5'>
        <div className='position-relative'>
          <a href="#" className='nav-link articles-all'>All</a>
          <img src={vektor} alt="" className='position-absolute vektor' />
        </div>
        <a href="#" className='nav-link articles-a'>Case studies</a>
        <a href="#" className='nav-link articles-a'>Guides</a>
        <a href="#" className='nav-link articles-a'>Articles</a>
        <a href="#" className='nav-link articles-a'>Partner materials</a>
      </nav>
      <div className='articles-two row mt-5'>
        <div className='col-12 col-md-6'>
          <Card ClassPropsBadge='ClassMaxBadge' ClassPropsTitle='ClassMaxTitle' ClassPropsText='ClassMaxText' ClassPropsTime='ClassMaxTime'
            PropsTitle='The truth about ReactJS' PropsText='Sigh, it`s like we can`t catch a break. So much has happened over the past happened happened over the past happened.....'
            PropsImg='https://res.cloudinary.com/dnox1ijcx/image/upload/v1706365004/Rectangle_228_ngc7c3.png'
            PropsBadge1='Partner material' PropsBadge2='QA' PropsBadge3='UX/UI' PropsLogo='/public/favicon.svg' />
        </div>
        <div className='col-12 col-md-6'>
          <Card ClassPropsTitle='ClassMaxTitle' ClassPropsText='ClassMaxText' ClassPropsTime='ClassMaxTime'
            PropsTitle='How to solve an unsolvable conflict' PropsText='Sigh, it`s like we can`t catch a break. So much has happened over the past happened happened over the past happened.....'
            PropsImg='https://res.cloudinary.com/dnox1ijcx/image/upload/v1706366308/Rectangle_228_zhmppp.png'
            PropsBadge1='Partner material' PropsBadge2='QA' PropsBadge3='UX/UI' PropsLogo='/public/favicon.svg' />
        </div>
      </div>
      <hr className='mt-5 mb-5' />
      <div className="row article-three">
        {
          bloglar.map((Birbloq) => (
            <div className="col-12 col-md-6 col-lg-4">
              <Card ClassPropsTitle="ClassMinTitle" ClassPropsText="ClassMinText" ClassPropsTime="ClassMinTime"
                PropsTitle={Birbloq.Title} PropsText={Birbloq.Text} PropsImg={Birbloq.img} PropsBadge1={Birbloq.Badge1} PropsBadge2={Birbloq.Badge2} PropsBadge3={Birbloq.Badge3} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ArticlesSection