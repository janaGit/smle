import { Input, Output, EventEmitter } from '@angular/core';
import { DescriptionConfig } from '../../../services/config/DescriptionConfig';
import { Type } from '@angular/core/src/facade/lang';
import { BaseComponent } from './BaseComponent';

declare var jQuery: any;

export class ChildMetadata {
  private _componentType: Type;
  private _model: any;
  private _config: DescriptionConfig;

  public get componentType(): Type {
    return this._componentType;
  }

  public get model(): any {
    return this._model;
  }

  public get config(): DescriptionConfig {
    return this._config;
  }

  constructor(componentType: Type, model: any, config: DescriptionConfig) {
    this._componentType = componentType;
    this._model = model;
    this._config = config;
  }
}

export abstract class TypedModelComponent<T> extends BaseComponent {
  @Input()
  public model: T;
  @Input()
  public config: DescriptionConfig;
  @Input()
  public isShowAll: boolean = false;

  @Output()
  public openAsChild: EventEmitter<ChildMetadata> = new EventEmitter<ChildMetadata>();
  @Output()
  public modelChange: EventEmitter<T> = new EventEmitter<T>();

  protected abstract createModel(): T;

  protected extendModel(): void {
    jQuery.extend(this.model, this.createModel());
  }

  protected openNewChild(childMetadata: ChildMetadata) {
    this.openAsChild.emit(childMetadata);
  }
}