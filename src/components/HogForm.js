import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

function HogForm({ addHog }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [weight, setWeight] = useState("");
  const [greased, setGreased] = useState(false);
  const [medal, setMedal] = useState("bronze");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newHog = {
      name,
      image,
      specialty,
      weight: parseInt(weight),
      greased,
      "highest medal achieved": medal,
    };
    addHog(newHog);
    setName("");
    setImage("");
    setSpecialty("");
    setWeight("");
    setGreased(false);
    setMedal("bronze");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <Form.Input
          fluid
          label="Image URL"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Specialty"
          value={specialty}
          onChange={(event) => setSpecialty(event.target.value)}
        />
        <Form.Input
          fluid
          label="Weight"
          value={weight}
          type="number"
          onChange={(event) => setWeight(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Checkbox
        label="Greased"
        checked={greased}
        onChange={() => setGreased(!greased)}
      />
      <Form.Dropdown
        label="Highest Medal Achieved"
        options={[
          { key: "bronze", text: "Bronze", value: "bronze" },
          { key: "silver", text: "Silver", value: "silver" },
          { key: "gold", text: "Gold", value: "gold" },
        ]}
        value={medal}
        onChange={(event, { value }) => setMedal(value)}
      />
      <Button type="submit">Add Hog</Button>
    </Form>
  );
}

export default HogForm;
