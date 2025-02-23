import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Lista(props) {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th style={{ width: '35%' }}>Dirección</th>
                    <th style={{ width: '35%' }}>Carrera</th>
                    <th style={{ width: '10%' }}>Abreviatura</th>
                    <th style={{ width: '10%' }}>Estatus</th>
                    <th style={{ width: '10%' }}>
                        <Button variant="primary" size="sm" onClick={() => props.handleAgrega()}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {renglones(props.estatus, props.handleEdita, props.handleBorra)}
            </tbody>
        </Table>
    );
}

function renglones(estatus, handleEdita, handleBorra) {
    if (estatus.loading) {
        return (
            <tr>
                <td colSpan={5} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Cargando...
                </td>
            </tr>
        );
    }
    if (!estatus.result || !Array.isArray(estatus.result.data) || estatus.result.data.length === 0) {
        return (
            <tr>
                <td colSpan={5} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    Sin carreras
                </td>
            </tr>
        );
    }
    return estatus.result.data.map((r) => (
        <tr key={r.id}>
            <td>{r.direccion}</td>
            <td>{r.carrera}</td>
            <td>{r.abreviatura}</td>
            <td>{r.estatus}</td>
            <td>
                <Button variant="outline-secondary" size="sm" onClick={() => handleEdita(r)}>
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
                &nbsp;
                <Button variant="outline-danger" size="sm" onClick={() => handleBorra(r)}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </td>
        </tr>
    ));
}
