export interface identificador {
    id : number,
    tempos : number
}

export interface links_tipos {
    nome : string,
    link_caminho? : string | any;
}

export interface turma_tipo {
    nome : string
}

export interface minipauta_tipo {
    nome_disciplina : string,
    trimestres : Array<{nome_trimestre : string, dados_enviados : boolean}>
}

export interface tempoLectivo {
    id : number,
    disciplina : string,
    tempos_lectivos : number,
    nome : string,
    turma_id : number
}

export interface sumarios_tipo {
    sumario : string,
    detalhes_aula : detalhes_aula
}

export interface detalhes_aula {
    resumo : string,
    semana : string,
    licao : string
}