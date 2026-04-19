// Types for India Market Data

export interface MarketSizeData {
  year: string;
  value: number; // in billions USD
}

export interface SmartHomeData {
  year: string;
  value: number; // in billions USD
}

export interface RegionData {
  name: string;
  projects: number;
  growth: number;
  color: string;
  population?: string;
  premium?: string;
  cagr?: string;
  trend?: number[];
}

export interface SegmentData {
  name: string;
  value: number;
  color: string;
}

export interface ChartGrowthData {
  year: string;
  buildings: number;
  residents: number;
  revenue: number;
}

export interface RadarData {
  capability: string;
  valet: number;
  competitors: number;
}

export interface AdoptionData {
  month: string;
  signups: number;
  activeUsers: number;
  retention: number;
}

export interface MarketDriver {
  icon: string; // We'll map this to actual icon components
  title: string;
  stat: string;
  desc: string;
  impact: 'High' | 'Critical';
}

export interface CompetitiveAdvantage {
  icon: string;
  title: string;
  desc: string;
  stat: string;
  color: string;
}

export interface MarketGap {
  problem: string;
  current: string;
  solution: string;
  impact: string;
}

export interface GrowthProjection {
  year: string;
  buildings: string;
  residents: string;
  revenue: string;
  milestone: string;
}

export interface TargetSegment {
  segment: string;
  market: string;
  opportunity: string;
  pain: string;
  value: string;
}

export interface CityRegion {
  city: string;
  projects: string;
  growth: string;
  cagr: string;
  population: string;
  premium: string;
  img?: string; // Will be handled separately
  color: string;
  trend: number[];
}

export interface IndiaMarketData {
  marketSizeData: MarketSizeData[];
  smartHomeData: SmartHomeData[];
  regionData: RegionData[];
  segmentPie: SegmentData[];
  chartGrowthData: ChartGrowthData[];
  radarData: RadarData[];
  adoptionData: AdoptionData[];
  cityRegions: CityRegion[];
  marketDrivers: MarketDriver[];
  competitiveAdvantages: CompetitiveAdvantage[];
  marketGaps: MarketGap[];
  growthProjections: GrowthProjection[];
  targetSegments: TargetSegment[];
  lastUpdated: string;
  dataSource: string;
}
