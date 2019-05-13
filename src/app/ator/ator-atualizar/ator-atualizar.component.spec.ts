import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtorAtualizarComponent } from './ator-atualizar.component';

describe('AtorAtualizarComponent', () => {
  let component: AtorAtualizarComponent;
  let fixture: ComponentFixture<AtorAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtorAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtorAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
