import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import scrollTo from "gatsby-plugin-smoothscroll"
import "../styles/main.scss"

import down from "../images/down.svg"
import logo from "../images/logoblack.png"



const Quiz = () => (
  <Layout>
    <SEO title="Which Kardashian" />
    <div>
    {/* <section id="start" className="quiz-section">
      <div className="hero">
        <h1 className="test">Which Kardashian are you?</h1>
        <p className="title-p">This quiz will ask you for basic information about yourself, please answer all of the questions honestly for the most accurate results?</p>
        <a className="begin-button" onClick={() => scrollTo("#question-one")}>
          Begin the quiz
        </a>
      </div>
      <a className="begin-button" onClick={() => scrollTo("#question-one")}>
        {" "}
        <img className="down-arrow" src={down} alt="down arrow" />{" "}
      </a>
    </section> */}
    <form 
        action="https://send.pageclip.co/UakSRQ1ULHBHE8Valt5MJUlgHpjh6wXY"
        class="pageclip-form form-flex"
        method="post"
        onsubmit="this.submit(); this.reset(); return false;"
        
      >
    <section id="question-one" className="quiz-section two-column-grid">
      <div className="general-container title">
        <p>Question 1/6</p>
        <h1 className="test">First let’s see if your star sign aligns with a Kardashian,<span className="blue-text">when is your birthday?</span> </h1>

      <div className="form-input">
        <input className="birthday" type="date" name="birthdate" />   
           
      </div>
      <a className="begin-button" onClick={() => scrollTo("#question-two")}>
        {" "}
        <span className="blue-text">Next question</span>
      </a>
      
      </div>
    </section>
    

    <section id="question-two" className="quiz-section two-column-grid">
      <div className="title general-container">
        <p>Question 2/6</p>
        <h1 className="test blue-text">Would you rather drive Kendall’s Ferrari, or Kourtney’s Aston Martin?</h1>

      
      <div className="form-input">

      <input type="text" />   
      </div>
      <a className="begin-button" onClick={() => scrollTo("#question-three")}>
        {" "}
        <span className="blue-text">Next question</span>
      </a>
      </div>
    </section>

    <section id="question-three" className="quiz-section two-column-grid">
      <div className="general-container title">
        <p>Question 3/6</p>
        <h1 className="test blue-text">What city were you born in?</h1>
        
      
      <div className="form-input">
        <input type="text" name="food" placeholder="" />
      </div>
      <a className="begin-button" onClick={() => scrollTo("#question-four")}>
        {" "}
       <span className="blue-text">Next question</span> 
      </a>
      </div>
    </section>

    <section id="question-four" className="quiz-section two-column-grid">
      <div className="general-container title">
        <p>Question 4/6</p>
        <h1 className="test blue-text">What is the name of your childhood pet?</h1>
        
      
      <div className="form-input">
        <input type="text" name="pet" placeholder="" />
      </div>
      <a className="begin-button" onClick={() => scrollTo("#question-five")}>
        {" "}
        <span className="blue-text">Next question</span>
      </a>
      </div>
    </section>

    <section id="question-five" className="quiz-section two-column-grid">
      <div className="general-container title">
        <p>Question 5/6</p>
        <h1 className="test blue-text">If you could go on a date with Tristan, Corey, or Scott, who would you choose?</h1>

      <div className="form-input">
        <input type="text" name="book" placeholder="" />
      </div>
      <a className="begin-button" onClick={() => scrollTo("#question-six")}>
        {" "}
        <span className="blue-text">Next question</span>
      </a>
      
      </div>
    </section>

    <section id="question-six" className="quiz-section two-column-grid">
      <div className="general-container title">
        <p>Question 6/6</p>
        <h1 className="test blue-text">What is your mothers maiden name?</h1>

      
      <div className="form-input">
        <input type="text" name="street name" placeholder="" />
      </div>
      <a className="begin-button" onClick={() => scrollTo("#question-seven")}>
        {" "}
       <span className="blue-text">Next question</span>
      </a>
      </div>
    </section>

    

    
    <section id="finished" className="quiz-section">
      {/* <div className="title">
        <h1 className="test">Congrats</h1>
        <p>The team at holo-cloud would like to thank you for this valuable information. Your secret is safe with us.</p>
        <a className="holo-link" href="https://holo-cloud.com" target="_blank">
        <img className="holo-logo" src={logo} alt="holo logo" />
          <p>holo-cloud</p>
        </a>
      </div> */}
    </section>



    {/* <input type="submit" onclick="location.href='google.com';" value="submit" /> */}

        

    </form>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)



export default Quiz
