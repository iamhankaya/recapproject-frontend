import { Brand } from "./brand";
import { ResponseModelBase } from "./responseModelBase";

export interface BrandResponseModel extends ResponseModelBase{
    data:Brand[]
}