import './App.css'
import InsurancePolicies from './components/InsurancePolicies'

function App() {
  const navigation = [
    { name: 'Home', path: '/', active: true},
    { name: 'My policies', path: '/'},
    { name: 'Claims', path: '/'},
    { name: 'Bills', path: '/'},
    { name: 'Inbox', path: '/', badges: 3}
  ]
  return (
    <div className="if app">
      <header className="if global-header">
        <a href="#content" className="if axe skip-to-content">Skip to content</a>
        <nav className="if primary primary-custom">

          {/* mobile */}
          <div className="if mobile">
            <ul className="if mobile-menu-list">
              <li className="if mobile-menu-item logo-holder">
                <a href="/" className="if mobile-menu-action logo small"><span className="if axe sr-only">Home</span></a>
              </li>
              <li className="if mobile-menu-item login-holder">
                <button type="button" className="if mobile-menu-action button login">Līga Latvian</button>
              </li>
              <li className="if mobile-menu-item mobile-menu-holder">
                <button type="button" className="if mobile-menu-action button mobile-menu">Menu</button>
              </li>
            </ul>
          </div>

          {/* desktop */}
          <div className="if desktop container">
            <button type="button" className="if color background darkBeige button info"><span className="">Līga Latvian</span> <span aria-hidden="true" className="if icon ui drop-down" style={{marginLeft: '20px', marginRight: 0}}></span></button>
          </div>
        </nav>
        <nav className="if secondary secondary-custom">
          <div className="if desktop container">
            <ul className="if desktop-menu-list">
              <li className="if desktop-menu-item" style={{marginRight: '2rem'}}>
                <a href="/" className="if desktop-menu-action logo icon-custom"><span className="if axe sr-only">Home</span></a>
              </li>
              { navigation.map((n, i) => 
                <li className="if desktop-menu-item" key={i}>
                  <a href={n.path} className="if desktop-menu-action">
                    <span className="if text body" style={{fontWeight: (n.active ? 'bold' : '')}}>
                      {n.name}
                    </span>
                    {n.badges && <span className="badge badge-custom">{n.badges}</span>}
                  </a>
                </li>
              )}           
              <div className="spacer"></div>
              <li className="if desktop-menu-item">
                <a href="/" className="if desktop-menu-action"><span className="if text body">Buy policy</span></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="if main">
        {InsurancePolicies()}
      </main>

    </div>
  )
}

export default App
