import styled from "styled-components";
import ResumeItem from "./ResumeItem";

const ResumeList = ({ title, items }) => {
  return (
    <List>
      <div className='titleContainer'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <div className='line'></div>
      </div>
      {items &&
        items.map((item) => (
          <ResumeItem
            key={item.id}
            place={item.place}
            underTitle={item.underTitle}
            date={item.date}
            description={item.description}
          />
        ))}
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  .titleContainer {
    width: fit-content;
    h2 {
      color: black;
    }
  }

  .line {
    height: 2px;
    width: 100%;
    border-radius: 5px;
    background-color: #cc5200;
  }
`;

export default ResumeList;
