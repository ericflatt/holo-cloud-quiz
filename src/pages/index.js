import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import scrollTo from "gatsby-plugin-smoothscroll"
import "../styles/main.scss"
import family from "../images/kardashians.jpg"

import down from "../images/down.svg"



const IndexPage = () => (
  <Layout>
    <SEO title="Which Kardashian" />
    <div className="index-hero">
      <h1 className="kar-title">Which Kardashian Are You?</h1>
      <Link className="enter-quiz" to="/quiz/">Take the quiz to find out</Link>
    </div>
  </Layout>
)



export default IndexPage
