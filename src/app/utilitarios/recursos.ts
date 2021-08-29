export function numero_para_arrays(tamanho : number) : Array<number> {
    let array_resultado = [];
    for (let contador = 1; contador <= tamanho; contador++) {
        array_resultado.push(contador);
    }
    return array_resultado;
}

export function conversor_url(texto : string) : string {
    let url_final = '';
    for (let contador_caracter = 0; contador_caracter < texto.length; contador_caracter++) {
        if (texto[contador_caracter] != 'ª') {
            url_final += texto[contador_caracter];
        }
    }
    return url_final;
}

export function url_para_nome(texto : string) : string {
    let nome_final = '';
    let lastIndex = 0;
    for (let contador_caracter = 0; contador_caracter < texto.length; contador_caracter++) {
        if (!isNaN(+texto[contador_caracter])) {
            nome_final += texto[contador_caracter];
        } else {
            lastIndex = contador_caracter;
            break;
        }
    }
    nome_final += 'ª' + texto.slice(lastIndex, texto.length);
    return nome_final;
}