import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import Home from '../../pages'

const MOCK_JOKES = [
  {
    id: 1,
    type: 'general',
    setup: 'What did the fish say when it hit the wall?',
    punchline: 'Dam.',
  },
  {
    id: 2,
    type: 'general',
    setup: 'How do you make a tissue dance?',
    punchline: 'You put a little boogie on it.',
  },
  {
    id: 3,
    type: 'general',
    setup: "What's Forrest Gump's password?",
    punchline: '1Forrest1',
  },
]

it('should reveal joke on clicking button and then dissapear', () => {
  const { container } = render(<Home jokes={MOCK_JOKES} />)

  const setup = container.querySelector('.setup')
  expect(setup).toBeInTheDocument()

  const hiddenPunchline = container.querySelector('.punchline')
  expect(hiddenPunchline).not.toBeInTheDocument()

  const buttonRevealJoke = screen.getByRole('button', { name: /reveal/i })
  expect(buttonRevealJoke).toBeInTheDocument()

  fireEvent.click(buttonRevealJoke)
  const visiblePunchline = container.querySelector('.punchline')

  expect(visiblePunchline).toBeInTheDocument()

  const buttonNextJoke = screen.getByRole('button', { name: /next/i })
  expect(buttonNextJoke).toBeInTheDocument()

  fireEvent.click(buttonNextJoke)
  expect(hiddenPunchline).not.toBeInTheDocument()
})
