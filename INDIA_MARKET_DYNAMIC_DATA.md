# India Market Dynamic Data Integration

## Overview
The India Market page has been successfully converted from static hardcoded data to a **dynamic data-driven architecture** that can fetch real-time data from APIs.

## What Was Changed

### 1. **Data Architecture**
- ✅ Created TypeScript interfaces for all market data types (`src/types/indiaMarket.ts`)
- ✅ Built a comprehensive API service layer (`src/services/indiaMarketApi.ts`)
- ✅ Implemented React Query hooks for efficient data fetching (`src/hooks/useIndiaMarketData.ts`)
- ✅ Created icon mapping utility for dynamic icon rendering (`src/lib/iconMapper.ts`)

### 2. **Features Added**
- ✅ **Automatic caching** with 5-minute stale time
- ✅ **Loading states** with animated spinner
- ✅ **Error handling** with retry functionality
- ✅ **Fallback data** when API is unavailable
- ✅ **Data refresh** button in the analytics dashboard
- ✅ **Data source indicator** showing when data is from real API vs fallback
- ✅ **Last updated timestamp** display

### 3. **Current State**
The page currently uses **fallback data** (the original hardcoded data) because no real API endpoint is configured. However, the infrastructure is fully ready to connect to real data sources.

---

## How to Connect Real APIs

### Option 1: Connect to Your Own API Backend

1. **Set up your API endpoint** that returns data matching the `IndiaMarketData` interface
2. **Configure environment variable**:
   ```env
   VITE_API_BASE_URL=https://your-api-domain.com
   ```
3. **Update the endpoint paths** in `src/services/indiaMarketApi.ts`:
   ```typescript
   const ENDPOINTS = {
     FULL_MARKET_DATA: '/api/india/market-data',  // Your actual endpoint
     // ... other endpoints
   };
   ```

### Option 2: Use Real Market Data APIs

Here are some real data sources you can integrate:

#### **A. Indian Real Estate Market Data**
- **MagicBricks API**: https://www.magicbricks.com/
- **99acres API**: https://www.99acres.com/
- **Housing.com API**: https://housing.com/
- **PropTiger API**: https://www.proptiger.com/

#### **B. Economic & Demographic Data**
- **World Bank API**: https://data.worldbank.org/
  ```typescript
  // Example: Get India urban population data
  const WORLDBANK_API = 'https://api.worldbank.org/v2/country/IND/indicator/SP.URB.TOTL';
  ```
- **UN Data API**: https://data.un.org/
- **RBI (Reserve Bank of India)**: https://www.rbi.org.in/

#### **C. Proptech Market Research**
- **Statista API**: https://www.statista.com/
- **NASSCOM Reports**: https://nasscom.in/
- **CBRE India**: https://www.cbre.co.in/
- **JLL India**: https://www.jll.co.in/

#### **D. Smart Home Market Data**
- **IoT Analytics**: https://iot-analytics.com/
- **Statista Smart Home**: https://www.statista.com/outlooks/dmo/smart-home/worldwide
- **MarketsandMarkets**: https://www.marketsandmarkets.com/

### Option 3: Create a Mock API for Testing

Create a simple JSON server for testing:

1. **Install json-server**:
   ```bash
   npm install -g json-server
   ```

2. **Create `db.json`** with your market data
3. **Run the server**:
   ```bash
   json-server --watch db.json --port 3001
   ```

4. **Update environment**:
   ```env
   VITE_API_BASE_URL=http://localhost:3001
   ```

---

## API Response Format

Your API should return data in this format:

