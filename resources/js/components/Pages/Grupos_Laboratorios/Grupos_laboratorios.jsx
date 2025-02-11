import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Tarjeta from '../Tarjeta';
import ConfirmaEliminacion from '../ConfirmaEliminacion';
import MiModal from '../MiModal';
import Lista from './Lista';
import Formulario from './Formulario';
import useFetch from '../../../hooks/useFetch';
import MensajeError from '../MensajeError';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import {API_GRUPOS_LABORATORIOS as API_URL, METODO_LISTAR, METODO_CREAR, METODO_EDITAR, METODO_BORRAR, API_TOKEN, CREAR, EDITAR} from '../../Constantes';
const opcionesListar = {};

export default function Grupos_Laboratorios(props) {
    // estados
    const[datosModal, setDatosModal] = useState({mostrar:false});
    const[datosConfirmaEliminacion, setDatosConfirmaEliminacion] = useState({mostrar:false});
    const[accion, setAccion] = useState(null);
    const[formulario, setFormulario] = useState({
            laboratorio_id:1
            , cuatrimestre_id:1
            , direccion_id:1
            , carrera_id:1
            , asignatura_id:1
            , docente_id:1
            , dias_asignados: []
            , grupo: 'MEC21'
            , lunes_inicio: '00:00:00'
            , lunes_fin:'00:00:00'
            , martes_inicio:'00:00:00'
            , martes_fin:'00:00:00'
            , miercoles_inicio:'00:00:00'
            , miercoles_fin:'00:00:00'
            , jueves_inicio:'00:00:00'
            , jueves_fin:'00:00:00'
            , viernes_inicio:'00:00:00'
            , viernes_fin:'00:00:00'
            , sabado_inicio:'00:00:00'
            , sabado_fin:'00:00:00'
            , domingo_inicio:'00:00:00'
            , domingo_fin:'00:00:00'
            , estatus: 'Activo'
    });
    const[url_lista, setUrlLista] = useState(API_URL);
    const[url_edicion, setUrlEdicion] = useState(API_URL);
    const[url_borra, setUrlBorra] = useState(API_URL);
    const[id, setId] = useState(0);
    const[opcionesCreacion, setOpcionesCreacion] = useState({body:null});
    const[detonarCreacion, setDetonarCreacion] = useState(false);
    const[opcionesEdicion, setOpcionesEdicion] = useState({body:null});
    const[detonarEdicion, setDetonarEdicion] = useState(false);
    const[opcionesBorrado, setOpcionesBorrado] = useState({body:null});
    const[detonarBorrado, setDetonarBorrado] = useState(false);
    
    const estatusLista = useFetch(url_lista, opcionesListar, API_TOKEN, METODO_LISTAR, true);
    const estatusCrear = useFetch(API_URL, opcionesCreacion, API_TOKEN, METODO_CREAR, detonarCreacion);
    const estatusEditar = useFetch(url_edicion, opcionesEdicion, API_TOKEN, METODO_EDITAR, detonarEdicion);
    const estatusBorrar = useFetch(url_borra, opcionesBorrado, API_TOKEN, METODO_BORRAR, detonarBorrado);

    // efectos
    useEffect(() => {
        //si se encuentra cargando no hacer nada, aún no hay respuesta
        if (estatusCrear.loading)
            return;
        //analizar código de error
        switch(estatusCrear.status) {
            case 201:
                toast.success(<MensajeCreadoEditado titulo="Registro creado" result={estatusCrear.result} />, {autoClose: 2500});
                setDatosModal({mostrar:false});
                setUrlLista(`${API_URL}?time=${(new Date()).getTime()}`);
                setDetonarCreacion(false);
                break;
            default:
                toast.error(<MensajeError results={estatusCrear.result} />, {autoClose: 2500});
        }
    }, [estatusCrear])

    useEffect(() => {
        //si se encuentra cargando no hacer nada, aún no hay respuesta
        if (estatusEditar.loading)
            return;
        //analizar código de error
        switch(estatusEditar.status) {
            case 200:
                toast.success(<MensajeCreadoEditado titulo="Registro actualizado" result={estatusEditar.result} />, {autoClose: 2500});
                setDatosModal({mostrar:false});
                setUrlLista(`${API_URL}?time=${(new Date()).getTime()}`);
                setDetonarEdicion(false);
                break;
            default:
                toast.error(<MensajeError results={estatusEditar.result} />, {autoClose: 2500});
        }
    }, [estatusEditar])
    
    useEffect(() => {
        //si se encuentra cargando no hacer nada, aún no hay respuesta
        if (estatusBorrar.loading)
            return;
        //analizar código de error
        switch(estatusBorrar.status) {
            case 200:
                toast.success(estatusBorrar.result.message, {autoClose: 2500});
                setUrlLista(`${API_URL}?time=${(new Date()).getTime()}`);
                setDetonarBorrado(false);
                break;
            default:
                toast.error(<MensajeError results={estatusBorrar.result} />, {autoClose: 2500});
        }
    }, [estatusBorrar])


    function handleAgrega() {
        setAccion(CREAR);
        setDatosModal({
            mostrar: true
            , titulo: 'Agregar Grupo Laboratorio'
        });
    }
    
    function handleEdita(registro) {
        setId(registro.id);
        setAccion(EDITAR);
        setFormulario({
            laboratorio_id: registro.laboratorio_id
            , cuatrimestre_id: registro.cuatrimestre_id
            , direccion_id: registro.direccion_id
            , carrera_id: registro.carrera_id
            , asignatura_id: registro.asignatura_id
            , docente_id: registro.docente_id
            , dias_asignados: registro.dias_asignados
            , grupo: registro.grupo
            , lunes_inicio: registro.lunes_inicio
            , lunes_fin: registro.lunes_fin
            , martes_inicio: registro.martes_inicio
            , martes_fin: registro.martes_fin
            , miercoles_inicio: registro.miercoles_inicio
            , miercoles_fin: registro.miercoles_fin
            , jueves_inicio: registro.jueves_inicio
            , jueves_fin: registro.jueves_fin
            , viernes_inicio: registro.viernes_inicio
            , viernes_fin: registro.viernes_fin
            , sabado_inicio: registro.sabado_inicio
            , sabado_fin: registro.sabado_fin
            , domingo_inicio: registro.domingo_inicio
            , domingo_fin: registro.domingo_fin
            , estatus: registro.estatus
        });
        setDatosModal({
            mostrar: true
            , titulo: 'Editar Grupo Laboratorio'
        });
    }
    
    function handleBorra(registro) {
        setUrlBorra(`${API_URL}/${registro.id}`);
        setDatosConfirmaEliminacion({
            mostrar: true
            , titulo: 'CONFIRMA'
            , body: '¿Realmente deseas eliminar el elemento?'
        });
    }

    function handleSubmit(formulario) {
        switch(accion) {
            case CREAR:
                toast.info('Enviando datos (creación)...', {autoClose: 1500});
                setDetonarCreacion(true);
                setOpcionesCreacion({body:JSON.stringify(formulario)});
                break;
            case EDITAR:
                toast.info('Enviando datos (edición)...', {autoClose: 1500});
                setUrlEdicion(`${API_URL}/${id}`)
                setDetonarEdicion(true);
                setOpcionesEdicion({body:JSON.stringify(formulario)});
                break;
            default:
        }
    }

    function handleConfirmaEliminacion() {
        setDatosConfirmaEliminacion({mostrar:false});
        setDetonarBorrado(true);
        setOpcionesBorrado({body:null});
    }

    return (
        <Tarjeta titulo={<><FontAwesomeIcon icon={faBuilding} />Grupos Laboratorios</>}>
            <ConfirmaEliminacion datos={datosConfirmaEliminacion} handleConfirmaEliminacion={handleConfirmaEliminacion} />
            <MiModal datos={datosModal}>
                <Formulario formulario={formulario} handleSubmit={handleSubmit} />
            </MiModal>
            <Lista handleAgrega={handleAgrega} handleEdita={handleEdita} handleBorra={handleBorra} estatus={estatusLista} />
        </Tarjeta>
    );
}

