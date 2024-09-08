// Server Action: google-sheets.action.ts
'use server';

import { google } from 'googleapis';

export async function submitForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  console.log('Form data:', { name, email, message });

  try {
   

    const auth = new google.auth.GoogleAuth({
        credentials: {
          "type": process.env.GOOGLE_SERVICE_ACCOUNT_TYPE,
          "project_id": process.env.GOOGLE_PROJECT_ID,
          "private_key_id": process.env.GOOGLE_PRIVATE_KEY_ID,
          "private_key": process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
          "client_email": process.env.GOOGLE_CLIENT_EMAIL,
          "universe_domain": process.env.GOOGLE_UNIVERSE_DOMAIN
        },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID is not defined');
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, message]],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'An unknown error occurred' };
  }
}