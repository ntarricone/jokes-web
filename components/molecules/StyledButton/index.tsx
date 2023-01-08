import styled from 'styled-components'

export const StyledButton = styled.button`
  color: white;
  background: black;
  padding: 16px 32px;
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;
  border: 0px;
  border-radius: 12px;
  cursor: pointer;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      #f9002f,
      #186cb8,
      #f1b211,
      #186cb8,
      #f9002f,
      #186cb8,
      #f1b211,
      #186cb8
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);

    animation: glowing 20s linear infinite;

    @keyframes glowing {
      0% {
        background-position: 0 0;
      }
      50% {
        background-position: 400% 0;
      }
      100% {
        background-position: 0 0;
      }
    }
  }
`
