import {BUSCAR_USUARIO} from './types';

export const buscarUsuario= usuario=>{
    return{
        type: BUSCAR_USUARIO,
        usuario
    }
}