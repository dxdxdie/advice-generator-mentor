export interface AdviceResponse {
  slip: {
    id: number;
    advice: string;
  };
}

export type Advice = AdviceResponse['slip'];