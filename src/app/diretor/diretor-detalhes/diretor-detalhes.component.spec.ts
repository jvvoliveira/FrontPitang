import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretorDetalhesComponent } from './diretor-detalhes.component';

describe('DiretorDetalhesComponent', () => {
  let component: DiretorDetalhesComponent;
  let fixture: ComponentFixture<DiretorDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretorDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretorDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
