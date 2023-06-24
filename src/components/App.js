import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import HogForm from "./HogForm";
import { Card, Grid } from "semantic-ui-react";
import porkersData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(porkersData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortOption, setSortOption] = useState("name");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  const toggleGreasedOnly = () => {
    setGreasedOnly(!greasedOnly);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const toggleHiddenHog = (hog) => {
    setHiddenHogs((currentHiddenHogs) => {
      if (currentHiddenHogs.includes(hog)) {
        return currentHiddenHogs.filter((hiddenHog) => hiddenHog !== hog);
      } else {
        return [...currentHiddenHogs, hog];
      }
    });
  };

  const addHog = (hog) => {
    setHogs((currentHogs) => [...currentHogs, hog]);
  };

  const visibleHogs = greasedOnly ? hogs.filter((hog) => hog.greased) : hogs;

  const sortedHogs = [...visibleHogs].sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.weight - b.weight;
    }
  });

  const hogTiles = sortedHogs.map((hog) => (
    <HogTile
      key={hog.name}
      hog={hog}
      hidden={hiddenHogs.includes(hog)}
      toggleHidden={toggleHiddenHog}
    />
  ));

  return (
    <div className="App">
      <Nav
        greasedOnly={greasedOnly}
        toggleGreasedOnly={toggleGreasedOnly}
        sortOption={sortOption}
        handleSort={handleSort}
      />
      <HogForm addHog={addHog} />
      <Grid container columns={2}>
        {hogTiles.length > 0 ? (
          hogTiles
        ) : (
          <Card>
            <Card.Content>No hogs found.</Card.Content>
          </Card>
        )}
      </Grid>
    </div>
  );
}

export default App;
