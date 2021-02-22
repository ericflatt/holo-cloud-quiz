import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import scrollTo from "gatsby-plugin-smoothscroll"
import "../styles/main.scss"

import down from "../images/down.svg"



const IndexPage = () => (
  <Layout>
    <SEO title="holo-cloud" />
    <section id="start" className="quiz-section">
      <div className="hero">
        <h1 className="test">holo-cloud quiz</h1>
        <p className="title-p">This quiz will ask you for basic information about yourself, please answer all of the questions?</p>
        <a className="begin-button" onClick={() => scrollTo("#question-one")}>
          Begin the quiz
        </a>
      </div>
      <a className="begin-button" onClick={() => scrollTo("#question-one")}>
        {" "}
        <img className="down-arrow" src={down} alt="down arrow" />{" "}
      </a>
    </section>
    <form
        action="https://send.pageclip.co/UakSRQ1ULHBHE8Valt5MJUlgHpjh6wXY"
        class="pageclip-form form-flex"
        method="post"
        onsubmit="this.submit(); this.reset(); return false;"
        
      >
    <section id="question-one" className="quiz-section two-column-grid">
      <div className="title">
        <p>Question 1/8</p>
        <h1 className="test">What is your birthday?</h1>
        <a className="begin-button" onClick={() => scrollTo("#question-two")}>
        {" "}
        Next question
      </a>
      </div>
      <div className="form-input">
        <input className="birthday" type="date" name="birthdate" />      
      </div>
    </section>
    

    <section id="question-two" className="quiz-section two-column-grid">
      <div className="title">
        <p>Question 2/8</p>
        <h1 className="test">If you were to pick any four single digit numbers what would they be?</h1>
        <a className="begin-button" onClick={() => scrollTo("#question-three")}>
        {" "}
        Next question
      </a>
      </div>
      <div className="form-input">

      <input className="numbers" min="0" max="9" type="number" name="numbers" placeholder="0" />
        <input className="numbers" min="0" max="9" type="number" name="numbers" placeholder="0" />
        <input className="numbers" min="0" max="9" type="number" name="numbers" placeholder="0" />
        <input className="numbers" min="0" max="9" type="number" name="numbers" placeholder="0" />     
      </div>
    </section>

    <section id="question-three" className="quiz-section two-column-grid">
      <div className="title">
        <p>Question 3/8</p>
        <h1 className="test">What is your favorite food?</h1>
        <a className="begin-button" onClick={() => scrollTo("#question-four")}>
        {" "}
        Next question
      </a>
      </div>
      <div className="form-input">
        <input type="text" name="food" placeholder="Name of food" />
      </div>
    </section>

    <section id="question-four" className="quiz-section two-column-grid">
      <div className="title">
        <p>Question 4/8</p>
        <h1 className="test">What is the name of your childhood pet?</h1>
        <a className="begin-button" onClick={() => scrollTo("#question-five")}>
        {" "}
        Next question
      </a>
      </div>
      <div className="form-input">
        <input type="text" name="pet" placeholder="Name of pet" />
      </div>
    </section>

    <section id="question-five" className="quiz-section two-column-grid">
      <div className="title">
        <p>Question 5/8</p>
        <h1 className="test">What is the name of your favorite book?</h1>
        <a className="begin-button" onClick={() => scrollTo("#question-six")}>
        {" "}
        Next question
      </a>
      </div>
      <div className="form-input">
        <input type="text" name="book" placeholder="Name of book" />
      </div>
    </section>

    <section id="question-six" className="quiz-section two-column-grid">
      <div className="title">
        <p>Question 6/8</p>
        <h1 className="test">What street did you grow up on?</h1>
        <a className="begin-button" onClick={() => scrollTo("#question-seven")}>
        {" "}
        Next question
      </a>
      </div>
      <div className="form-input">
        <input type="text" name="street name" placeholder="Street name" />
      </div>
    </section>

    <section id="question-seven" className="quiz-section two-column-grid">
      <div className="title">
        <p>Question 7/8</p>
        <h1 className="test">What is your mothers maiden name?</h1>
        <a className="begin-button" onClick={() => scrollTo("#question-eight")}>
        {" "}
        Next question
      </a>
      </div>
      <div className="form-input">
        <input type="text" name="maiden name" placeholder="Maiden name" />
      </div>
    </section>

    <section id="question-eight" className="quiz-section two-column-grid">
      <div className="title">
        <p>Question 8/8</p>
        <h1 className="test">What city were you born in?</h1>
      </div>
      <div className="form-input">
        <input type="text" name="city name" placeholder="City name" />
      </div>
      <button style={{marginBottom:"150px"}} onClick={() => scrollTo("#finished")} type="submit"  class="form-button" value="/page-2">Submit
        </button>
    </section>

    
    <section id="finished" className="quiz-section">
      <div className="title">
        <h1 className="test">Congrats</h1>
        <p>You gave us a lot of valuable information. Hope you get hacked!</p>
      </div>
    </section>



    {/* <input type="submit" onclick="location.href='google.com';" value="submit" /> */}

        

    </form>

    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)



export default IndexPage
