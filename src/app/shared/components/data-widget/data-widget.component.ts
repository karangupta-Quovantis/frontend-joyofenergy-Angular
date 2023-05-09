import { Component, Input } from '@angular/core';
import { WidgetConfiguration } from '../../models/widget-configuration.model';

@Component({
    selector: 'app-data-widget',
    templateUrl: 'data-widget.component.html',
    styleUrls:['data-widget.component.scss']
})

export class DataWidgetComponent   {
    @Input() widgetConfiguration: WidgetConfiguration;   
}