import React from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/HomePage.module.css'
import { FaPaw, FaHandHoldingHeart, FaHospital, FaHome, FaDog, FaQuoteRight } from 'react-icons/fa'

export default function Home() {
  return (
    <Layout>
      <div className={styles.home_container}>
        <section className={styles.hero_section}>
          <img 
            src="https://cdn.pixabay.com/photo/2018/10/19/21/01/dog-3759590_1280.jpg" 
            alt="Dog hero image" 
            className={styles.hero_image} 
            loading="eager"
          />
          <div className={styles.hero_content}>
            <h1 className={styles.hero_title}>Help Dogs in Need</h1>
            <p className={styles.hero_subtitle}>
              Together we can make a difference in the lives of dogs around the world.
              Join our mission to provide care, shelter, and love to dogs who need it most.
            </p>
            <Link href="/contact" className={styles.hero_button}>
              Get Involved
            </Link>
          </div>
        </section>

        <section className={styles.mission_section}>
          <h2 className={styles.section_title}>Our Mission</h2>
          <div className={styles.mission_content}>
            <p className={styles.mission_text}>
              At Help Dogs, we believe every dog deserves a loving home, proper care, and the chance to live a happy, healthy life.
              Founded in 2010, our organization has been dedicated to rescuing, rehabilitating, and rehoming dogs in need.
              Through a network of volunteers, foster homes, and supporters, we've helped thousands of dogs find their forever families.
            </p>
            <p className={styles.mission_text}>
              Our work extends beyond rescue operations. We advocate for animal welfare legislation, provide education on responsible pet ownership,
              and offer resources to help keep dogs in their homes. We believe that through compassion, education, and action,
              we can create a world where no dog is left behind.
            </p>
          </div>
        </section>

        <section className={styles.facts_section}>
          <h2 className={styles.section_title}>What We Do</h2>
          <div className={styles.facts_container}>
            <div className={styles.fact_card}>
              <FaHandHoldingHeart className={styles.fact_icon} />
              <h3 className={styles.fact_title}>Rescue & Rehabilitation</h3>
              <p className={styles.fact_text}>
                We rescue dogs from high-kill shelters, neglectful situations, and disaster areas.
                Our team provides medical care, behavioral training, and loving attention to prepare them for new homes.
              </p>
            </div>

            <div className={styles.fact_card}>
              <FaHome className={styles.fact_icon} />
              <h3 className={styles.fact_title}>Adoption Programs</h3>
              <p className={styles.fact_text}>
                We carefully match dogs with loving families through our comprehensive adoption process.
                Last year alone, we found homes for over 500 dogs in need.
              </p>
            </div>

            <div className={styles.fact_card}>
              <FaHospital className={styles.fact_icon} />
              <h3 className={styles.fact_title}>Veterinary Care</h3>
              <p className={styles.fact_text}>
                We provide essential medical services including vaccinations, spay/neuter surgeries,
                and treatment for injuries and illnesses to dogs in our care.
              </p>
            </div>

            <div className={styles.fact_card}>
              <FaPaw className={styles.fact_icon} />
              <h3 className={styles.fact_title}>Education & Outreach</h3>
              <p className={styles.fact_text}>
                We offer workshops, resources, and support to promote responsible pet ownership
                and help keep dogs in their homes with the families who love them.
              </p>
            </div>

            <div className={styles.fact_card}>
              <FaDog className={styles.fact_icon} />
              <h3 className={styles.fact_title}>Community Support</h3>
              <p className={styles.fact_text}>
                Our pet food pantry and emergency assistance programs help families 
                care for their dogs during times of financial hardship.
              </p>
            </div>

            <div className={styles.fact_card}>
              <FaHandHoldingHeart className={styles.fact_icon} />
              <h3 className={styles.fact_title}>Global Impact</h3>
              <p className={styles.fact_text}>
                We partner with international organizations to improve conditions for dogs worldwide,
                with active projects in 12 countries across 4 continents.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.testimonials_section}>
          <h2 className={styles.section_title}>Success Stories</h2>
          <div className={styles.testimonials_container}>
            <div className={styles.testimonial_card}>
              <FaQuoteRight className={styles.quote_icon} />
              <p className={styles.testimonial_text}>
                "Adopting Max from Help Dogs was the best decision we ever made. He had been rescued from a terrible situation,
                but the team gave him such amazing care. Now he's a happy, healthy part of our family. The support and guidance
                we received during the adoption process was incredible."
              </p>
              <div className={styles.testimonial_author}>
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" 
                  alt="Testimonial author" 
                  className={styles.testimonial_image} 
                  loading="lazy"
                />
                <div className={styles.author_info}>
                  <span className={styles.author_name}>Sarah Johnson</span>
                  <span className={styles.author_title}>Adopter & Volunteer</span>
                </div>
              </div>
            </div>

            <div className={styles.testimonial_card}>
              <FaQuoteRight className={styles.quote_icon} />
              <p className={styles.testimonial_text}>
                "When we found Bella, she was scared of everything. Help Dogs provided behavioral support, training resources, and ongoing
                guidance that helped her transform into a confident, joyful dog. The dedication of this organization goes far beyond the
                adoption day - they're partners for life."
              </p>
              <div className={styles.testimonial_author}>
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" 
                  alt="Testimonial author" 
                  className={styles.testimonial_image} 
                  loading="lazy"
                />
                <div className={styles.author_info}>
                  <span className={styles.author_name}>Michael Torres</span>
                  <span className={styles.author_title}>Foster Parent</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta_section}>
          <h2 className={styles.cta_title}>Help Us Make a Difference</h2>
          <p className={styles.cta_text}>
            Every contribution matters. Whether you adopt, foster, volunteer, or donate,
            you can help us continue our mission of saving and improving the lives of dogs in need.
          </p>
          <Link href="/contact" className={styles.cta_button}>
            Get Involved Today
          </Link>
        </section>
      </div>
    </Layout>
  )
}
