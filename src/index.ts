import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import { addDays, formatISO, startOfDay, endOfDay } from 'date-fns';

const app = express();
app.use(cors());
app.use(express.json());

const getGoogleAuth = () => {
  return new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/calendar.events'],
  });
};

app.get('/api/availability', async (req, res) => {
  try {
    const { date, timezone = 'UTC' } = req.query;
    const targetDate = date ? new Date(date as string) : new Date();

    const calendar = google.calendar({ version: 'v3', auth: getGoogleAuth() });
    
    // Mock available response for portfolio demonstration
    // In production, this intersects work hours with calendar.events.list()
    res.json({
      date: formatISO(targetDate, { representation: 'date' }),
      availableSlots: [
        '09:00', '10:00', '14:00', '15:30'
      ],
      timezone
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to compute availability' });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Scheduling API running on port ${PORT}`);
});
