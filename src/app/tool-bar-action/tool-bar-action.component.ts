import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './tool-bar-action.component.html',
  styleUrl: './tool-bar-action.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ToolBarActionComponent {

  handleClick() {
    alert('Im the angular module');
  }
}
