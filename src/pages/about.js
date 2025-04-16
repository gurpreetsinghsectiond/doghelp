import React from 'react'
import Layout from '@/components/Layout'
import InfoCard from '@/components/InfoCard'
import styles from '@/styles/About.module.css'
import { 
  FaPaw, 
  FaFlagCheckered, 
  FaHome, 
  FaGraduationCap, 
  FaHospital, 
  FaBirthdayCake, 
  FaGlobeAmericas 
} from 'react-icons/fa'

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Michael Thompson",
      title: "Founder & Executive Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      bio: "After rescuing his own dog from a shelter in 2010, Michael dedicated his life to helping dogs in need. With a background in non-profit management, he founded Help Dogs to create systemic change in how we care for and protect canine companions.",
      email: "michael@helpdogs.org",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    },
    {
      id: 2,
      name: "Sarah Williams",
      title: "Director of Rescue Operations",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      bio: "Sarah brings over 15 years of experience in animal welfare. She oversees all rescue operations, coordinates with shelters nationwide, and develops protocols that prioritize the well-being of every dog in our care.",
      email: "sarah@helpdogs.org",
      linkedin: "https://linkedin.com/",
      twitter: null
    },
    {
      id: 3,
      name: "David Chen",
      title: "Veterinary Director",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
      bio: "Dr. Chen leads our medical team, ensuring that every dog receives top-quality healthcare. With specialized training in shelter medicine, he's developed innovative approaches to treating common issues faced by rescued dogs.",
      email: "david@helpdogs.org",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    },
    {
      id: 4,
      name: "Jessica Rodriguez",
      title: "Education & Outreach Coordinator",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      bio: "Jessica develops and implements our educational programs, working with schools, communities, and families to promote responsible dog ownership and compassion for all animals.",
      email: "jessica@helpdogs.org",
      linkedin: null,
      twitter: "https://twitter.com/"
    },
    {
      id: 5,
      name: "Robert Jackson",
      title: "Volunteer Coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "Robert manages our network of over 500 volunteers, organizing training sessions and ensuring that every volunteer has a meaningful experience while helping our canine friends.",
      email: "robert@helpdogs.org",
      linkedin: "https://linkedin.com/",
      twitter: null
    },
    {
      id: 6,
      name: "Emily Patel",
      title: "Adoption Specialist",
      image: "https://images.unsplash.com/photo-1564460576398-ef55d99548b2",
      bio: "Emily has successfully matched over 1,000 dogs with their forever homes. Her deep understanding of canine behavior and family dynamics helps her find the perfect match for every dog and adopter.",
      email: "emily@helpdogs.org",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    }
  ];

  const timelineEvents = [
    {
      year: 2010,
      content: "Help Dogs is founded as a small rescue operation run by five volunteers.",
      icon: <FaFlagCheckered />
    },
    {
      year: 2012,
      content: "We open our first dedicated rescue center with capacity for 30 dogs.",
      icon: <FaHome />
    },
    {
      year: 2015,
      content: "Launch of our education program, reaching 50 schools in the first year.",
      icon: <FaGraduationCap />
    },
    {
      year: 2018,
      content: "Expansion to include an on-site veterinary clinic to provide medical care to rescued dogs.",
      icon: <FaHospital />
    },
    {
      year: 2020,
      content: "Celebrate our 10th anniversary and the milestone of 5,000 successful adoptions.",
      icon: <FaBirthdayCake />
    },
    {
      year: 2023,
      content: "Launch of international programs to support dog welfare in developing countries.",
      icon: <FaGlobeAmericas />
    }
  ];

  return (
    <Layout>
      <div className={styles.about_container}>
        <header className={styles.about_header}>
          <h1 className={styles.about_title}>About Help Dogs</h1>
          <p className={styles.about_subtitle}>
            Dedicated to rescuing, rehabilitating, and rehoming dogs in need since 2010
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.section_title}>Our Mission</h2>
          <p className={styles.section_text}>
            At Help Dogs, our mission is to create a world where every dog has a loving home and receives the care they deserve. 
            We work tirelessly to rescue dogs from challenging situations, provide them with comprehensive medical care and 
            rehabilitation, and find them loving forever homes.
          </p>
          <p className={styles.section_text}>
            Beyond direct rescue work, we're committed to education and advocacy that addresses the root causes of dog homelessness 
            and suffering. We believe that through compassion, education, and community involvement, we can create lasting change 
            for dogs everywhere.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.section_title}>Our History</h2>
          <p className={styles.section_text}>
            Help Dogs was founded in 2010 by Michael Thompson after he adopted a dog from a high-kill shelter. Witnessing 
            firsthand the challenges faced by homeless dogs, Michael decided to dedicate his life to making a difference.
          </p>

          <div className={styles.history_timeline}>
            {timelineEvents.map((event, index) => (
              <div key={event.year} className={styles.timeline_item}>
                <div className={styles.timeline_icon_container}>
                  <span className={styles.timeline_icon}>{event.icon}</span>
                </div>
                <div className={styles.timeline_content_container}>
                  <div className={styles.timeline_date}>{event.year}</div>
                  <div className={styles.timeline_content}>
                    {event.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.team_section}>
          <h2 className={styles.section_title}>Our Leadership Team</h2>
          <p className={styles.section_text}>
            Help Dogs is led by a dedicated team of professionals with diverse backgrounds in animal welfare, veterinary medicine, 
            non-profit management, and education. Together, they guide our organization with compassion, expertise, and unwavering 
            commitment to our mission.
          </p>

          <div className={styles.team_grid}>
            {teamMembers.map(member => (
              <InfoCard
                key={member.id}
                name={member.name}
                title={member.title}
                image={member.image}
                bio={member.bio}
                email={member.email}
                linkedin={member.linkedin}
                twitter={member.twitter}
              />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.section_title}>Our Impact</h2>
          <p className={styles.section_text}>
            Since our founding, Help Dogs has made a measurable difference in the lives of thousands of dogs and the 
            communities we serve. We're proud of our achievements, but we know there is still much work to be done.
          </p>

          <div className={styles.stats_container}>
            <div className={styles.stat_item}>
              <div className={styles.stat_value}>7,500+</div>
              <div className={styles.stat_label}>Dogs Rescued</div>
            </div>
            
            <div className={styles.stat_item}>
              <div className={styles.stat_value}>6,800+</div>
              <div className={styles.stat_label}>Successful Adoptions</div>
            </div>
            
            <div className={styles.stat_item}>
              <div className={styles.stat_value}>12,000+</div>
              <div className={styles.stat_label}>Spay/Neuter Surgeries</div>
            </div>
            
            <div className={styles.stat_item}>
              <div className={styles.stat_value}>500+</div>
              <div className={styles.stat_label}>Active Volunteers</div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
} 