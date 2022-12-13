import "../styles/Todo.scss";
import ListItem from "./ListItem";
const List = ({ list, setList }) => {
  const removeTodo = (id) => {
    const filteredList = list.filter((item) => item.id !== id);
    console.log(filteredList);
    setList([...filteredList]);
  };
  return (
    <div className="list">
      <ul>
        {list.map((item, index) => (
          <ListItem item={item} index={index} removeTodo={removeTodo} />
        ))}
      </ul>
    </div>
  );
};
export default List;
