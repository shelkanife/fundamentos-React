import "../styles/Todo.scss";
import ListItem from "./ListItem";
const List = ({ data, fnc, fncRemove }) => {
  return (
    <ul>
      {data.map((item) => (
        <ListItem key={item.id} item={item} fncRemove={fncRemove} fnc={fnc} />
      ))}
    </ul>
  );
};
export default List;
