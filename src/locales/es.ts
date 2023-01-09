/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} no es válido.',
  required: '${path} es un campo obligatorio',
  oneOf: '${path} debe ser uno de los siguientes valores: ${values}',
  notOneOf: '${path} no debe ser uno de los siguientes valores: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} debe ser un \`${type}\` Tipo, ` +
      `pero el valor final fue: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (Obtenido del valor \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Si "nulo" es intencionalmente un valor vacío, asegúrese de marcar el esquema como` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} debe tener exactamente ${length} caracteres',
  min: '${path} debe tener como mínimo ${min} caracteres',
  max: '${path} debe tener como máximo ${max} caracteres',
  matches: '${path} debe coincidir con lo siguiente: "${regex}"',
  email: '${path} debe ser un correo electrónico válido',
  url: '${path} debe ser una URL válida',
  trim: '${path} debe ser una cadena recortada',
  lowercase: '${path} debe ser una cadena en minúsculas',
  uppercase: '${path} debe ser una cadena en mayúsculas',
};

export const number: LocaleObject['number'] = {
  min: '${path} debe ser mayor o igual a ${min}',
  max: '${path} debe ser menor o igual a ${max}',
  lessThan: '${path} debe ser menor a ${less}',
  moreThan: '${path} debe ser mayor a ${more}',
  positive: '${path} debe ser un número positivo',
  negative: '${path} debe ser un número negativo',
  integer: '${path} debe ser un entero',
};

export const date: LocaleObject['date'] = {
  min: 'El campo ${path} debe ser posterior a ${min}',
  max: 'El campo ${path} debe ser anterior a ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown: 'El campo ${path} tiene claves no especificadas en el objeto',
};

export const array: LocaleObject['array'] = {
  min: 'El campo ${path} debe tener como mínimo ${min} elementos',
  max: 'El campo ${path} debe tener como máximo ${max} elementos',
};
