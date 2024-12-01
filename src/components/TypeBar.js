import { observer } from "mobx-react-lite";
import React, { useContext ,  useState } from "react";
import { Context } from "..";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Dropdown } from "react-bootstrap";

 
const TypeBar = observer(() => {
  const [selectedType, setSelectedType] = useState(null);

  const { book } = useContext(Context);
  const handleReset = () => {
    setSelectedType(null);
    book.setSelectedType(null)
     console.log('ok');
     console.log(setSelectedType);
    };
  return (
    <div className="main-categories">
      <Dropdown>
              <Dropdown.Toggle
                variant="outline-dark"
                id="dropdown-basic"
                style={{ marginLeft: "00px", width:"100%"  }}
              >
                Пользователь
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item >
                  Купленные книги
                </Dropdown.Item>
                <Dropdown.Item >
                  Выйти
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
      <h3>Жанры</h3>
      <ListGroup>
        {book.janre.map((janre) => (
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            active={janre.id === book.selectedType?.id}
            onClick={() => book.setSelectedType(janre)}
            key={janre.id}
          >
            {janre.name}
          </ListGroup.Item>
          
        ))}
      </ListGroup>
      <button onClick={handleReset}>Сбросить</button>


    </div>
  );
});

export default TypeBar;
