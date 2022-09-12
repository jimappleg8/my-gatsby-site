import * as React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import PortfolioList from '../components/portfolio'
import Seo from '../components/seo'
import "@fontsource/open-sans"
import "@fontsource/merriweather"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Hero />
      <PortfolioList />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage