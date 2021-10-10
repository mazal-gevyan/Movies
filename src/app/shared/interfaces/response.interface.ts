import { ResponseErrorType } from './../enums/enums.enum';
export interface IBaseResponse {
    isError: boolean;
    errorCode?: ResponseErrorType;
    errorMessage?: string;
    token: string;
}