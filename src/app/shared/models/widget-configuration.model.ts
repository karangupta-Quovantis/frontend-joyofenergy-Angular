export class WidgetConfiguration {
  header: string;
  value: number;
  unit: string;

  constructor(data: { header: string; value: number; unit: string }) {
    this.header = data.header;
    this.value = data.value;
    this.unit = data.unit;
  }
}
