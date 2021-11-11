import styled from "styled-components";

const TechItem = ({ title, Icon, description }) => {
  return (
    <Tech>
      <div className='icon'>{Icon}</div>
      <div>
        <h3>{title}</h3>
      </div>
      <div className='description'>
        <p>{description}</p>
      </div>
    </Tech>
  );
};

const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 4rem;
  .icon {
    max-width: 100px;
    max-height: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  div {
    margin-top: 1.5rem;
  }
  h3,
  p {
    color: black;
    line-height: 1.8rem;
    letter-spacing: 1px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .description {
    span {
      font-weight: bolder;
    }
  }

  svg {
    font-size: 5rem;
  }
`;

export default TechItem;
