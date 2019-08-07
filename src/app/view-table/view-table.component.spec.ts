import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { ViewTableComponent } from './view-table.component';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import { DropdownModule } from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import { HttpClientModule} from '@angular/common/http';

describe('ViewTableComponent', () => {
  let component: ViewTableComponent;
  let fixture: ComponentFixture<ViewTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule, CalendarModule, DropdownModule, TableModule,HttpClientModule],
      declarations: [ ViewTableComponent ]      
    })
    .compileComponents();    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {    
    expect(component).toBeTruthy();
  });

  it('should clear search text box', () => {
    component.clearSearch();
     expect(component.taskSearchTxt).toEqual(null);
    // expect(component.searchEndDate).toEqual(null);
    // expect(component.searchStartDate).toEqual(null);
    // expect(component.parentTaskSearchTxt).toEqual('0');
    // expect(component.priorityFromSearchTxt).toEqual(null);
    // expect(component.priorityToSearchTxt).toEqual(null);
  });

    
  // it('Test search Result', () => {
  //   expect(component.tasks.length).toBeGreaterThan(0);  
  // })

  // it('On initial task request', async() => {
  //   component.ngOnInit();
  //   expect(component.tasks.length).toBeGreaterThan(0);
  // });
});
