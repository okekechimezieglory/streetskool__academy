// lib/getSolToUsdRate.ts
import axios from 'axios';

export const getSolToUsdRate = async (): Promise<number> => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
    return response.data.solana.usd;
  } catch (error) {
    console.error("Error fetching SOL to USD rate:", error);
    throw new Error("Could not fetch exchange rate");
  }
};
