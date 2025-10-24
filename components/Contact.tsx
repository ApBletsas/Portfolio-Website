'use client'

// Import motion components from framer-motion for smooth animations
import { motion } from 'framer-motion'
// Import useInView hook to detect when the section is visible on screen
import { useInView } from 'framer-motion'
// Import React hooks: useRef for DOM references, useState for managing component state
import { useRef, useState } from 'react'
// Import useForm hook from react-hook-form for handling form validation and submission
import { useForm } from 'react-hook-form'
// Import various icons from react-icons library for visual elements
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

// TypeScript interface that defines the structure of form data
// This ensures type safety when working with form fields
interface FormData {
  name: string      // User's full name
  email: string     // User's email address
  subject: string   // Email subject line
  message: string   // Main message content
}

// Main Contact component - displays contact information and a contact form
const Contact = () => {
  // Create a reference to the section element for scroll detection
  const ref = useRef(null)
  // Check if the section is visible on screen (triggers animations when visible)
  // once: true means animation only happens once, margin: "-100px" triggers slightly before fully visible
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  // State to track if form is currently being submitted (shows loading state)
  const [isSubmitting, setIsSubmitting] = useState(false)
  // State to track submission status: 'idle' (not submitted), 'success', or 'error'
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Destructure functions and state from useForm hook
  // register: connects form fields to validation
  // handleSubmit: wraps submit function with validation
  // errors: object containing validation error messages
  // reset: clears all form fields
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>()

  // Function that runs when form is submitted (after validation passes)
  const onSubmit = async (data: FormData) => {
    // Set submitting to true to show loading state
    setIsSubmitting(true)
    // Reset status back to idle (clears any previous success/error messages)
    setSubmitStatus('idle')

    try {
      // In a real implementation, you would send this to your backend API
      // For now, we'll simulate a successful submission with a 2 second delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Log the form data to console (for development/debugging)
      console.log('Form submitted:', data)
      // Set status to success to show success message
      setSubmitStatus('success')
      // Clear all form fields after successful submission
      reset()
    } catch (error) {
      // If something goes wrong, log the error to console
      console.error('Error submitting form:', error)
      // Set status to error to show error message
      setSubmitStatus('error')
    } finally {
      // Always set submitting to false when done (whether success or error)
      // This removes the loading state
      setIsSubmitting(false)
    }
  }

  // Array of contact information cards to display
  const contactInfo = [
    {
      icon: FaEnvelope,                              // Icon component for email
      title: 'Email',                                 // Label for this contact method
      value: 'apostolisbletsas14@gmail.com',         // Actual contact value
      link: 'mailto:apostolisbletsas14@gmail.com'    // Clickable mailto link
    },
    {
      icon: FaMapMarkerAlt,                          // Icon component for location
      title: 'Location',                             // Label for location
      value: 'Greece',                               // Current location
      link: '#'                                      // No link for location (just # placeholder)
    }
  ]

  // Array of social media links with custom hover colors
  const socialLinks = [
    {
      icon: FaGithub,                                       // GitHub icon
      name: 'GitHub',                                       // Platform name for accessibility
      url: 'https://github.com/ApBletsas',                 // Link to GitHub profile
      color: 'hover:text-gray-900 dark:hover:text-white'   // Custom hover color (black/white)
    },
    {
      icon: FaLinkedin,                                     // LinkedIn icon
      name: 'LinkedIn',                                     // Platform name for accessibility
      url: 'https://www.linkedin.com/in/apostolis-bletsas', // Link to LinkedIn profile
      color: 'hover:text-blue-600 dark:hover:text-blue-500' // Custom hover color (blue)
    }
  ]

  return (
    // Main section element with id for navigation, padding, and background colors
    // id="contact" allows navigation links to scroll to this section
    <section id="contact" className="section-padding bg-white dark:bg-dark-800">
      {/* Container that centers content and adds max width */}
      <div className="container-custom">
        {/* Section header with fade-in animation */}
        <motion.div
          // Attach ref for scroll detection
          ref={ref}
          // Start invisible and moved down 50px
          initial={{ opacity: 0, y: 50 }}
          // Animate to visible and normal position when in view
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          // Animation takes 0.8 seconds
          transition={{ duration: 0.8 }}
          // Center text and add bottom margin
          className="text-center mb-16"
        >
          {/* Main section heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Get In Touch
          </h2>
          {/* Decorative line under heading (24px wide, 4px tall, primary color) */}
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          {/* Section description text with max width for readability */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I&apos;d love to hear from you. Let&apos;s create something amazing together.
          </p>
        </motion.div>

        {/* Two-column layout: contact info on left, form on right */}
        {/* Stacks into single column on mobile, side-by-side on large screens */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <motion.div
            // Start invisible and moved 50px to the left
            initial={{ opacity: 0, x: -50 }}
            // Animate to visible when section is in view
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            // Animation takes 0.8 seconds with 0.2s delay
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Contact information heading */}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
              Let&apos;s Connect
            </h3>
            
            {/* Container for contact info cards with vertical spacing */}
            <div className="space-y-6 mb-8">
              {/* Loop through each contact info item and create a card */}
              {contactInfo.map((info, index) => (
                <motion.a
                  // Use title as unique key for React list rendering
                  key={info.title}
                  // Start invisible and moved down 20px
                  initial={{ opacity: 0, y: 20 }}
                  // Animate to visible, staggered based on index
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  // Each item delays slightly more (0.4s + index * 0.1s)
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  // Link to email or location (if available)
                  href={info.link}
                  // Flex layout with icon on left, text on right
                  // group class allows child elements to respond to this card's hover
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-200 group"
                >
                  {/* Icon container with background that changes on hover */}
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-200">
                    {/* Display the icon component */}
                    <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  {/* Text content container */}
                  <div>
                    {/* Contact method title (e.g., "Email", "Location") */}
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      {info.title}
                    </h4>
                    {/* Actual contact value (e.g., email address, location) */}
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links Section */}
            <div>
              {/* Social links heading */}
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Follow Me
              </h4>
              {/* Container for social icons with horizontal spacing */}
              <div className="flex gap-4">
                {/* Loop through each social link and create an icon button */}
                {socialLinks.map((social, index) => (
                  <motion.a
                    // Use social platform name as unique key
                    key={social.name}
                    // Start invisible and scaled down
                    initial={{ opacity: 0, scale: 0.8 }}
                    // Animate to visible and full size
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    // Stagger animation based on index
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    // Scale up and move up slightly on hover
                    whileHover={{ scale: 1.1, y: -2 }}
                    // Scale down when clicked
                    whileTap={{ scale: 0.9 }}
                    // Link to social media profile
                    href={social.url}
                    // Open in new tab
                    target="_blank"
                    // Security attribute for external links
                    rel="noopener noreferrer"
                    // Square button with rounded corners, applies custom hover color from socialLinks array
                    className={`p-3 bg-gray-100 dark:bg-dark-700 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200`}
                    // Accessibility label for screen readers
                    aria-label={social.name}
                  >
                    {/* Display social media icon */}
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status Card */}
            <motion.div
              // Start invisible and moved down
              initial={{ opacity: 0, y: 20 }}
              // Animate to visible when in view
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              // Delay animation until after other elements
              transition={{ duration: 0.6, delay: 0.8 }}
              // Green-themed card with padding and border
              className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
            >
              {/* Header row with animated dot and text */}
              <div className="flex items-center gap-3 mb-2">
                {/* Pulsing green dot indicator to show active status */}
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                {/* Availability status heading */}
                <h4 className="font-semibold text-green-800 dark:text-green-200">
                  Available for Work
                </h4>
              </div>
              {/* Availability description text */}
              <p className="text-green-700 dark:text-green-300 text-sm">
                I&apos;m currently available for new projects and opportunities. 
                Let&apos;s discuss how I can help bring your ideas to life.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            // Start invisible and moved 50px to the right
            initial={{ opacity: 0, x: 50 }}
            // Animate to visible when in view
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            // Animation takes 0.8 seconds with 0.4s delay (after left column)
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Form element - handleSubmit wraps onSubmit with validation */}
            {/* space-y-6 adds vertical spacing between form fields */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                {/* Field label - htmlFor connects label to input */}
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                {/* Input field - register connects it to react-hook-form */}
                {/* Validation: field is required */}
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  id="name"
                  // Full width input with padding, border, focus ring effect
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                  placeholder="Your full name"
                />
                {/* Show error message if validation fails */}
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    {/* Error icon */}
                    <FaExclamationCircle className="w-4 h-4" />
                    {/* Error message text */}
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                {/* Field label */}
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                {/* Email input with validation rules */}
                <input
                  {...register('email', { 
                    // Field is required
                    required: 'Email is required',
                    // Must match email pattern (regex)
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
                {/* Show error message if email is invalid or missing */}
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <FaExclamationCircle className="w-4 h-4" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                {/* Field label */}
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                {/* Subject input - required field */}
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                  placeholder="What's this about?"
                />
                {/* Show error if subject is missing */}
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <FaExclamationCircle className="w-4 h-4" />
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                {/* Field label */}
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                {/* Textarea for longer message input */}
                {/* Validation: required and minimum 10 characters */}
                <textarea
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' }
                  })}
                  id="message"
                  // 6 rows tall, resize-none prevents manual resizing
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
                {/* Show error if message is missing or too short */}
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <FaExclamationCircle className="w-4 h-4" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                // Slightly scale up on hover
                whileHover={{ scale: 1.02 }}
                // Slightly scale down when clicked
                whileTap={{ scale: 0.98 }}
                // Submit type triggers form validation and submission
                type="submit"
                // Disable button while form is submitting
                disabled={isSubmitting}
                // Full width button with centered content
                // Changes appearance when disabled
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-medium text-lg"
              >
                {/* Show different content based on submission state */}
                {isSubmitting ? (
                  // Loading state: spinning circle and "Sending..." text
                  <>
                    {/* Animated spinning circle */}
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  // Normal state: paper plane icon and "Send Message" text
                  <>
                    <FaPaperPlane className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success Message - only shows when submitStatus is 'success' */}
              {submitStatus === 'success' && (
                <motion.div
                  // Fade in and slide up animation
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  // Green success card with icon and message
                  className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                >
                  {/* Success checkmark icon */}
                  <FaCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  {/* Success message text */}
                  <p className="text-green-800 dark:text-green-200">
                    Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              )}

              {/* Error Message - only shows when submitStatus is 'error' */}
              {submitStatus === 'error' && (
                <motion.div
                  // Fade in and slide up animation
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  // Red error card with icon and message
                  className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                >
                  {/* Error exclamation icon */}
                  <FaExclamationCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  {/* Error message text */}
                  <p className="text-red-800 dark:text-red-200">
                    Sorry, there was an error sending your message. Please try again.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Export component so it can be imported and used in other files
export default Contact
