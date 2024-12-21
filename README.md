# Car Dealer App

Welcome to the **Car Dealer App**, a Next.js (App Router) application that displays vehicle information from the [VPIC API](https://vpic.nhtsa.dot.gov/api/). This project is a **test assessment**/demo for a front-end JavaScript engineer role, showcasing data fetching, dynamic routing, and client-side interactions in Next.js **15**.

# Project is deployed and you can visit live version [here](https://purplefade.github.io/car-dealer-app/)

## Features

1. **Fetch Vehicle Makes**  
   - Uses the VPIC endpoint to retrieve makes for vehicle type “car”.
   - Displays the list of makes in a `<select>` dropdown on the homepage.

2. **Dynamic Routing for Results**  
   - Generates pages for each `[makeId]/[year]` combination using `generateStaticParams()` for **Static Site Generation** (SSG).
   - Loads models from the VPIC API for the selected make and year, displaying them on a dedicated page.

3. **Client & Server Components**  
   - Demonstrates usage of Next.js **App Router** with both **server** components (for data fetching) and **client** components (for user interaction).

4. **Placeholder “No Data” Fallback**  
   - Gracefully handles scenarios where the API returns no data or a non-200 status.

5. **Environment Variables**  
   - Fetch endpoints are configurable via `.env` files (e.g. `ALL_VEHICLES`, `ALL_QUERY_VEHICLES`).

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/purpleFade/car-dealer-app.git
cd car-dealer-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root of the project (same directory as `package.json`), and set the necessary variables. For example:

```bash
# .env.local
ALL_VEHICLES="https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
ALL_QUERY_VEHICLES="https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear"
```

> **Note:** By default, these endpoints are public and do not require any authentication. If you want to adjust or point to a different API, modify these URLs accordingly.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

### 5. Build for Production

```bash
npm run build
# or
yarn build
```

To start the production server locally:

```bash
npm run start
# or
yarn start
```

---

## Project Structure

```
car-dealer-app/
  ├─ app/
  │   ├─ layout.tsx            # RootLayout for the entire app
  │   ├─ page.tsx              # Home page displaying "Vehicles" and dropdowns
  │   └─ result/
  │       └─ [makeId]/
  │           └─ [year]/
  │               ├─ page.tsx  # Results page for each makeId/year
  │               └─ layout.tsx
  ├─ components/
  │   ├─ NextButton/
  │   │   └─ NextButton.tsx     # A button that navigates to the results page
  │   └─ Loading/
  │       └─ Loading.tsx        # Loading indicator component
  ├─ lib/
  │   ├─ fetchVehicles.ts       # Fetches all vehicle makes from VPIC
  │   ├─ fetchAllMakeIds.ts     # Fetches a list of makeIds
  │   └─ fetchVehicleData.ts    # Fetches vehicle models for a specific make/year
  ├─ .env.local.example         # Example environment variables
  ├─ package.json
  └─ tsconfig.json
```

## License

[MIT](LICENSE) – You’re free to use and modify this code. See the [`LICENSE`](LICENSE) file for details.

---
