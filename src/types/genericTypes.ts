import { AxiosError } from "axios";

export type TDevice = "desktop" | "tablet" | "mobile";

export interface IDimensions {
  width: number;
  height: number;
  device: TDevice;
}

export interface INavigation {
  isOpen: boolean;
  onOpen: (isOpen: boolean) => void;
}

export interface IResponse<T> {
  data: T
}

export interface IError {
  status: 'fail' | 'error',
  message: string;
  stack?: string;
  error: {
    isOperational: boolean;
    status: 'fail';
    statusCode: number;
  }
}

export interface IErrorJSON {
  code: undefined;
  columnNumber: undefined;
  config: AxiosError["config"];
  description: undefined;
  fileName: undefined;
  lineNumber: undefined;
  message: string;
  name: string;
  number: undefined;
  stack: string;
  status: number | null;
}

export interface IErrorType {
  reload: boolean;
  msg: string;
}

export interface IDuration {
  years: number;
  months: number;
  days: number;
}
