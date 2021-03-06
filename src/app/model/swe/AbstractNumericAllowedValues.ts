import { AbstractAllowedValues } from './AbstractAllowedValues';
import { DisplayName } from '../../decorators/DisplayName';

export class AbstractNumericAllowedValues extends AbstractAllowedValues {
    @DisplayName('Significant figures')
    significantFigures: number;

    toString() {
        return 'Abstract numeric allowed values';
    }
}
