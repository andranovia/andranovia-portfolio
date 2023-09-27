export interface AnimationControls {
    variants: {
      [variantName: string]: {
        x?: {
          type: string;
          from: string;
          to: number;
        };
        opacity?: {
          type: string;
          from: number;
          to: number;
        };
        transition: {
          duration: number;
          repeat?: number;
          repeatType?: string;
        };
      };
    };
  }