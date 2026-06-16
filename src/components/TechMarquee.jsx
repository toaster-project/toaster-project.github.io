import { marqueeLogos } from '../data/portfolioData'
import './TechMarquee.css'

export default function TechMarquee() {
  return (
    <div className="tech-marquee">
      <div className="tech-marquee__track">
        {/* Double the logos to create a seamless horizontal loop */}
        {[...marqueeLogos, ...marqueeLogos].map((logo, index) => (
          <div key={index} className="tech-marquee__item" title={logo.name}>
            <img src={logo.url} alt={logo.name} className="tech-marquee__img" />
          </div>
        ))}
      </div>
    </div>
  )
}
