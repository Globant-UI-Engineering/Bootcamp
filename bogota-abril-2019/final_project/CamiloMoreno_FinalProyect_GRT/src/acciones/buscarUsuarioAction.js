import { BUSCAR_USUARIO } from './types';

export const buscarUsuario = (id, usuario) => {
    usuario.id = id ? id : -1;
    return {
        type: BUSCAR_USUARIO,
        usuario
    }
}