import React from "react";
import { Checkbox, Dropdown, Menu } from "semantic-ui-react";

function Nav({ greasedOnly, toggleGreasedOnly, sortOption, handleSort }) {
  return (
    <Menu>
      <Menu.Item>
        <Checkbox
          label="Greased only"
          checked={greasedOnly}
          onChange={toggleGreasedOnly}
        />
      </Menu.Item>
      <Menu.Item>
        <Dropdown
          text={`Sort by ${sortOption}`}
          options={[
            { key: "name", text: "Name", value: "name" },
            { key: "weight", text: "Weight", value: "weight" },
          ]}
          value={sortOption}
          onChange={handleSort}
        />
      </Menu.Item>
    </Menu>
  );
}

export default Nav;
