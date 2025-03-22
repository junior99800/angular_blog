import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../componentes/menu-title/menu-title.component";
import { MenuCardComponent } from "../../componentes/menu-card/menu-card.component";
import { SmallCardComponent } from "../../componentes/small-card/small-card.component";
import { MenuBarComponent } from "../../componentes/menu-bar/menu-bar.component";

@Component({
  selector: 'app-home',
  imports: [MenuTitleComponent, MenuCardComponent, SmallCardComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
