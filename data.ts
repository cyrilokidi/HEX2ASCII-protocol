import { EFieldName, IOptions } from "./src";

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
    longitude: string;
    longitudeDirection: string;
    latitude: string;
    latitudeDirection: string;
    powerSignal: string;
    speedSignal: string;
}
export interface ITestData {
    hex: string;
    options: IOptions;
    result: ITestResult;
}

export const data: ITestData[] = [
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
                },
                {
                    name: EFieldName.LONGITUDE,
                },
                {
                    name: EFieldName.LONGITUDE_DIRECTION,
                },
                {
                    name: EFieldName.LATITUDE,
                },
                {
                    name: EFieldName.LATITUDE_DIRECTION,
                },
                {
                    name: EFieldName.POWER_SIGNAL,
                },
                {
                    name: EFieldName.SPEED_SIGNAL,
                },
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
            numberOfSatelites: "11",
            longitude: "36.855606",
            longitudeDirection: "E(+)",
            latitude: "1.259271",
            latitudeDirection: "S(-)",
            powerSignal: "0",
            speedSignal: "0",
        }
    }
];