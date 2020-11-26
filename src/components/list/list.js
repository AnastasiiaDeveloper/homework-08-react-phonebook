import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { deletContactThunk } from "./../../toolkitRedux/toolkitReducer";
import {
  contactsSelector,
  filterSelector,
  keyAuthSelector,
} from "./../../toolkitRedux/contacts-selectors";
import "./list.css";

const List = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const a = useSelector(contactsSelector);
  const con = useMemo(() => a);
  const filter = useSelector(filterSelector);
  const key = useSelector(keyAuthSelector);
  const removeI = useCallback(
    (id) => {
      dispatch(deletContactThunk(id, key));
    },
    [dispatch]
  );
  const deleteI = (id) => {
    removeI(id);
  };
  useEffect(() => {
    console.log(con.length);
    if (con.length === 0) {
      setItems(con);
    } else {
      setItems(con.slice().sort((a, b) => b.id - a.id));
    }

    console.log(con);
  }, [con]);
  const filterSearch = (arrayTodo) => {
    if (filter === "") {
      return arrayTodo;
    } else {
      return arrayTodo.filter((item) => {
        return item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
      });
    }
  };
  const datarr = filterSearch(items).map(({ id, name, number }) => {
    return (
      <CSSTransition key={id} timeout={500} classNames="item">
        <ListGroup.Item className="li">
          <p>{name}</p> <p> {number}</p>
          <Button
            className="remove-btn"
            variant="danger"
            size="sm"
            onClick={() => deleteI(id)}
          >
            &times;
          </Button>
        </ListGroup.Item>
      </CSSTransition>
    );
  });
  if (items.length === 0) {
    return <div style={{ marginTop: "20px" }}>записей не найдено</div>;
  }
  return (
    <Container style={{ marginTop: "2rem" }}>
      <ListGroup style={{ marginBottom: "1rem" }}>
        <TransitionGroup className="todo-list">{datarr}</TransitionGroup>
      </ListGroup>
    </Container>
  );
};
export default List;
