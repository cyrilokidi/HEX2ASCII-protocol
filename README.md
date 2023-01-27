# HEX2ASCII-protocol

Hex to ASCII protocol parser

## Example

```js
const data =
  "323032322d31312d31352c31323a31363a35352c3836383830353036313235393734362c4133452d3942484741332c4b4241313736542c302c3439382c312c31312c33362e3835353630362c45282b292c312e3235393237312c53282d292c302c302c3023";
const hex2ascii = new HEX2ASCII(data, {
    // Ensure to arrange fields in exact order as they are in the original data format.
    // Hint: Use null to ignore fields.
  fields: [
    {
      name: "DATE",
    },
    {
      name: "TIME",
    },
    {
      name: "IMEI",
    },
    null,
    {
      name: "VEHICLE_REG_NUMBER",
    },
    {
      name: "SPEED",
    },
    null,
    null,
    null,
    {
      name: "LONGITUDE",
    },
    {
      name: "LONGITUDE_DIRECTION",
    },
    {
      name: "LATITUDE",
    },
    {
      name: "LATITUDE_DIRECTION",
    },
  ],
});

// Deserialized data
// 2022-11-15,12:16:55,868805061259746,A3E-9BHGA3,KBA176T,0,498,1,11,36.855606,E(+),1.259271,S(-),0,0,0#

console.log(hex2ascii.date); // "2022-11-15"
console.log(hex2ascii.time); // "12:16:55"
console.log(hex2ascii.imei); // "868805061259746"
console.log(hex2ascii.vehicleRegNumber); // "KBA176T"
console.log(hex2ascii.speed); // "0"
console.log(hex2ascii.longitude; // "36.855606"
console.log(hex2ascii.longitudeDirection); // "E(+)"
console.log(hex2ascii.latitude); // "1.259271"
console.log(hex2ascii.latitudeDirection); // "S(-)"
```

## Options

| Option | Description          |
| ------ | -------------------- |
| Fields | Data property fields |

### Fields

Data property fields.
List fields in the exact order as they are in the original data (ascii) format.
