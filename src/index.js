import DisplayComponent from './display.vue';

export default {
	id: 'directus-extensions-display-ce-number-format',
	name: 'Number Format',
	icon: '123',
	description: 'Display formatted number by mask. Example ###,###,##.00 => 123,456,789.12',
	component: DisplayComponent,
	options: [
		{
			field: 'mask',
			type: 'string',
			name: 'Mask',
			meta: {
				interface: 'input',
				width: 'full',
				options: {
					placeholder: '$ ###,###,##0.00',
				},
			},
		},
		{
			field: 'info',
			name: 'Information',
			type: 'alias',
			meta: {
				interface: 'presentation-notice',
				width: 'full',
				options: {
					text:
						`<p>Examples:</p>
							<table style="border-collapse: collapse; width: 100%; height: 414.594px;" border="1"><colgroup><col style="width: 24.9901%;"><col style="width: 24.9901%;"><col style="width: 24.9901%;"><col style="width: 24.9901%;"></colgroup>
							<tbody>
							<tr style="height: 38.9688px;">
							<td style="text-align: center;"><strong>Description</strong></td>
							<td style="text-align: center;"><strong>Input</strong></td>
							<td style="text-align: center;"><strong>Mask</strong></td>
							<td style="text-align: center;"><strong>Output</strong></td>
							</tr>
							<tr style="height: 38.9688px;">
							<td><strong>Simple</strong></td>
							<td style="text-align: right;">123456.789</td>
							<td class="format" style="text-align: right;">#,##0.00</td>
							<td style="text-align: right;">123,456.79</td>
							</tr>
							<tr style="height: 38.9688px;">
							<td><strong>Large number</strong></td>
							<td style="text-align: right;">123456789.12</td>
							<td style="text-align: right;">###,###,##0.00</td>
							<td style="text-align: right;">123,456,789.12</td>
							</tr>
							<tr style="height: 38.9688px;">
							<td>More Decimals</td>
							<td style="text-align: right;">123456.1234</td>
							<td style="text-align: right;">###,###,##0.0000</td>
							<td style="text-align: right;">123,456.1234</td>
							</tr>
							<tr style="height: 38.9688px;">
							<td>Force separator</td>
							<td style="text-align: right;">123456789</td>
							<td style="text-align: right;">###,###.</td>
							<td style="text-align: right;">123,456,789</td>
							</tr>
							<tr style="height: 38.9688px;">
							<td>US, UK and many more</td>
							<td style="text-align: right;">1234567.89</td>
							<td class="format" style="text-align: right;">#,##0.00</td>
							<td style="text-align: right;">1,234,567.89</td>
							</tr>
							<tr style="height: 38.9688px;">
							<td>Estonia, France</td>
							<td style="text-align: right;">-123456.78</td>
							<td class="format" style="text-align: right;">### ###,##</td>
							<td style="text-align: right;">-123 456,78</td>
							</tr>
							<tr style="height: 63.7344px;">
							<td>Argentina, Germany, Italy</td>
							<td style="text-align: right;">-1234560.12</td>
							<td style="text-align: right;">##.##0,00</td>
							<td style="text-align: right;">1.234.560,10</td>
							</tr>
							<tr style="height: 38.9688px;">
							<td>With Prefix</td>
							<td style="text-align: right;">123456.12</td>
							<td style="text-align: right;">$ ###,##0.00</td>
							<td style="text-align: right;">$ 123,456.12</td>
							</tr>
							<tr style="height: 39.1094px;">
							<td>With Suffix</td>
							<td style="text-align: right;">123456.12</td>
							<td style="text-align: right;">###,##0.00 USD</td>
							<td style="text-align: right;">123,456.12 USD</td>
							</tr>
							</tbody>
							</table>`,
				},
			},
		},

	],
	types: ['integer', 'bigInteger', 'float', 'decimal'],
};
