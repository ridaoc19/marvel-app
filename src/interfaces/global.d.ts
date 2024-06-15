import { ChangeEvent, MouseEvent } from 'react';

export type HandleClick = (event: MouseEvent<HTMLButtonElement>) => void;
export type HandleChangeText = (event: ChangeEvent<HTMLInputElement>) => void;
