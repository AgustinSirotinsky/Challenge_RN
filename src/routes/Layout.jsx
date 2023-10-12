import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

export default function Layout() {
const [search, setSearch] = useState("");

const handleSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
};

return (
    <React.Fragment>
    <Navbar className="bg-body-tertiary" fixed="top">
        <Navbar.Brand>
        <Form.Control type="search" placeholder="Search" onChange={handleSearchChange} />
        </Navbar.Brand>
    </Navbar>
    <Container fluid style={{ marginTop: "56px" }}>
        <Outlet />
    </Container>
    </React.Fragment>
);
}