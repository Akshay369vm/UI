import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildDetailPageComponent } from './build-detail-page.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IBuild } from '../interfaces';
import { BuildService } from '../build.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MockBuildService {
  fetchBuild(): Observable<IBuild> {
    let mockBuild = {
      id: '1234',
      number: 'buildTitle',
      buildUrl: 'buildUrl',
      startTime: 1234,
      endTime: 12345,
      stages: [
        {
          stageId: '111',
          name: 'Test Stage',
          status: 'SUCCESS',
          startTimeMillis: '1111',
          durationMillis: '1000',
          _links: {
            self: {
              href: 'url-string'
            }
          }
        }
      ],
    };
    return of(mockBuild);
  }
}

fdescribe('BuildDetailComponent', () => {
  let component: BuildDetailPageComponent;
  let fixture: ComponentFixture<BuildDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildDetailPageComponent ],
      providers: [ 
        NgbActiveModal,
        { provide: ActivatedRoute, useValue: {
            snapshot: {
              paramMap: {
                get: () => { return '1234'; }
              }
            }
        }},
        { provide: BuildService, useClass: MockBuildService }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [NgbModule, MatStepperModule, MatIconModule, MatTooltipModule, BrowserAnimationsModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  afterEach(() => {
    fixture.destroy();
  });

  beforeEach( async () => {
    fixture = TestBed.createComponent(BuildDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    fixture = TestBed.createComponent(BuildDetailPageComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
