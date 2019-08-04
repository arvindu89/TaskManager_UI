import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/primeng';
import { AddRowComponent } from './add-row.component';
import {CalendarModule} from 'primeng/calendar';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AddRowComponent', () => {
  let component: AddRowComponent;
  let fixture: ComponentFixture<AddRowComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, DropdownModule, CalendarModule],
      declarations: [ AddRowComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AddRowComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  }));

  beforeEach(() => {    
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(AddRowComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('To test reset values on reset button click', () =>{
    component.resetTask();
    expect(component.task).toEqual(null);
    expect(component.parentTask).toEqual('0');
    expect(component.priority).toEqual(0);
    expect(component.startDate).toEqual(null);
    expect(component.endDate).toEqual(null);
    expect(component.showStatus).toEqual(false);
    expect(component.status).toEqual(null);
  });

  it('To test Add Task click function', () =>{   
    component.addTask();   
    expect(component.showStatus).toEqual(true);    
    expect(component.status).toEqual(true);   
  });

});
