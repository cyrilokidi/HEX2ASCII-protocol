import { hexToAscii } from "./lib";

export enum EFieldName {
    "DATE" = "DATE",
    "TIME" = "TIME",
    "IMEI" = "IMEI",
    "GOVERNOR_ID" = "GOVERNOR_ID",
    "VEHICLE_REG_NUMBER" = "VEHICLE_REG_NUMBER",
    "SPEED" = "SPEED",
    "ODOMETER" = "ODOMETER",
}

export interface IFieldOptions {
    name: EFieldName;
}

export interface IOptions {
    fields: IFieldOptions[];
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
        return this.opts.fields.findIndex((field: IFieldOptions) => field.name === name);
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

    public get governorId(): string | null {
        const prop: number = this.property(EFieldName.GOVERNOR_ID);
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

    public get odometer(): string | null {
        const prop: number = this.property(EFieldName.ODOMETER);
        return prop !== -1 ? this.d[prop] : null;
    }
}