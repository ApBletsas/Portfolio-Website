'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaReact, FaPython, FaDocker, FaGitAlt, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    // Use base path for GitHub Pages
    link.href = `${process.env.NODE_ENV === 'production' ? '/Portfolio-Website' : ''}/Apostolos_Bletsas_CV.pdf`
    link.download = 'Apostolos_Bletsas_CV.pdf'
    link.click()
  }

  // Floating tech icons configuration - evenly spaced
  const techIcons = [
    { Icon: FaReact, color: '#61DAFB', size: 'w-12 h-12' },
    { Icon: FaPython, color: '#3776AB', size: 'w-12 h-12' },
    { Icon: FaDocker, color: '#2496ED', size: 'w-12 h-12' },
    { Icon: SiMysql, color: '#4479A1', size: 'w-12 h-12' },
    { Icon: FaGitAlt, color: '#F05032', size: 'w-12 h-12' },
    { Icon: FaHtml5, color: '#E34F26', size: 'w-12 h-12' },
    { Icon: FaCss3Alt, color: '#1572B6', size: 'w-12 h-12' },
    { Icon: FaJs, color: '#F7DF1E', size: 'w-12 h-12' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6"
            >
              Hello there! <br /> I&apos;m{' '}
              <span className="text-primary-600 dark:text-primary-400">
                Apostolos Bletsas
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
            Software Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
            >
              Passionate about leveraging cutting-edge AI technologies and modern software development 
              to create intelligent solutions. I specialize in building AI-powered applications, 
              web development, and exploring the intersection of artificial intelligence with 
              practical software solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="btn-primary flex items-center justify-center gap-2 px-8 py-3 text-lg"
              >
                Get In Touch
                <FaEnvelope className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className="btn-secondary flex items-center justify-center gap-2 px-8 py-3 text-lg"
              >
                Download Resume
                <FaDownload className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center lg:justify-start gap-6 mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/ApBletsas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/apostolis-bletsas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:apostolisbletsas14@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors duration-200"
                aria-label="Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80" style={{ transform: 'translate(-20px, -20px)' }}>
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-[#335c67] dark:border-[#75a5ad]"
              >
                <img
                  src={`${process.env.NODE_ENV === 'production' ? '/Portfolio-Website' : ''}/profile.jpg`}
                  alt="Apostolos Bletsas"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Orbiting Tech Icons */}
              {techIcons.map(({ Icon, color, size }, index) => {
                const radius = 180 // Equal distance from center for all icons
                const orbitDuration = 60 // Rotation Speed in seconds
                const totalIcons = techIcons.length
                const angleSpacing = 360 / totalIcons // Equal spacing between icons
                const startAngle = index * angleSpacing // Starting angle for this icon
                
                // Calculate the full circle path
                const pathPoints = Array.from({ length: 360 }, (_, i) => {
                  const currentAngle = (startAngle + i) * (Math.PI / 180)
                  return {
                    x: Math.cos(currentAngle) * radius,
                    y: Math.sin(currentAngle) * radius,
                  }
                })
                
                return (
                  <motion.div
                    key={index}
                    className={`absolute ${size} rounded-lg bg-white dark:bg-[#2a2a2a] shadow-lg flex items-center justify-center border-2 border-[#E09F3E]/30 dark:border-[#F4B963]/30`}
                    style={{
                      left: '50%',
                      top: '50%',
                      marginLeft: `-24px`, // Half of w-12 (48px / 2)
                      marginTop: `-24px`,
                    }}
                    animate={{
                      // Perfect circular orbital motion
                      x: pathPoints.map(p => p.x),
                      y: pathPoints.map(p => p.y),
                      // Pulse effect
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      x: {
                        duration: orbitDuration,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      y: {
                        duration: orbitDuration,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      },
                    }}
                  >
                    <Icon 
                      className="w-full h-full p-2" 
                      style={{ color: color }}
                    />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
