import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CgmOffnetChartComponent } from './cgm-offnet-chart/cgm-offnet-chart.component';
import { CgmOnnetOffnetOperatorDetailComponent } from './cgm-onnet-offnet-operator-detail/cgm-onnet-offnet-operator-detail.component';
import { CustomOnnetOffnetOperatorDetailComponent } from './custom-onnet-offnet-operator-detail/custom-onnet-offnet-operator-detail.component';
import { GatOnnetOffnetOperatorDetailComponent } from './gat-onnet-offnet-operator-detail/gat-onnet-offnet-operator-detail.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { OkOnnetOffnetOperatorDetailComponent } from './ok-onnet-offnet-operator-detail/ok-onnet-offnet-operator-detail.component';
import { OkTaxiOnnetOffnetOperatorDetailComponent } from './ok-taxi-onnet-offnet-operator-detail/ok-taxi-onnet-offnet-operator-detail.component';
import { OnNetAndOffNetComponent } from './on-net-and-off-net/on-net-and-off-net.component';
import { OnNetOffNetComparisonComponent } from './on-net-off-net-comparison/on-net-off-net-comparison.component';
import { OneStopMartOnnetOffnetOperatorDetailComponent } from './one-stop-mart-onnet-offnet-operator-detail/one-stop-mart-onnet-offnet-operator-detail.component';
import { OredooOffnetPieChartComponent } from './oredoo-offnet-pie-chart/oredoo-offnet-pie-chart.component';
import { ShareCostAmountCompanyBaseComponent } from './share-cost-amount-company-base/share-cost-amount-company-base.component';
import { SugarMillFactoryOnnetOffnetOperatorDetailComponent } from './sugar-mill-factory-onnet-offnet-operator-detail/sugar-mill-factory-onnet-offnet-operator-detail.component';

const routes: Routes = [
  {
    path:'',
    component: MainDashboardComponent
  },
  {
    path:'on-net-and-off-net',
    component: OnNetAndOffNetComponent
  },
  {
    path:'on-net-off-net-comparison',
    component: OnNetOffNetComparisonComponent
  },
  {
    path:'share-cost-amount-company-base',
    component: ShareCostAmountCompanyBaseComponent
  },
  {
    path:'cgm-onnet-offnet-bar',
    component: CgmOnnetOffnetOperatorDetailComponent
  },
  {
    path:'ok-bar',
    component: OkOnnetOffnetOperatorDetailComponent
  },
  {
    path:'oneStopMart-bar',
    component: OneStopMartOnnetOffnetOperatorDetailComponent
  },
  {
    path:'sugarMillFactory-bar',
    component: SugarMillFactoryOnnetOffnetOperatorDetailComponent
  },
  {
    path:'okTaxi-bar',
    component: OkTaxiOnnetOffnetOperatorDetailComponent
  },
  {
    path:'gat-bar',
    component: GatOnnetOffnetOperatorDetailComponent
  },
  {
    path:'custom-bar',
    component: CustomOnnetOffnetOperatorDetailComponent
  },
  {
    path:'cgm-offnet-chart',
    component: CgmOffnetChartComponent
  },
  {
    path:'oredoo-offnet-chart',
    component: OredooOffnetPieChartComponent
  },

  



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
