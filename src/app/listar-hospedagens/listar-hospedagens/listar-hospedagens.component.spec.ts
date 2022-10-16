import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHospedagensComponent } from './listar-hospedagens.component';

describe('ListarHospedagensComponent', () => {
  let component: ListarHospedagensComponent;
  let fixture: ComponentFixture<ListarHospedagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarHospedagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHospedagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
