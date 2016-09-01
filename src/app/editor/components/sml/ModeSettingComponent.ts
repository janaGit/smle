import { Component, ComponentResolver, ViewContainerRef, OnInit } from '@angular/core';
import { CardComponent } from '../basic/CardComponent';
import { EditorComponent } from '../base/EditorComponent';
import { AbstractSettingComponent } from './AbstractSettingComponent';
import { ModeSetting } from '../../../model/sml/ModeSetting';
import { TextFieldComponent } from '../basic/TextFieldComponent';

@Component({
  selector: 'sml-mode-setting',
  template: require('./ModeSettingComponent.html'),
  styles: [require('../styles/editor-component.scss')]
})
export class ModeSettingComponent extends EditorComponent<ModeSetting> {

  constructor(componentResolver: ComponentResolver, viewContainerRef: ViewContainerRef) {
    super(componentResolver, viewContainerRef);
  }

  protected createModel(): ModeSetting {
    return new ModeSetting();
  }
}
