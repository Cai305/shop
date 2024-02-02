import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeroComponent } from '../components/hero/hero.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CategoriesLayerComponent } from '../components/categories-layer/categories-layer.component';
import { VideoBannerComponent } from '../components/video-banner/video-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent,SidebarComponent, HeroComponent,CategoriesLayerComponent,VideoBannerComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'africanbankshop';
}
