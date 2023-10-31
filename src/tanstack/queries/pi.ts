import createQuery from './createQuery';
import { queryKeys } from '../queryKeys';

export const useGetPiQuery = createQuery<never, any[], never>({
    queryKey: queryKeys.getPi.queryKey,
    url: () => "/pi/current",
});

export const useGetCircumferenceQuery = createQuery<{
    planetName: string
}, any[], never>({
    queryKey: ({ planetName }) => queryKeys.getCircumference(planetName).queryKey,
    url: () => "/circumference",
});