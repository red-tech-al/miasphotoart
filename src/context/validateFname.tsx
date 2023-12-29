export default function validateFname(firstName: string, lastName: string): boolean {
  const nameRegex = /^[A-Za-z]+$/;

  if (firstName && lastName) {
    return nameRegex.test(firstName) && nameRegex.test(lastName);
  }

  return false;
}
