
//Action Creator - O seu papel é retornar uma action !
export function alterarNumeroMinimo(novoNumero) {
    return {
        type: 'NUM_MIN_ALTERADO',
        payload: novoNumero
    }
}