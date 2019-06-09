import { BUSCAR_USUARIO } from '../acciones/types';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case BUSCAR_USUARIO:
            return {
                ...state,
                id: action.usuario.id,
                primerNombre: action.usuario.primerNombre,
                segundoNombre: action.usuario.segundoNombre,
                primerApellido: action.usuario.primerApellido,
                segundoApellido: action.usuario.segundoApellido,
                correoElectronico: action.usuario.correoElectronico,
                telefono: action.usuario.telefono,
                codigoUniversitario: action.usuario.codigoUniversitario,
                facultad: action.usuario.facultad,
                tipo: action.usuario.tipo,
                herramientasSolicitadas: action.usuario.herramientasSolicitadas ? action.usuario.herramientasSolicitadas : [],
            }
        default:
            return state;
    }
}