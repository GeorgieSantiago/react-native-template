import {useEffect, useState} from 'react';
//Configureable
export interface ColorSchema {
  primary: string;
  secondary: string;
  trinary: string;
  white: '#ffffff' | string;
  accent: string;
  complimentary: string;
}

enum ColorPallet {
  CHARCOAL = 'charcoal',
  LAVENDER = 'lavender',
  LIGHTPOUR = 'lightpour',
  BLUSH = 'blush',
  DARKCOFFEE = 'darkcoffee',
}

const colors = {
  [ColorPallet.CHARCOAL.toString()]: {
    primary: '#11151C',
    secondary: '#364156',
    trinary: '#D66853',
    white: '#FFFFFF',
    accent: '#7D4E57',
    complimentary: '#212D40',
  },

  [ColorPallet.LAVENDER.toString()]: {
    primary: '#F7EDF0',
    secondary: '#F4AFAB',
    trinary: '#F4F482',
    white: '#FFFFFF',
    accent: '#F4EEA9',
    complimentary: '#F4CBC6',
  },

  [ColorPallet.LIGHTPOUR.toString()]: {
    primary: '#8D6A9F',
    secondary: '#8CBCB9',
    trinary: '#BB342F',
    white: '#FFFFFF',
    accent: '#DDA448',
    complimentary: '#C5CBD3',
  },

  [ColorPallet.BLUSH.toString()]: {
    primary: '#2C363F',
    secondary: '#F2F5EA',
    trinary: '#BBC7A4',
    white: '#FFFFFF',
    accent: '#D6DBD2',
    complimentary: '#E75A7C',
  },

  [ColorPallet.DARKCOFFEE.toString()]: {
    primary: '#443742',
    secondary: '#CEA07E',
    trinary: '#E2E8C0',
    white: '#FFFFFF',
    accent: '#EDD9A3',
    complimentary: '#846C5B',
  },
};

const getColorScheme = (key?: string): ColorSchema => {
  if (key) {
    for (const pallet in ColorPallet) {
      if (pallet.toString() === key) {
        return colors[pallet.toString()];
      }
    }
  }

  return colors[ColorPallet.DARKCOFFEE.toString()];
};

export function useColors() {
  const [pallet, setPallet] = useState<ColorSchema>(
    colors[ColorPallet.DARKCOFFEE],
  );

  useEffect(() => {
    if (process.env.PALLET !== ColorPallet.DARKCOFFEE.toString()) {
      setPallet(getColorScheme(process.env.PALLET));
    }
  }, []);

  return pallet;
}
