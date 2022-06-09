import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import styled from 'styled-components'

const Hand = styled.p`
  cursor: pointer;
  &:hover {
    color: ${props => props.hoverColor};
  }
`
const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.logoNav}>
        <Link href="/">
          <Hand hoverColor="#1f61a3;">CPS</Hand>
        </Link>
      </div>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/points'>Points</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
