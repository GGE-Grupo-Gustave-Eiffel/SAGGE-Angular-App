import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { CartaoTemposLectivosComponent } from './cartao-tempos-lectivos.component';
import { DebugElement } from '@angular/core';

describe('testes do cartaoTemposLectivosComponent', () => {
  let fixture: ComponentFixture<CartaoTemposLectivosComponent>;
  let cartaoTemposLectivosComponent: CartaoTemposLectivosComponent;
  let tituloTurma_el: DebugElement;
  let disciplina_e_tempos_el: DebugElement;
  let cartao_tempo_lectivo_el: DebugElement;
  let descricao_dos_tempos: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartaoTemposLectivosComponent],
    });

    fixture = TestBed.createComponent(CartaoTemposLectivosComponent);
    cartaoTemposLectivosComponent = fixture.componentInstance;

    cartaoTemposLectivosComponent.tempos_de_aula = {
      turma: '6ªClasse',
      temposLectivos: 2,
      disciplina: 'Física',
      id: 9,
    };

    cartaoTemposLectivosComponent.bandeira_aviso = { id: 9 };

    tituloTurma_el = fixture.debugElement.query(By.css('#turma'));
    disciplina_e_tempos_el = fixture.debugElement.query(
      By.css('#disciplina-e-tempolectivo')
    );
    cartao_tempo_lectivo_el = fixture.debugElement.query(
      By.css('#cartao_tempo_lectivo')
    );
  });

  it('deve setar as informações textuais do cartão de tempos lectivos', () => {
    descricao_dos_tempos =
      cartaoTemposLectivosComponent.descricao_tempos_lectivos(
        cartaoTemposLectivosComponent.tempos_de_aula.temposLectivos
      );

    fixture.detectChanges();
    expect(tituloTurma_el.nativeElement.innerHTML).toEqual(
      cartaoTemposLectivosComponent.tempos_de_aula.turma
    );
    expect(disciplina_e_tempos_el.nativeElement.innerHTML).toEqual(
      `${cartaoTemposLectivosComponent.tempos_de_aula.disciplina} | ${descricao_dos_tempos}`
    );
  });

  it('deve enviar um evento quando o cartão de tempos lectivos recebe um clique', () => {
    let id_valor!: number;

    cartaoTemposLectivosComponent.ao_activar_tempo_lectivo.subscribe(
      (cartao_id: number) => (id_valor = cartao_id)
    );
    cartao_tempo_lectivo_el.triggerEventHandler('click', null);

    expect(id_valor).toEqual(cartaoTemposLectivosComponent.tempos_de_aula.id);
  });

  it('deve configurar o cartao de tempos lectivos com a classe selected depois de clicado', () => {
    let id_valor!: number;

    cartaoTemposLectivosComponent.ao_activar_tempo_lectivo.subscribe(
      (cartao_id: number) => (id_valor = cartao_id)
    );
    cartao_tempo_lectivo_el.triggerEventHandler('click', null);

    let classe_setada = cartaoTemposLectivosComponent.setar_classe_para_tempo_selecionado();

    expect(id_valor).toEqual(cartaoTemposLectivosComponent.bandeira_aviso.id); 
    expect(classe_setada).toEqual('formbg selected');     
  });

});
