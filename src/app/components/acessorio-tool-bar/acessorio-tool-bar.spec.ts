import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessorioToolBar } from './acessorio-tool-bar';

describe('AcessorioToolBar', () => {
  let component: AcessorioToolBar;
  let fixture: ComponentFixture<AcessorioToolBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessorioToolBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessorioToolBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
