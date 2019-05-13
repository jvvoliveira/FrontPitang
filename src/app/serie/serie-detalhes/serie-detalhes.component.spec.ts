import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDetalhesComponent } from './serie-detalhes.component';

describe('SerieDetalhesComponent', () => {
  let component: SerieDetalhesComponent;
  let fixture: ComponentFixture<SerieDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
