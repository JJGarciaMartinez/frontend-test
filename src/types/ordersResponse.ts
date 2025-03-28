/**
 * Respuesta genérica de la API, donde T representa el contenido concreto de result.
 */
export interface ApiResponse<T> {
  status: number;
  result: T;
}

/**
 * Interfaz genérica para el contenido de result.
 * Cada propiedad interna se define con un parámetro genérico que por defecto es "any".
 */
export interface OrderResult<
  TCargo = unknown,
  TRoute = unknown,
  TManager = unknown,
  TInvoice = unknown,
  TPricing = unknown,
  TDriver = unknown,
  TTrailer = unknown,
  TTruck = unknown,
  TAddOns = unknown,
  TMap = unknown,
  TStatusList = unknown,
  TDestination = unknown
> {
  _id: string;
  stamp: boolean;
  reference_number: string;
  status: number;
  completion_percentage: number;
  cargo: TCargo;
  user_id: string;
  order_number: string;
  route: TRoute;
  created: number | Date;
  distance_mts: number;
  manager: TManager;
  bego_order: boolean;
  invoice: TInvoice;
  pricing: TPricing;
  driver: TDriver;
  trailer: TTrailer;
  truck: TTruck;
  version: string;
  add_ons: TAddOns;
  ETA: number;
  map: TMap;
  stampedPercentage: number;
  start_date: number;
  end_date: number;
  status_list: TStatusList;
  destinations: TDestination[];
}

export type OrderDefaultResponse = ApiResponse<OrderResult>;
