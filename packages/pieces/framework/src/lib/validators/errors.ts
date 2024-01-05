export enum ErrorMessages {
  REQUIRED = 'Expected value, but found value: {userInput}',
  EMAIL = 'Invalid Email format: {userInput}',
  ISO_DATE = 'Expected ISO string, but found value: {userInput}',
  FILE = 'Expected file url or base64 with mimeType, but found value: {userInput}',
  NUMBER = 'Expected number, but found value: {userInput}',
  WHOLE_NUMBER = 'Expected whole number, but found value: {userInput}',
  MAX_LENGTH = 'The value: {userInput} may not be greater than {length} characters',
  MIN_LENGTH = 'The value: {userInput} must be at least {length} characters',
  MAX = 'The value: {userInput} must be {max} or less',
  MIN = 'The value: {userInput} must be {min} or more',
  MIN_DATE = 'The date {userInput} must be after {min}',
  MAX_DATE = 'The date {userInput} must be before {max}',
  IN_RANGE = 'The value: {userInput} must be at least {min} and less than or equal {max}',
  IN_DATE_RANGE = 'The date {userInput} must be between {min} and {max}',
  URL = 'The value: {userInput} is not a valid URL',
  REGEX = 'The value: {userInput} format is invalid',
  PROHIBIT_REGEX = 'The value: {userInput} is not allowed',
  IMAGE = 'The {property} value must be an image',
  ONE_OF = 'The {userInput} is not a valid value, valid choices are: {choices}',
  REQUIRE_KEYS = 'The following keys are required: {keys}',
  SIZE = 'The {property} size must be less than 0:{size}KB',
  NON_ZERO = 'The value: {userInput} must be a non-zero value',
  PHONE_NUMBER = 'The phone number entered is not a valid phone number'
}