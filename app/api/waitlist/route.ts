import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Initialize Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      fullName, 
      email, 
      companyName, 
      projectValue, 
      projectCount, 
      investorCount,
      features 
    } = body;

    // Format the features into a string
    const selectedFeatures = Object.entries(features)
      .filter(([_, value]) => value)
      .map(([key]) => key.replace(/([A-Z])/g, ' $1').trim()) // Convert camelCase to spaces
      .join(', ');

    // Format the data for Google Sheets
    const values = [
      [
        fullName,
        email,
        companyName,
        projectValue,
        projectCount,
        investorCount.toString(),
        selectedFeatures,
        new Date().toISOString(),
      ],
    ];

    // Append the data to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Waitlist!A:H', // Assumes sheet is named "Waitlist" with columns A through H
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}