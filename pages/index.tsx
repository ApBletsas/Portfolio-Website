import Head from 'next/head'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Apostolis Bletsas - Computer Science Student & Developer</title>
        <meta name="description" content="Personal portfolio of Apostolis Bletsas, Computer Science student at International Hellenic University with experience in customer service, teaching, and web development." />
        <meta name="keywords" content="Apostolis Bletsas, Computer Science Student, Web Developer, Front-End Development, Customer Service, Teaching, Greece" />
        <meta name="author" content="Apostolis Bletsas" />
        <meta property="og:title" content="Apostolis Bletsas - Computer Science Student & Developer" />
        <meta property="og:description" content="Personal portfolio showcasing academic journey, work experience, and skills in technology and customer service." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Apostolis Bletsas - Computer Science Student & Developer" />
        <meta name="twitter:description" content="Personal portfolio showcasing academic journey, work experience, and skills in technology and customer service." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://apostolosbletsas.github.io" />
      </Head>

      <main className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-gray-100">
        <Navigation />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
          <Footer />
        </motion.div>
      </main>
    </>
  )
}
