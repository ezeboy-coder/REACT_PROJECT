import ListGroup from "./components/ListGroup";

const cities = ["New York", "New Jersey", "Toronto"];
const handleClick = (items:string)=>{
  console.log(items)
}
const App = () => {
  return (
    <>
      <ListGroup cities={cities} heading="Latetst" clicked={handleClick} />
    </>
  );
};

export default App;
