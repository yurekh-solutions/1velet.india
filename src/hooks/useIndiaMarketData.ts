import { useQuery } from '@tanstack/react-query';
import { indiaMarketService } from '@/services/indiaMarketApiReal';
import { IndiaMarketData } from '@/types/indiaMarket';

// Query keys for React Query
export const indiaMarketKeys = {
  all: ['indiaMarket'] as const,
  full: () => [...indiaMarketKeys.all, 'full'] as const,
  marketSize: () => [...indiaMarketKeys.all, 'marketSize'] as const,
  smartHome: () => [...indiaMarketKeys.all, 'smartHome'] as const,
  regions: () => [...indiaMarketKeys.all, 'regions'] as const,
  segments: () => [...indiaMarketKeys.all, 'segments'] as const,
  growth: () => [...indiaMarketKeys.all, 'growth'] as const,
  radar: () => [...indiaMarketKeys.all, 'radar'] as const,
  adoption: () => [...indiaMarketKeys.all, 'adoption'] as const,
  cityRegions: () => [...indiaMarketKeys.all, 'cityRegions'] as const,
  drivers: () => [...indiaMarketKeys.all, 'drivers'] as const,
  advantages: () => [...indiaMarketKeys.all, 'advantages'] as const,
  gaps: () => [...indiaMarketKeys.all, 'gaps'] as const,
  projections: () => [...indiaMarketKeys.all, 'projections'] as const,
  targetSegments: () => [...indiaMarketKeys.all, 'targetSegments'] as const,
};

// Hook to fetch all market data
export function useIndiaMarketData() {
  return useQuery<IndiaMarketData>({
    queryKey: indiaMarketKeys.full(),
    queryFn: () => indiaMarketService.getFullMarketData(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000,  // 10 minutes (formerly cacheTime)
    retry: 2,
    refetchOnWindowFocus: false,
  });
}

// Hook to refresh all market data
export function useRefreshMarketData() {
  const { refetch: refetchFull } = useIndiaMarketData();
  
  return async () => {
    // Clear cache
    indiaMarketService.clearCache();
    
    // Refetch all data
    await refetchFull();
  };
}
