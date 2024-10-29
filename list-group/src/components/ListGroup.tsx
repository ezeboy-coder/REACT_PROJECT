import { useState } from "react";

interface Props {
  cities: string[];
  heading: string;
  clicked: (item: string) => void;
}

const ListGroup = ({ cities, heading, clicked }: Props) => {
  const [currentState, updatedState] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={city}
            className={
              currentState == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              clicked(city);
              updatedState(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
