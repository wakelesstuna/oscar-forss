import styled from "styled-components";

const ResumeItem = ({ place, underTitle, date, description }) => {
  return (
    <Item>
      <h3>{place}</h3>
      <p className='underTitle'>{underTitle}</p>
      <p className='date'>• {date}</p>
      <p className='description'>{description}</p>
    </Item>
  );
};

const Item = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0rem;
  h3,
  p {
    color: #313131;
  }
  h3 {
    font-size: 2rem;
    padding: 1rem 0rem;
  }
  .underTitle {
    font-style: italic;
    font-size: 1.4rem;
    font-family: "Libre Baskerville", serif;
  }
  .date {
    font-size: 1rem;
    padding-top: 0.5rem;
  }
  .description {
    padding-top: 1.8rem;
    line-height: 1.8rem;
    letter-spacing: 1px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export default ResumeItem;
