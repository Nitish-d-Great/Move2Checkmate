// src/wallet/aptosClient.ts
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

export const aptos = new Aptos(
  new AptosConfig({ network: Network.TESTNET }) // must match provider
);

// Helpers
export async function getAptBalance(address: string): Promise<number> {
  const octas = await aptos.getAccountCoinAmount({
    accountAddress: address,
    coinType: "0x1::aptos_coin::AptosCoin",
  });
  return Number(octas) / 1e8;
}
