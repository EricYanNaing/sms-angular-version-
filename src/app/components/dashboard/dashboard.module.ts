import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ShareCostAmountCompanyBaseComponent } from './share-cost-amount-company-base/share-cost-amount-company-base.component';
import { OnNetOffNetComparisonComponent } from './on-net-off-net-comparison/on-net-off-net-comparison.component';
import { OnNetAndOffNetComponent } from './on-net-and-off-net/on-net-and-off-net.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { OnNetChartFilterComponent } from '../modal/on-net-chart-filter/on-net-chart-filter.component';
import { OffNetChartFilterComponent } from '../modal/off-net-chart-filter/off-net-chart-filter.component';
import { ShareCostAmountCompanyBaseChartFilterComponent } from '../modal/share-cost-amount-company-base-chart-filter/share-cost-amount-company-base-chart-filter.component';
import { OnNetOffNetComparisonChartFilterComponent } from '../modal/on-net-off-net-comparison-chart-filter/on-net-off-net-comparison-chart-filter.component';
import { CgmOnnetOffnetOperatorDetailComponent } from './cgm-onnet-offnet-operator-detail/cgm-onnet-offnet-operator-detail.component';
import { OkOnnetOffnetOperatorDetailComponent } from './ok-onnet-offnet-operator-detail/ok-onnet-offnet-operator-detail.component';
import { OneStopMartOnnetOffnetOperatorDetailComponent } from './one-stop-mart-onnet-offnet-operator-detail/one-stop-mart-onnet-offnet-operator-detail.component';
import { SugarMillFactoryOnnetOffnetOperatorDetailComponent } from './sugar-mill-factory-onnet-offnet-operator-detail/sugar-mill-factory-onnet-offnet-operator-detail.component';
import { OkTaxiOnnetOffnetOperatorDetailComponent } from './ok-taxi-onnet-offnet-operator-detail/ok-taxi-onnet-offnet-operator-detail.component';
import { GatOnnetOffnetOperatorDetailComponent } from './gat-onnet-offnet-operator-detail/gat-onnet-offnet-operator-detail.component';
import { CustomOnnetOffnetOperatorDetailComponent } from './custom-onnet-offnet-operator-detail/custom-onnet-offnet-operator-detail.component';
import { OredooOffnetPieChartComponent } from './oredoo-offnet-pie-chart/oredoo-offnet-pie-chart.component';
import { CgmOffnetChartComponent } from './cgm-offnet-chart/cgm-offnet-chart.component';
@NgModule({
  declarations: [
    MainDashboardComponent,
    OnNetAndOffNetComponent,
    OnNetOffNetComparisonComponent,
    ShareCostAmountCompanyBaseComponent,
    OnNetChartFilterComponent,
    OffNetChartFilterComponent,
    ShareCostAmountCompanyBaseChartFilterComponent,
    OnNetOffNetComparisonChartFilterComponent,
    CgmOnnetOffnetOperatorDetailComponent,
    OkOnnetOffnetOperatorDetailComponent,
    OneStopMartOnnetOffnetOperatorDetailComponent,
    SugarMillFactoryOnnetOffnetOperatorDetailComponent,
    OkTaxiOnnetOffnetOperatorDetailComponent,
    GatOnnetOffnetOperatorDetailComponent,
    CustomOnnetOffnetOperatorDetailComponent,
    OredooOffnetPieChartComponent,
    CgmOffnetChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    BsDatepickerModule.forRoot()
  ]
})
export class DashboardModule { }