```json
{
  "marketSizeData": [
    { "year": "2024", "value": 1.3 },
    { "year": "2025", "value": 1.66 }
  ],
  "smartHomeData": [
    { "year": "2024", "value": 5.2 }
  ],
  "regionData": [
    { "name": "Mumbai MMR", "projects": 3200, "growth": 28, "color": "#f97316" }
  ],
  "segmentPie": [
    { "name": "Luxury Residential", "value": 35, "color": "hsl(82, 53%, 53%)" }
  ],
  "chartGrowthData": [
    { "year": "2025", "buildings": 75, "residents": 25, "revenue": 20 }
  ],
  "radarData": [
    { "capability": "AI/ML", "valet": 95, "competitors": 30 }
  ],
  "adoptionData": [
    { "month": "Jan", "signups": 120, "activeUsers": 95, "retention": 82 }
  ],
  "cityRegions": [
    {
      "city": "Mumbai MMR",
      "projects": "3,200+",
      "growth": "28%",
      "cagr": "28% CAGR",
      "population": "21M",
      "premium": "850+",
      "color": "#f97316",
      "trend": [28, 32, 35, 40, 48, 55, 62]
    }
  ],
  "marketDrivers": [
    {
      "icon": "TrendingUp",
      "title": "Rapid Urbanization",
      "stat": "675M",
      "desc": "Urban population by 2030...",
      "impact": "High"
    }
  ],
  "competitiveAdvantages": [
    {
      "icon": "Zap",
      "title": "Unified Platform Advantage",
      "desc": "...",
      "stat": "60% cost reduction",
      "color": "from-green-500/20 to-emerald-500/20"
    }
  ],
  "marketGaps": [
    {
      "problem": "Fragmented Technology Stacks",
      "current": "...",
      "solution": "...",
      "impact": "70% reduction..."
    }
  ],
  "growthProjections": [
    {
      "year": "2025",
      "buildings": "50-75",
      "residents": "25,000+",
      "revenue": "₹15-20 Cr",
      "milestone": "Launch in Mumbai..."
    }
  ],
  "targetSegments": [
    {
      "segment": "Luxury Residential Towers",
      "market": "Mumbai...",
      "opportunity": "800-1,200...",
      "pain": "High concierge costs...",
      "value": "Reduce staffing by 40%..."
    }
  ],
  "lastUpdated": "2026-04-19T10:30:00Z",
  "dataSource": "Your API Name"
}
```

---

## Testing the Implementation

### 1. **Test with Fallback Data (Current State)**
```bash
npm run dev
```
Visit: http://localhost:8080/india

The page should load with the existing data.

### 2. **Test API Connection**
Once you configure a real API:
- Open browser DevTools → Network tab
- Look for API calls to your endpoints
- Check Console for `[API Success]` or `[API Failed]` messages

### 3. **Test Loading States**
Add artificial delay in `src/services/indiaMarketApi.ts`:
```typescript
async function fetchWithFallback<T>(...) {
  await new Promise(resolve => setTimeout(resolve, 3000)); // 3 second delay
  // ... rest of code
}
```

### 4. **Test Error Handling**
Temporarily change API URL to invalid:
```typescript
const API_BASE_URL = 'https://invalid-domain-12345.com';
```

### 5. **Test Cache**
- Load the page (first fetch from API)
- Reload the page (should use cache)
- Wait 5 minutes and reload (should refetch)
- Click "Refresh Data" button (should clear cache and refetch)

---

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   IndiaMarket.tsx                        │
│  - UI Component                                          │
│  - Uses React Query hooks                                │
│  - Displays loading/error states                        │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│          useIndiaMarketData() Hook                       │
│  - Manages query state                                   │
│  - Handles caching                                       │
│  - Auto-refetch on stale                                 │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│          indiaMarketService                              │
│  - fetchWithFallback() function                         │
│  - Tries API first                                       │
│  - Falls back to static data if API fails               │
│  - Implements caching layer                             │
└────────────────────┬────────────────────────────────────┘
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
┌──────────────────┐   ┌──────────────────┐
│   Real API       │   │  Fallback Data   │
│   (Preferred)    │   │  (Static JSON)   │
└──────────────────┘   └──────────────────┘
```

---

## Performance Optimizations

1. **Caching**: 5-minute stale time reduces API calls
2. **Lazy Loading**: Data only fetched when component mounts
3. **Background Refetch**: Updates happen without blocking UI
4. **Retry Logic**: Automatically retries failed requests (up to 2 times)
5. **Timeout**: 10-second timeout prevents hanging requests

---

## Next Steps for Real Data

1. **Identify Data Sources**: Choose which APIs to connect based on your needs
2. **Authentication**: Add API keys/tokens if required
   ```typescript
   headers: {
     'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
   }
   ```
3. **Rate Limiting**: Implement rate limiting if APIs have quotas
4. **Data Transformation**: Map API responses to our format if needed
5. **Real-time Updates**: Consider WebSockets for live data
6. **Analytics**: Track which data is accessed most frequently

---

## Troubleshooting

### Issue: Page shows "Failed to load market data"
**Solution**: Check console for error messages. The fallback data should load if API fails.

### Issue: Data doesn't update after API changes
**Solution**: Clear cache by clicking "Refresh Data" button or:
```typescript
indiaMarketService.clearCache();
```

### Issue: Icons not displaying
**Solution**: Ensure icon names in API response match Lucide icon names exactly (case-sensitive).

### Issue: Images not loading for city regions
**Solution**: Update `cityImages` mapping in `IndiaMarket.tsx` with correct image paths.

---

## Support

For questions or issues:
- Check browser console for detailed logs
- Review the API response format
- Verify environment variables are set correctly
- Test API endpoints directly with tools like Postman

---

**Current Status**: ✅ **Ready for Real API Integration**
The infrastructure is complete and production-ready. Simply configure your API endpoint and the page will automatically use real data!
