import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {DashboardSummaryComponent} from './component/dashboard-summary/dashboard-summary.component';
import {DashboardTopPostComponent} from './component/dashboard-top-post/dashboard-top-post.component';
import {DashboardEngagementComponent} from './component/dashboard-engagement/dashboard-engagement.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        HttpClientModule
    ],
    declarations: [DashboardComponent, DashboardSummaryComponent, DashboardTopPostComponent, DashboardEngagementComponent],
    providers: []
})
export class DashboardModule {}
