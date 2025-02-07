import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RtlService } from '@fundamental-ngx/cdk/utils';
import { FormLabelComponent } from '@fundamental-ngx/core/form';
import { SwitchModule } from '@fundamental-ngx/core/switch';

@Component({
    selector: 'rtl-switch',
    template: `
        <label fd-form-label> Simulate RTL </label>
        <fd-switch [(ngModel)]="isChecked" (ngModelChange)="onChange()"></fd-switch>
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FormLabelComponent, SwitchModule, FormsModule]
})
export class DirectionalityComponent implements OnInit {
    id: string;
    isChecked = false;
    @Input()
    label: string;

    @Input()
    element: string;

    @Input()
    className: string;

    constructor(private rtlService: RtlService) {}

    ngOnInit(): void {
        if (this.label) {
            this.id = this.label + Date.now() + '-rtl';
        } else {
            this.id = Date.now() + 6 + '';
        }
    }

    onChange(): void {
        const dirValue = this.isChecked ? 'rtl' : 'ltr';
        this.rtlService.rtl.next(this.isChecked);

        if (this.className) {
            Array.from(document.getElementsByClassName(this.className)).forEach(
                (element) => ((<HTMLElement>element).dir = dirValue)
            );
        }
        if (this.element) {
            Array.from(document.getElementsByTagName(this.element)).forEach(
                (element) => ((<HTMLElement>element).dir = dirValue)
            );
        }
        if (this.label) {
            const labelElement = document.getElementById(this.label);
            labelElement && (labelElement.dir = dirValue);
        }
    }
}
