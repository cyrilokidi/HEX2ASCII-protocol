import { hexToAscii } from "./lib";

export enum EFieldName {
    "DATE" = "DATE",
    "TIME" = "TIME",
    "IMEI" = "IMEI",
    "VEHICLE_REG_NUMBER" = "VEHICLE_REG_NUMBER",
    "SPEED" = "SPEED",
    "LONGITUDE" = "LONGITUDE",
    "LONGITUDE_DIRECTION" = "LONGITUDE_DIRECTION",
    "LATITUDE" = "LATITUDE",
    "LATITUDE_DIRECTION" = "LATITUDE_DIRECTION",
}

export interface IFieldOptions {
    name: EFieldName;
}

export type TFieldOptions = IFieldOptions | null;

export interface IOptions {
    fields: TFieldOptions[];
}

export default class HEX2ASCII {
    private readonly d: string[];

    private readonly opts: IOptions;

    constructor(readonly data: string, readonly options: IOptions) {
        this.d = this.deserialize(data);
        this.opts = options;
    }

    private deserialize(data: string): string[] {
        let result: string | string[] = data.toUpperCase().replace(/FLAGBIT/, "");
        result = hexToAscii(result);
        result = result.trim();
        result = result.split(",");
        return result;
    }

    private property(name: EFieldName): number {
        return this.opts.fields.findIndex((field: TFieldOptions) => field && field.name === name);
    }

    public get date(): string | null {
        const prop: number = this.property(EFieldName.DATE);
        return prop !== -1 ? this.d[prop] : null;
    }

    public get time(): string | null {
        const prop: number = this.property(EFieldName.TIME);
        return prop !== -1 ? this.d[prop] : null;
    }

    public get imei(): string | null {
        const prop: number = this.property(EFieldName.IMEI);
        return prop !== -1 ? this.d[prop] : null;
    }

    public get vehicleRegNumber(): string | null {
        const prop: number = this.property(EFieldName.VEHICLE_REG_NUMBER);
        return prop !== -1 ? this.d[prop] : null;
    }

    public get speed(): string | null {
        const prop: number = this.property(EFieldName.SPEED);
        return prop !== -1 ? this.d[prop] : null;
    }

    public get longitude(): string | null {
        const prop: number = this.property(EFieldName.LONGITUDE);
        return prop !== -1 ? this.d[prop] : null;
    }

    public get longitudeDirection(): string | null {
        const prop: number = this.property(EFieldName.LONGITUDE_DIRECTION);
        return prop !== -1 ? this.d[prop] : null;
    }

    public get latitude(): string | null {
        const prop: number = this.property(EFieldName.LATITUDE);
        return prop !== -1 ? this.d[prop] : null;
    }

    public get latitudeDirection(): string | null {
        const prop: number = this.property(EFieldName.LATITUDE_DIRECTION);
        return prop !== -1 ? this.d[prop] : null;
    }
}