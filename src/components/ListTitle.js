import styled from "styled-components";

const ListTitle = ({ title }) => {
  return (
    <TitleStyle>
      <h2 className='title'>{title.toUpperCase()}</h2>
      <div className='line'></div>
    </TitleStyle>
  );
};

const TitleStyle = styled.div`
  width: fit-content;
  h2 {
    color: black;
  }

  .line {
    height: 2px;
    width: 100%;
    border-radius: 5px;
    background-color: #cc5200;
  }
`;

export default ListTitle;
