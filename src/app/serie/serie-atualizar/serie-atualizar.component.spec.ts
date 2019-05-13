import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieAtualizarComponent } from './serie-atualizar.component';

describe('SerieAtualizarComponent', () => {
  let component: SerieAtualizarComponent;
  let fixture: ComponentFixture<SerieAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
