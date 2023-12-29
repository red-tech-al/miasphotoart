import { parsePhoneNumber } from "awesome-phonenumber";

export default function validatePhone(phoneNumber: string, regionCode: string) {
  try {
    const parsedNumber = parsePhoneNumber(phoneNumber, { regionCode: `${regionCode}` });
    return parsedNumber.valid;
  } catch (error) {
    return false;
  }
}