function MensajeCreadoEditado(props) {
    const { id, laboratorio_id, cuatrimestre_id, direccion_id, carrera_id, asignatura_id, docente_id, dias_asignados, grupo, lunes_inicio, lunes_fin, martes_fin, martes_inicio, miercoles_inicio, miercoles_fin, jueves_inicio, jueves_fin, viernes_inicio, viernes_fin, sabado_inicio, sabado_fin, domingo_inicio, domingo_fin, estatus } = props.result.data;

    return (
        <>
            <div>
                <strong>{props.titulo}</strong>
            </div>
            {/* <div>
                [{id}] ({dias_asignados?.join(', ')}) 
            </div> */}
        {/*     <div>
    [{id}] ({Array.isArray(dias_asignados) ? dias_asignados.join(', ') : 'Sin días asignados'}) 
</div> */}

        </>
    );
}


    /* function MensajeCreadoEditado(props) {
        const { titulo, result } = props;
    
        // Si `result` es undefined o null, usa un objeto vacío
        const { dias_asignados = [], grupo = "Sin grupo" } = result || {};
    
        return (
            <>
                <div>
                    <strong>{titulo}</strong>
                </div>
                <div>
                    [{grupo}] ({dias_asignados.length > 0 ? dias_asignados.join(', ') : "Sin días asignados"})
                </div>
            </>
        );
    } */
    