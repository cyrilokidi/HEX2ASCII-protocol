import HEX2ASCII, { EFieldName, IOptions } from "../index";

export interface ITestResult {
    date: string;
    time: string;
}
export interface ITestData {
    input: string;
    options: IOptions;
    result: ITestResult;
}

const data: ITestData[] = [
    {
        input: "323032322d31312d31352c31323a31363a35352c3836383830353036313235393734362c4133452d3942484741332c4b4241313736542c302c3439382c312c31312c33362e3835353630362c45282b292c312e3235393237312c53282d292c302c302c3023",
        options: {
            fields: [
                {
                    name: EFieldName.DATE,
                },
                {
                    name: EFieldName.TIME,
                },
            ]
        },
        result: {
            date: "2022-11-15",
            time: "12:16:55",
        }
    }
];

describe("HEX2ASCII", () => {
    data.map((d: ITestData, i: number) => {
        describe(`Sample data ${i + 1}`, () => {
            const hexToAscii = new HEX2ASCII(d.input, d.options);

            test('Transmission Date', () => {
                expect(hexToAscii.date).toEqual(d.result.date);
            });

            test('Transmission Time', () => {
                expect(hexToAscii.time).toEqual(d.result.time);
            });
        });
    });
});