import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'

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
      <Head>
        <title>Customer Point System</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Welcome>Welcome to the Customer Point System!</Welcome>

      <TextLink hoverColor="#1f61a3;"><Link href='/points'>Click here to view points</Link></TextLink>

    </div>
  )
}


