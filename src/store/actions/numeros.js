import {
    NUM_MAX_ALTERADO, 
    NUM_MIN_ALTERADO
} from './actionTypes'


//Action Creator - O seu papel é retornar uma action !
export function alterarNumeroMinimo(novoNumero) {
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}

//Action Creator - O seu papel é retornar uma action !
export function alterarNumeroMaximo(novoNumero) {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}