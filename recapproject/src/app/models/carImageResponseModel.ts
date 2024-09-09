import { CarImage } from "./carImage";
import { ResponseModelBase } from "./responseModelBase";

export interface CarImageResponseModel extends ResponseModelBase{
    data:CarImage[]
}