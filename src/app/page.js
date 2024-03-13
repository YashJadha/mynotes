import Image from 'next/image'
import styles from './page.module.css'
import TopicsList from './topiclist/page'
import Register from './register/page'

export default function Home() {
  return (
    <section className='mainsection'>
      <Register/>
    </section>
  )
}
