/**
* This file was automatically generated by cosmwasm-typescript-gen@latest.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { useQuery, UseQueryOptions } from "react-query";
import { Timestamp, Uint64, Uint128, ConfigResponse, Coin, Addr, Config, ExecuteMsg, Decimal, InstantiateMsg, InstantiateMsg1, CollectionInfoForRoyaltyInfoResponse, RoyaltyInfoResponse, QueryMsg } from "./MinterContract";
import { MinterQueryClient } from "./MinterContract.ts";
export interface MinterMintCountQuery {
  client: MinterQueryClient;
  options?: UseQueryOptions<MintCountResponse, Error, MintCountResponse, (string | undefined)[]>;
  args: {
    address: string;
  };
}
export function useMinterMintCountQuery({
  client,
  args,
  options
}: MinterMintCountQuery) {
  return useQuery<MintCountResponse, Error, MintCountResponse, (string | undefined)[]>(["minterMintCount", client.contractAddress], () => client.mintCount({
    address: args.address
  }), options);
}
export interface MinterMintPriceQuery {
  client: MinterQueryClient;
  options?: UseQueryOptions<MintPriceResponse, Error, MintPriceResponse, (string | undefined)[]>;
}
export function useMinterMintPriceQuery({
  client,
  options
}: MinterMintPriceQuery) {
  return useQuery<MintPriceResponse, Error, MintPriceResponse, (string | undefined)[]>(["minterMintPrice", client.contractAddress], () => client.mintPrice(), options);
}
export interface MinterStartTimeQuery {
  client: MinterQueryClient;
  options?: UseQueryOptions<StartTimeResponse, Error, StartTimeResponse, (string | undefined)[]>;
}
export function useMinterStartTimeQuery({
  client,
  options
}: MinterStartTimeQuery) {
  return useQuery<StartTimeResponse, Error, StartTimeResponse, (string | undefined)[]>(["minterStartTime", client.contractAddress], () => client.startTime(), options);
}
export interface MinterMintableNumTokensQuery {
  client: MinterQueryClient;
  options?: UseQueryOptions<MintableNumTokensResponse, Error, MintableNumTokensResponse, (string | undefined)[]>;
}
export function useMinterMintableNumTokensQuery({
  client,
  options
}: MinterMintableNumTokensQuery) {
  return useQuery<MintableNumTokensResponse, Error, MintableNumTokensResponse, (string | undefined)[]>(["minterMintableNumTokens", client.contractAddress], () => client.mintableNumTokens(), options);
}
export interface MinterConfigQuery {
  client: MinterQueryClient;
  options?: UseQueryOptions<ConfigResponse, Error, ConfigResponse, (string | undefined)[]>;
}
export function useMinterConfigQuery({
  client,
  options
}: MinterConfigQuery) {
  return useQuery<ConfigResponse, Error, ConfigResponse, (string | undefined)[]>(["minterConfig", client.contractAddress], () => client.config(), options);
}