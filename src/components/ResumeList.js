import styled from "styled-components";
import ListTitle from "./ListTitle";
import ResumeItem from "./ResumeItem";

const ResumeList = ({ title, items }) => {
  return (
    <List>
      <div>
        <ListTitle title={title} />
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
  max-width: 900px;
`;

export default ResumeList;
