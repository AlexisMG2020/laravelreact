import React, {useState, useEffect} from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

export default function Formulario(props) {
    const [formulario, setFormulario] = useState(props.formulario);

    useEffect(() => {
        setFormulario(props.formulario);
    }, [props.formulario]);

    function handleChange(event) {
        const {name, value} = event.target;
        setFormulario({...formulario, ...{[name]: value}});
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.handleSubmit(formulario);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="carrera_id">
                <Form.Label column sm="2">
                    Carrera
                </Form.Label>
                <Col sm="10">
                <Form.Control as="select" name="carrera_id" value={formulario.carrera_id} onChange={handleChange}>
                    <option value="1">Desarrollo de Software Multiplataforma</option>
                    <option value="2">Infraestructura de Redes Digitales</option>
                    <option value="3">Mecatrónica Área Sistema de Manufactura Flexible</option>
                    <option value="4">Desarrollo de Negocios, Área Mercadotecnia</option>
                </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="asignatura">
                <Form.Label column sm="2">
                    Asignatura
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="asignatura" value={formulario.asignatura} onChange={handleChange} placeholder="Asignatura" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="abreviatura">
                <Form.Label column sm="2">
                    Abreviatura
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="abreviatura" value={formulario.abreviatura} onChange={handleChange} placeholder="Abreviatura" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="estatus">
                <Form.Label column sm="2">
                    Estatus
                </Form.Label>
                <Col sm="10">
                    <Form.Check
                        type="radio"
                        label="Activo"
                        value="Activo"
                        name="estatus"
                        id="EstatusActivo"
                        checked={'Activo' == formulario.estatus}
                        onChange={handleChange}
                    />
                    <Form.Check
                        type="radio"
                        label="Inactivo"
                        value="Inactivo"
                        name="estatus"
                        id="EstatusInactivo"
                        checked={'Inactivo' == formulario.estatus}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">
                        <FontAwesomeIcon icon={faSave} />
                        guardar
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    );
}