import React from "react";
import { Link } from "react-router-dom";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemActionButton from "../components/ListItemActionButton";
import ListItemText from "../components/ListItemText";

const EntriesList = ({ data, deleteEntry }) => (
  <List>
    {data.length > 0 ? (
      data.map(({ id, created, content }) => (
        <ListItem key={id}>
          <ListItemText>{created}</ListItemText>
          <ListItemText secondary>{content}</ListItemText>
          <ListItemActionButton icon="delete" onClick={() => deleteEntry(id)} />
        </ListItem>
      ))
    ) : (
      <p>
        {"You do not have any entries, "}
        <Link to="/create">{"click here to add an entry"}</Link>
        {"."}
      </p>
    )}
  </List>
);

export default EntriesList;
