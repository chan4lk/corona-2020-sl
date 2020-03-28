import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CountryInfoComponent } from '../country-info/country-info.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { PieChartComponent } from '../pie-chart/pie-chart.component';

@NgModule({
  declarations: [CountryInfoComponent, PieChartComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    IonicModule,
    FormsModule,
    ExploreContainerComponentModule
  ],
  exports: [TranslateModule, CountryInfoComponent, PieChartComponent],
  providers: []
})
export class SharedModule {}
