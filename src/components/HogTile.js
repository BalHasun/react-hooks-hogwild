import React from "react";
import { Card, Icon } from "semantic-ui-react";

function HogTile({ hog, hidden, toggleHidden }) {
  const {
    name,
    image,
    specialty,
    weight,
    greased,
    "highest medal achieved": medal,
  } = hog;

  const toggleVisibility = () => {
    toggleHidden(hog);
  };

  return (
    <Card.Group>
      {!hidden && (
        <Card>
          <Card.Content>
            <Card.Header>{name}</Card.Header>
          </Card.Content>
          <img src={image} alt={name} />
          <Card.Content>
            <Card.Meta>
              <Icon name="trophy" />
              {medal}
            </Card.Meta>
            <Card.Description>
              <p>Specialty: {specialty}</p>
              <p>Weight: {weight}</p>
              <p>Greased: {greased ? "Yes" : "No"}</p>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon
              name={`eye${hidden ? " slash outline" : ""}`}
              onClick={toggleVisibility}
            />
          </Card.Content>
        </Card>
      )}
    </Card.Group>
  );
}

export default HogTile;
