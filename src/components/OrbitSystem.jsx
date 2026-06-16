import { orbitIconsConfig } from '../data/portfolioData'
import './OrbitSystem.css'

export default function OrbitSystem({ config = orbitIconsConfig, avatarSrc = '/images/baby.png', avatarAlt = 'Toaster' }) {
  const isUrl = (str) => str.startsWith('http') || str.startsWith('/');

  return (
    <div className="orbit-system" style={{ '--orbit-size': `${(config[config.length - 1]?.radius || 290) * 2 + 80}px` }}>
      {/* Central avatar */}
      <div className="orbit-center">
        <div className="orbit-center__glow" />
        <img src={avatarSrc} alt={avatarAlt} className="orbit-center__avatar" />
      </div>

      {/* Orbit rings */}
      {config.map((orbit, orbitIndex) => (
        <div
          key={orbitIndex}
          className="orbit-ring"
          style={{
            '--orbit-radius': `${orbit.radius}px`,
            '--orbit-duration': `${orbit.duration}s`,
            '--orbit-direction': orbit.reverse ? 'reverse' : 'normal',
            width: `${orbit.radius * 2}px`,
            height: `${orbit.radius * 2}px`,
          }}
        >
          {/* Ring visual (the dotted circle) */}
          <div className="orbit-ring__path" />
          
          {/* Orbiting items */}
          {orbit.items.map((item, itemIndex) => {
            const angle = (360 / orbit.items.length) * itemIndex
            return (
              <div
                key={itemIndex}
                className="orbit-item"
                style={{
                  '--item-angle': `${angle}deg`,
                  '--orbit-radius': `${orbit.radius}px`,
                  '--orbit-duration': `${orbit.duration}s`,
                  '--orbit-direction': orbit.reverse ? 'reverse' : 'normal',
                }}
              >
                <div className="orbit-item__content" title={item.label}>
                  {isUrl(item.icon) ? (
                    <img src={item.icon} alt={item.label} className="orbit-item__img" />
                  ) : (
                    <span className="orbit-item__icon">{item.icon}</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
