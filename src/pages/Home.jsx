import HeroSlider from '../components/HeroSlider'
import '../styles/Home.css'
import WhyJoinUs from '../components/WhyJoinUs'
import CounterSection from '../components/CounterSection'
const Home = () => {
    return (
        <div className="home">
            <HeroSlider />
            <section className="heading-banner">
                <h1>BEST IIT JEE NEET COACHING IN VARANASI</h1>
            </section>

            <section className="division-banner">
                <h2>OUR DIVISIONS</h2>
            </section>
            <WhyJoinUs />
            <CounterSection />
            {/* Add more sections as needed */}
        </div>
    )
}
export default Home

