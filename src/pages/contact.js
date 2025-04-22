import React, { useState, useRef } from 'react'
import Layout from '@/components/Layout'
import styles from '@/styles/Contact.module.css'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm();
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const serviceId = "service_17kxr0r";
      const templateId = "template_p5gai9d";
      const publicKey = "eQr2E7QUSndpWmVAr";
      
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      
      if (result.text === 'OK') {
        setSubmitStatus('success');
        reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className={styles.contact_container}>
        <section className={styles.hero_section}>
          <img 
            src="https://cdn.pixabay.com/photo/2014/08/21/14/51/dog-423398_1280.jpg" 
            alt="Dog looking at camera" 
            className={styles.hero_image} 
            loading="eager" 
          />
          <div className={styles.hero_content}>
            <h1 className={styles.hero_title}>Contact Us</h1>
            <p className={styles.hero_subtitle}>
              Have questions or want to get involved? We'd love to hear from you!
            </p>
          </div>
        </section>
        
        <div className={styles.main_content}>
          <section className={styles.form_section}>
            <h2 className={styles.section_title}>Send Us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className={styles.form_success}>
                Your message has been sent successfully! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className={styles.form_error_message}>
                There was an error sending your message. Please try again.
              </div>
            )}
            
            <form ref={formRef} className={styles.contact_form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.form_group}>
                <label htmlFor="name" className={styles.form_label}>Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  className={styles.form_input}
                  placeholder="Your name" 
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className={styles.form_error}>{errors.name.message}</span>}
              </div>
              
              <div className={styles.form_group}>
                <label htmlFor="email" className={styles.form_label}>Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  className={styles.form_input}
                  placeholder="Your email" 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <span className={styles.form_error}>{errors.email.message}</span>}
              </div>

              <div className={styles.form_group}>
                <label htmlFor="subject" className={styles.form_label}>Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  className={styles.form_input}
                  placeholder="Message subject" 
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && <span className={styles.form_error}>{errors.subject.message}</span>}
              </div>
              
              <div className={styles.form_group}>
                <label htmlFor="message" className={styles.form_label}>Message</label>
                <textarea 
                  id="message"
                  name="message"
                  className={styles.form_textarea}
                  placeholder="Your message" 
                  rows="5"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && <span className={styles.form_error}>{errors.message.message}</span>}
              </div>
              
              <button 
                type="submit" 
                className={styles.submit_button} 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Sending... 
                    <span className={styles.spinner}></span>
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </section>

          <section className={styles.info_section}>
            <h2 className={styles.section_title}>Contact Information</h2>
            
            <div className={styles.contact_info}>
              <div className={styles.info_item}>
                <div className={styles.info_icon}>
                  <FaMapMarkerAlt />
                </div>
                <div className={styles.info_text}>
                  <h3 className={styles.info_title}>Our Location</h3>
                  <p className={styles.info_content}>
                    123 Rescue Drive<br />
                    San Francisco, CA 94101
                  </p>
                </div>
              </div>
              
              <div className={styles.info_item}>
                <div className={styles.info_icon}>
                  <FaPhoneAlt />
                </div>
                <div className={styles.info_text}>
                  <h3 className={styles.info_title}>Phone Number</h3>
                  <p className={styles.info_content}>
                    <a href="tel:+14155550123" className={styles.info_link}>(415) 555-0123</a>
                  </p>
                </div>
              </div>
              
              <div className={styles.info_item}>
                <div className={styles.info_icon}>
                  <FaEnvelope />
                </div>
                <div className={styles.info_text}>
                  <h3 className={styles.info_title}>Email Address</h3>
                  <p className={styles.info_content}>
                    <a href="mailto:info@helpdogs.org" className={styles.info_link}>info@helpdogs.org</a>
                  </p>
                </div>
              </div>
              
              <div className={styles.info_item}>
                <div className={styles.info_icon}>
                  <FaClock />
                </div>
                <div className={styles.info_text}>
                  <h3 className={styles.info_title}>Office Hours</h3>
                  <p className={styles.info_content}>
                    Monday - Friday: 9am - 5pm<br />
                    Saturday: 10am - 2pm<br />
                    Sunday: Closed 
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className={styles.section_title}>Follow Us</h2>
            <div className={styles.contact_info}>
              <div className={styles.social_links}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.social_link} aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.social_link} aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.social_link} aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
} 