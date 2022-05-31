import React from 'react';
interface InputField {
  type: 'text' | 'email' | 'password' | 'number' | 'file' | 'date' | 'time';
  className: string;
  id: string;
}
export default function PartsInputField({ type, className, id }: InputField) {
  return <input type={type} name={id} className={className} />;
}
