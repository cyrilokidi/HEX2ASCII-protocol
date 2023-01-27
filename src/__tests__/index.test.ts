import HEX2ASCII from "../index";
import { data, ITestData } from "../../data";

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

            test('Longitude position', () => {
                expect(hexToAscii.longitude).toEqual(d.result.longitude)
            });

            test('Longitude direction', () => {
                expect(hexToAscii.longitudeDirection).toEqual(d.result.longitudeDirection);
            });

            test('Latitude position', () => {
                expect(hexToAscii.latitude).toEqual(d.result.latitude);
            });

            test('Latitude direction', () => {
                expect(hexToAscii.latitudeDirection).toEqual(d.result.latitudeDirection);
            });

            test('Power signal', () => {
                expect(hexToAscii.powerSignal).toEqual(d.result.powerSignal);
            });

            test('Speed signal', () => {
                expect(hexToAscii.speedSignal).toEqual(d.result.speedSignal);
            });
        });
    });
});