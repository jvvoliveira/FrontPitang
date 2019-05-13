import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorDetalhesComponent } from './autor-detalhes.component';

describe('AutorDetalhesComponent', () => {
  let component: AutorDetalhesComponent;
  let fixture: ComponentFixture<AutorDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
