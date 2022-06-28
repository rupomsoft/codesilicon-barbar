import Navbar from '../Navbar/Navbar'
import HeroContent from './HeroContent'
import "./HeroSection.css"
import UpperNav from './UpperNav'
export default function HeroSection() {
    return (
        <section className=''>
            
            <main className='mainHero relative '>
                <div className="container px-5 position-relative" >
                    <UpperNav />
                    <Navbar />
                    <div data-aos="zoom-in">
                        <HeroContent />
                    </div>

                </div>


            </main>
        </section>
    )
}
