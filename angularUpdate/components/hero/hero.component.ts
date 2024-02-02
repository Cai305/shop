import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CategoriesLayerComponent } from "../categories-layer/categories-layer.component";
import { VideoBannerComponent } from "../video-banner/video-banner.component";
import { ProductSectionComponent } from '../productSection/productSection.component';


@Component({
    selector: 'app-hero',
    standalone: true,
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
    imports: [SidebarComponent, CategoriesLayerComponent, VideoBannerComponent ,ProductSectionComponent]
})
export class HeroComponent {

}
