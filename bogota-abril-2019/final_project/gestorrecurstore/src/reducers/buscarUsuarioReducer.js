import { BUSCAR_USUARIO } from '../acciones/types';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case BUSCAR_USUARIO:
            return {
                ...state,
                primerNombre:action.usuario.primerNombre,
                segundoNombre:action.usuario.segundoNombre,
                primerApellido:action.usuario.primerApellido,
                segundoApellido:action.usuario.segundoapellido,
                correoElectronico:action.usuario.correoElectronico,
                telefono:action.usuario.telefono,
                codigoUniversitario:action.usuario.codigoUniversitario,
                facultad:action.usuario.facultad,
                tipo:action.usuario.tipo,
            }
        default:
            return state;
    }
}