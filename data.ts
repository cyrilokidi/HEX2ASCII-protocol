import { EFieldName, IOptions } from "./src";

export interface ITestResult {
    date: string;
    time: string;
    imei: string;
    vehicleRegNumber: string;
    speed: string;
    longitude: string;
    longitudeDirection: string;
    latitude: string;
    latitudeDirection: string;
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
                null,
                {
                    name: EFieldName.VEHICLE_REG_NUMBER,
                },
                {
                    name: EFieldName.SPEED,
                },
                null,
                null,
                null,
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
            ]
        },
        result: {
            date: "2022-11-15",
            time: "12:16:55",
            imei: "868805061259746",
            vehicleRegNumber: "KBA176T",
            speed: "0",
            longitude: "36.855606",
            longitudeDirection: "E(+)",
            latitude: "1.259271",
            latitudeDirection: "S(-)",
        }
    },
    {
        hex: "323032322d31312d32322c30393a35303a32322c3836383830353036313232303931322c4133452d3942484741332c4142433132332c302c322c322c302c33362e3832303038312c45282b292c312e3236373433312c53282d292c302c302c3023",
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
                null,
                {
                    name: EFieldName.VEHICLE_REG_NUMBER,
                },
                {
                    name: EFieldName.SPEED,
                },
                null,
                null,
                null,
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
            ]
        },
        result: {
            date: "2022-11-22",
            time: "09:50:22",
            imei: "868805061220912",
            vehicleRegNumber: "ABC123",
            speed: "0",
            longitude: "36.820081",
            longitudeDirection: "E(+)",
            latitude: "1.267431",
            latitudeDirection: "S(-)",
        }
    },
    {
        hex: "31312f32392f32322c30393a35383a33312c3836393633303035343030393435352c2c4b4443303333452c302c33362e3836323333382c452c312e3333323130392c532c302c300d0a",
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
                null,
                {
                    name: EFieldName.VEHICLE_REG_NUMBER,
                },
                {
                    name: EFieldName.SPEED,
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
            ]
        },
        result: {
            date: "11/29/22",
            time: "09:58:31",
            imei: "869630054009455",
            vehicleRegNumber: "KDC033E",
            speed: "0",
            longitude: "36.862338",
            longitudeDirection: "E",
            latitude: "1.332109",
            latitudeDirection: "S",
        }
    }
];