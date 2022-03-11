import styled from 'styled-components';

type WorkoutLayoutProp = {
  isPaused?: boolean;
};

export const WrapperStyles = styled.div<WorkoutLayoutProp>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .illo {
    width: 80vh;
    height: 80vh;
    border: 1px solid red;
    padding: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    svg,
    svg *,
    svg > *,
    svg * > * {
      transition: filter 0.2s, opacity 0.2s;
      filter: ${(props) =>
        props.isPaused ? 'grayscale(100%)' : 'none'}!important;
      opacity: ${(props) => (props.isPaused ? '.8' : '1')}!important;
      animation-play-state: ${(props) =>
        props.isPaused ? 'paused' : 'running'}!important;
    }
  }
  .post-workout {
    text-align: center;
    h2,
    h3 {
      margin: 0;
    }
    h2 {
      font-size: 4.8rem;
      margin-bottom: 0.25em;
      color: var(--red400);
    }
    h3 {
      font-size: 2.2rem;
      font-weight: 400;
      color: var(--red700);
      margin-bottom: 2rem;
    }
    button {
      padding: 1.2rem 2.4rem;
      font-size: 1.8rem;
      border-radius: 3rem;
      background-color: var(--cyan500);
      color: #fff;
      border: none;
      outline: none;
      transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
      &:hover {
        background-color: var(--cyan600);
        transform: translateY(-2px);
        box-shadow: var(--low-elevation);
      }
      &:focus {
        box-shadow: var(--focus-shadow);
      }
    }
    @media screen and (max-width: 580px) {
      h2 {
        font-size: 3.2rem;
      }
      h3 {
        font-size: 2rem;
      }
      button {
        font-size: 1.6rem;
      }
    }
  }
`;
