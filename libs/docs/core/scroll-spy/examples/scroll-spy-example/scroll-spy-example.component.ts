import { CdkScrollable } from '@angular/cdk/overlay';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IconModule } from '@fundamental-ngx/core/icon';
import { ScrollSpyModule } from '@fundamental-ngx/core/scroll-spy';
import { ScrollbarDirective } from '@fundamental-ngx/core/scrollbar';

@Component({
    selector: 'fd-scroll-spy-example',
    templateUrl: './scroll-spy-example.component.html',
    styleUrls: ['./scroll-spy-example.component.scss'],
    standalone: true,
    imports: [NgFor, IconModule, CdkScrollable, ScrollbarDirective, ScrollSpyModule]
})
export class ScrollSpyExampleComponent implements OnInit {
    selectedSpy = 'element-0';
    items: any[] = [];

    ngOnInit(): void {
        this.generateItems(9);
    }

    generateItems(count: number): void {
        for (let i = 0; i < count; ++i) {
            this.items.push({ name: 'Element ' + i, id: 'element-' + i });
        }
    }
}
