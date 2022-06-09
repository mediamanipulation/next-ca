import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Customer</span> Point System
      </h1>
      <p className={headerStyles.description}>
        Spend More = Make More!
      </p>
    </div>
  )
}

export default Header
