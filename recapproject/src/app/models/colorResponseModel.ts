import { Color } from "./color";
import { ResponseModelBase } from "./responseModelBase";

export interface ColorResponseModel extends ResponseModelBase{
    data:Color[]
}