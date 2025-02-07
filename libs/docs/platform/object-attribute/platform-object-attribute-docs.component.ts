import { Component } from '@angular/core';

import {
    CodeExampleComponent,
    ComponentExampleComponent,
    DescriptionComponent,
    DocsSectionTitleComponent,
    ExampleFile,
    SeparatorComponent,
    getAssetFromModuleAssets
} from '@fundamental-ngx/docs/shared';
import {
    PlatformObjectAttributeExampleComponent,
    PlatformObjectAttributeTruncateExampleComponent
} from './examples/platform-object-attribute-examples.component';
import { PlatformObjectAttributeLinkExampleComponent } from './examples/platform-object-attribute-link-example.component';

const objectAttribute = 'platform-object-attribute-example.component.html';
const objectAttributeTruncate = 'platform-object-attribute-truncate-example.component.html';
const objectAttributeLink = 'platform-object-attribute-link-example.component.html';
const objectAttributeLinkTs = 'platform-object-attribute-link-example.component.ts';

@Component({
    selector: 'app-object-attribute',
    templateUrl: './platform-object-attribute-docs.component.html',
    standalone: true,
    imports: [
        DocsSectionTitleComponent,
        DescriptionComponent,
        ComponentExampleComponent,
        PlatformObjectAttributeExampleComponent,
        CodeExampleComponent,
        SeparatorComponent,
        PlatformObjectAttributeTruncateExampleComponent,
        PlatformObjectAttributeLinkExampleComponent
    ]
})
export class PlatformObjectAttributeDocsComponent {
    objectAttribute: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(objectAttribute),
            fileName: 'platform-object-attribute-example'
        }
    ];

    objectAttributeTruncate: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(objectAttributeTruncate),
            fileName: 'platform-object-attribute-truncate-example'
        }
    ];

    objectAttributeLink: ExampleFile[] = [
        {
            language: 'html',
            code: getAssetFromModuleAssets(objectAttributeLink),
            fileName: 'platform-object-attribute-link-example'
        },
        {
            language: 'typescript',
            fileName: 'platform-object-attribute-link-example',
            code: getAssetFromModuleAssets(objectAttributeLinkTs),
            component: 'PlatformObjectAttributeLinkExampleComponent'
        }
    ];
}
