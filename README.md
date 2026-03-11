# Universal Scheduling System (Calendly Clone)

A robust booking and scheduling system backend. It handles complex time-zone conversions, appointment conflict resolution, and seamless integration with third-party calendar providers like Google Calendar.

## Features

- **Timezone Mastery**: Flawless handling of localized availability slots across different global timezones.
- **Availability Engine**: Algorithmic generation of available time slots based on user-defined work hours and existing calendar events.
- **Google Calendar Sync**: Two-way synchronization using the official `googleapis` SDK.
- **REST API**: Clean endpoints for fetching availability and booking appointments.

## Tech Stack

- Node.js & Express
- TypeScript
- Google APIs (Calendar v3)
- date-fns (Timezone & Date Utilities)

## Setup

1. Install dependencies: `npm install`
2. Configure `.env` with your Google Cloud Service Account credentials.
3. Start development server: `npm run dev`

## Architecture

This service acts as an abstraction layer over external calendar APIs. The core domain logic (`AvailabilityService`) computes free slots in memory without holding database locks, ensuring high scalability for read-heavy operations like viewing booking pages.
