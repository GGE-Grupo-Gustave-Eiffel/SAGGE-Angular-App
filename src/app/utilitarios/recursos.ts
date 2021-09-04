export function numero_para_arrays(tamanho : number) : Array<number> {
    let array_resultado = [];
    for (let contador = 1; contador <= tamanho; contador++) {
        array_resultado.push(contador);
    }
    return array_resultado;
}

export function faltas_por_aluno(faltas : Array<any>) {

    if (!faltas) return [];

    let total_de_faltas_por_aluno : Array<any> = [];
    let beautiful_output : Array<any> = [];
    faltas.forEach(falta => {
        if (total_de_faltas_por_aluno.filter(aluno => aluno.nome == falta.nome).length > 0) {
            if (total_de_faltas_por_aluno.filter(aluno => aluno.nome == falta.nome)[0][falta.tipodefalta]) {
                total_de_faltas_por_aluno.filter(aluno => aluno.nome == falta.nome)[0][falta.tipodefalta] += 1;
            } else {
                total_de_faltas_por_aluno.filter(aluno => aluno.nome == falta.nome)[0][falta.tipodefalta] = 1
            }
        } else {
            total_de_faltas_por_aluno.push({nome : falta.nome});
            total_de_faltas_por_aluno.filter(aluno => aluno.nome == falta.nome)[0][falta.tipodefalta] = 1;
        }
    });

    total_de_faltas_por_aluno.forEach(falta => {
        let msg = `Foram registadas para ${falta.nome} : ` + 
        (falta['Ausência'] ? ` ${falta['Ausência']} falta(s) por ausência ` : '') +
        (falta['Indisciplina'] ? `, ${falta['Indisciplina']}  por indisciplina` : '') 
        + (falta['Material'] ? ' e ' : '') + (falta['Material'] ? ` ${falta['Material']} falta(s) por material` : '') + '.';	  								
        beautiful_output.push(msg);		
    });

    return beautiful_output;
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

export function de_url_para_turma(texto : string) : string {
    let turma_nome = '';
    for (let contador = 0; contador < texto.length; contador++) {
        if (!isNaN(+texto.charAt(contador))) {
            turma_nome += texto.charAt(contador);
        } else {
            turma_nome += 'ª' + texto.slice(contador,);
            break;
        }
    }
    return turma_nome;
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





