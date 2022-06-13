import styled from 'styled-components'
import Link from 'next/link'

const Welcome = styled.p`
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  &:hover {
    color: ${props => props.hoverColor};
  }
`
const TextLink = styled.p`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  &:hover {
    color: ${props => props.hoverColor};
    text-decoration: underline;
  }
`

export default function Home({ articles }) {

  return (
    <div >
      <Welcome>Welcome to the Customer Point System!</Welcome>

      <TextLink hoverColor="#1f61a3;"><Link href='/points'>Click here to view points</Link></TextLink>

    </div>
  )
}


