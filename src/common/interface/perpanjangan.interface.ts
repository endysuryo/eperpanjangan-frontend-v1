import { IErrorState, IParams, IResult, ISuccessState } from './app.interface';

export interface IPerpanjanganStore {
  isLoadingFetchPerpanjangan: boolean;
  isLoadingCreatePerpanjangan: boolean;
  isLoadingUpdatePerpanjangan: boolean;
  isLoadingDeletePerpanjangan: boolean;
  perpanjangans: any[];
  paramsPerpanjangan: IParams;
  isPerpanjanganError: boolean;
  perpanjanganErrorState: IErrorState;
  isPerpanjanganSuccess: boolean;
  perpanjanganSuccessState: ISuccessState;
}

export interface IPerpanjanganData {
  name: string;
  address: string;
  phone: string;
  npwp: string;
}
