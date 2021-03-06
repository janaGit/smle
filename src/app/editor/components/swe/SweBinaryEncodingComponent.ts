import { Component } from '@angular/core';
import { TypedModelComponent, ChildMetadata } from '../base/TypedModelComponent';
import { SweBinaryEncoding } from '../../../model/swe/SweBinaryEncoding';
import { SweBinaryBlock } from '../../../model/swe/SweBinaryBlock';
import { SweBinaryComponent } from '../../../model/swe/SweBinaryComponent';
import { SweBinaryBlockComponent } from './SweBinaryBlockComponent';
import { SweBinaryComponentComponent } from './SweBinaryComponentComponent';

@Component({
    selector: 'swe-binary-encoding',
    template: require('./SweBinaryEncodingComponent.html')
})
export class SweBinaryEncodingComponent extends TypedModelComponent<SweBinaryEncoding> {
    protected createModel(): SweBinaryEncoding {
        return new SweBinaryEncoding();
    }

    protected addBinaryBlock() {
        let newItem = new SweBinaryBlock();
        this.model.members.push(newItem);
    }

    protected addBinaryComponent() {
        let newItem = new SweBinaryComponent();
        this.model.members.push(newItem);
    }

    protected openNewItem(item: SweBinaryBlock | SweBinaryComponent) {
        let childMetadata: ChildMetadata<any>;

        if (item instanceof SweBinaryBlock) {
            childMetadata = new ChildMetadata(SweBinaryBlockComponent, item, this.config.getConfigFor('members'));
        }

        if (item instanceof SweBinaryComponent) {
            childMetadata = new ChildMetadata(SweBinaryComponentComponent, item, this.config.getConfigFor('members'));
        }

        this.openAsChild.emit(childMetadata);
    }

    removeMember(index: number) {
        this.model.members.splice(index, 1);
    }
}
