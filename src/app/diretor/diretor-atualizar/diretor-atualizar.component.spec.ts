import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretorAtualizarComponent } from './diretor-atualizar.component';

describe('DiretorAtualizarComponent', () => {
  let component: DiretorAtualizarComponent;
  let fixture: ComponentFixture<DiretorAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretorAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretorAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
