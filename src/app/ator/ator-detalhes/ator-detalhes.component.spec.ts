import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtorDetalhesComponent } from './ator-detalhes.component';

describe('AtorDetalhesComponent', () => {
  let component: AtorDetalhesComponent;
  let fixture: ComponentFixture<AtorDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtorDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtorDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
