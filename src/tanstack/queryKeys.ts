import { createQueryKeys } from '@lukemorales/query-key-factory';

export const queryKeys = createQueryKeys('pi', {
    getPi: ['pi'],
    getCircumference: (planetName: string) => [planetName]
});

