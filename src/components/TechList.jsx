import styled from "styled-components";
import ListTitle from "./ListTitle";
import TechItem from "./TechItem";

const TechList = ({ title, items }) => {
  return (
    <List>
      <div>
        <ListTitle title={title} />
      </div>
      {items &&
        items.map((item) => (
          <TechItem
            key={item.id}
            title={item.title}
            Icon={item.icon}
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
  max-width: 500px;
`;

export default TechList;
