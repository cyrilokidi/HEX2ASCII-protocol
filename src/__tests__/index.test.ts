import HEX2ASCII, { EFieldName } from "../index";

describe("HEX2ASCII", () => {
    test('Transmission Date', () => {
        const data = "323032322d31312d31352c31323a31363a35352c3836383830353036313235393734362c4133452d3942484741332c4b4241313736542c302c3439382c312c31312c33362e3835353630362c45282b292c312e3235393237312c53282d292c302c302c3023"
        const hexToAscii = new HEX2ASCII(data, {
            fields: [
                {
                    name: EFieldName.DATE,
                }
            ]
        });
        expect(hexToAscii.date).toEqual('2022-11-15')
    });
});