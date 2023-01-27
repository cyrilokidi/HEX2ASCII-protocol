import HEX2ASCII, { EFieldName, IOptions } from "../index";

export interface ITestResult {
    date: string;
    time: string;
    imei: string;
    governorId: string;
    vehicleRegNumber: string;
    speed: string;
    odometer: string;
    gpsStatus: string;
    numberOfSatelites: string;
}
export interface ITestData {
    hex: string;
    options: IOptions;
    result: ITestResult;
}

const data: ITestData[] = [
    {
        hex: "323032322d31312d31352c31323a31363a35352c3836383830353036313235393734362c4133452d3942484741332c4b4241313736542c302c3439382c312c31312c33362e3835353630362c45282b292c312e3235393237312c53282d292c302c302c3023",
        options: {
            fields: [
                {
                    name: EFieldName.DATE,
                },
                {
                    name: EFieldName.TIME,
                },
                {
                    name: EFieldName.IMEI,
                },
                {
                    name: EFieldName.GOVERNOR_ID,
                },
                {
                    name: EFieldName.VEHICLE_REG_NUMBER,
                },
                {
                    name: EFieldName.SPEED,
                },
                {
                    name: EFieldName.ODOMETER,
                },
                {
                    name: EFieldName.GPS_STATUS,
                },
                {
                    name: EFieldName.NUMBER_OF_SATELITES,
                }
            ]
        },
        result: {
            date: "2022-11-15",
            time: "12:16:55",
            imei: "868805061259746",
            governorId: "A3E-9BHGA3",
            vehicleRegNumber: "KBA176T",
            speed: "0",
            odometer: "498",
            gpsStatus: "1",
            numberOfSatelites: "11"
        }
    }
];

describe("HEX2ASCII", () => {
    data.map((d: ITestData, i: number) => {
        describe(`Sample data ${i + 1}`, () => {
            const hexToAscii = new HEX2ASCII(d.hex, d.options);

            test('Transmission Date', () => {
                expect(hexToAscii.date).toEqual(d.result.date);
            });

            test('Transmission Time', () => {
                expect(hexToAscii.time).toEqual(d.result.time);
            });

            test('Device IMEI', () => {
                expect(hexToAscii.imei).toEqual(d.result.imei);
            });

            test('Governor Id', () => {
                expect(hexToAscii.governorId).toEqual(d.result.governorId);
            });

            test('Vehicle Registration Number', () => {
                expect(hexToAscii.vehicleRegNumber).toEqual(d.result.vehicleRegNumber);
            });

            test('Vehicle speed', () => {
                expect(hexToAscii.speed).toEqual(d.result.speed);
            });

            test('Odometer', () => {
                expect(hexToAscii.odometer).toEqual(d.result.odometer);
            });

            test('GPS status', () => {
                expect(hexToAscii.gpsStatus).toEqual(d.result.gpsStatus);
            });

            test('Number of satelites', () => {
                expect(hexToAscii.numberOfSatelites).toEqual(d.result.numberOfSatelites);
            });
        });
    });
});