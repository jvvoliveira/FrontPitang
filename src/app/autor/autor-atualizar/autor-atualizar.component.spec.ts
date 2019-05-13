import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorAtualizarComponent } from './autor-atualizar.component';

describe('AutorAtualizarComponent', () => {
  let component: AutorAtualizarComponent;
  let fixture: ComponentFixture<AutorAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
