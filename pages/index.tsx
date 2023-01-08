import Head from 'next/head'
import { useEffect, useState } from 'react'
import { StyledButton } from '../components/molecules/StyledButton'
import { StyledTitle } from '../components/molecules/StyledTitle'
import { IJoke } from '../interfaces/IJoke'
import { shuffleArray } from '../utils'
import { Text } from '../components/atoms/text/text'
import { Content } from '../components/atoms/content/content'
import { css } from 'styled-components'
import { API } from '../constants'

const responsive = css`
  @media only screen and (max-width: 600px) {
    padding: 6rem 1rem;
  }
`
export default function Home({ jokes }: { jokes: IJoke[] }) {
  const [selectedJoke, setSelectedJoke] = useState<IJoke>()
  const [isPunchlineRevealed, setIsPunchlineRevealed] = useState(false)

  useEffect(() => {
    chooseRandomJoke()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const chooseRandomJoke = () => {
    setIsPunchlineRevealed(false)

    let shuffledIndexes = shuffleIndexes({})

    const index = getIndex(shuffledIndexes.length - 1)

    const draftJoke = jokes[shuffledIndexes[index]]

    if (!draftJoke) chooseRandomJoke()
    else setSelectedJoke(draftJoke)
  }

  const shuffleIndexes = ({
    forceShuffle = false,
  }: {
    forceShuffle?: boolean
  }): number[] => {
    let shuffledIndexes = JSON.parse(
      localStorage.getItem('shuffledIndexes') || '[]'
    )

    if (shuffledIndexes.length && !forceShuffle) return shuffledIndexes

    shuffledIndexes = (shuffleArray(jokes) as IJoke[]).map(({ id }) => id)

    localStorage.setItem('shuffledIndexes', JSON.stringify(shuffledIndexes))

    return shuffledIndexes
  }

  const getIndex = (maxIndex: number): number => {
    let index = localStorage.getItem('currentIndex') || -1

    index = Number(index) + 1

    if (index > maxIndex) {
      index = 0
      shuffleIndexes({ forceShuffle: true })
    }

    localStorage.setItem('currentIndex', String(index))

    return index
  }

  const handleClick = () => {
    if (isPunchlineRevealed) chooseRandomJoke()
    else setIsPunchlineRevealed(true)
  }

  if (!selectedJoke)
    return (
      <Content minHeight="100vh" align="center" justify="center">
        <Text as="h1" size="2rem">
          Loading Joke...
        </Text>
      </Content>
    )

  return (
    <>
      <Head>
        <title>FathomJokes</title>
      </Head>
      <Content
        direction="column"
        justify="space-around"
        align="center"
        padding="6rem"
        minHeight="100vh"
        styles={responsive}
      >
        <>
          <StyledTitle size="2rem" align="center" className="setup">
            {selectedJoke.setup}
          </StyledTitle>
          {isPunchlineRevealed && (
            <Text size="3rem" align="center" className="punchline">
              {selectedJoke.punchline}
            </Text>
          )}
          <StyledButton onClick={handleClick}>
            <Text>
              {isPunchlineRevealed ? 'Next Joke' : 'Reveal Punchline'}
            </Text>
          </StyledButton>
        </>
      </Content>
    </>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${API}/jokes`)
    const jokes = await res.json()
    return {
      props: {
        jokes,
      },
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/404',
      },
    }
  }
}
