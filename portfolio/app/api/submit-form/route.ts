import { google } from "googleapis";

export async function getSheetData() { 
  const glAuth = await google.auth.getClient({
        projectId: "portfolio-434915",
        credentials: {
            "type": "service_account",
            "project_id": "portfolio-434915",
            "private_key_id": "756816f03b5efecf71151c5633cc91dddaebde3f",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqvZhsKzXwaNc6\nO3pR713c3zMlKXVkV5BywoWxje28NidPzD0cFe5a1UbKtwQXEqD6J1R6ZHeYT8wO\nbUBpnOk7aB0peMcTgDsSWfVFylc6ff3K5O/FySTHW8jgDOFLvB3MEsLRrFX3fCLO\nKl0ubkroRJHLgQUElfdBfH5y+FNdTtXPanxLSjnwwcGGvT94DwE4f65FC0Kml4ZL\nX6b0asPFWJIk/QUhcsdUaovjSpmXu0V7p/byZf6JsJqC12wNc6nsaFwu8fihz5ev\nQ80IYi0K6ihIlCoVRCmFyVipGUqgNipIx2z4/3MHtx7McVDzp2DXgfRZtu8gJBmU\nsWSGphunAgMBAAECggEANVYJvcyXynRtu3amBN9h8mPVDchQMBq8eGT0r5z3BWLj\nT+Wst0/QiBZ0yVF3mR+MIujTVnJ4+579zwno47UNFK424eQlSB24Fkj8uiL1scN2\n2wE+N4pYj2BINVlArdBjfILl0erkZe2kz8NjHWR9yOXWp3wzzZVtSksyEwcov44k\nzTMXPWne3AkeDiA03iGdCLWM5rJGWySnleVmEVYYhQmBRO4f6fmbmUAGQoEB9CjY\n8GaIEwFkSgIgNED/kYxFqMsxGT6cB/3wYuUB2D95amGc/BrreusFXcSeGjQXLeoo\nWFYEj79eZz32vgY/lLnUlIe4lvA03ScMp9+7+dl7yQKBgQDVjGvY1IDvmHNLObbh\nAe5wDQeIZ43q9U/DXsmxyAfyMPiwnh3d/x+7ejfl10B8ykuXtaTVtE622BXQ6JJF\nto7B9t9ZF3mrNXuAzTRf/2W+JOtGbGimv8MPBVIP8OPNgPfE3PtkPhs04oA3Qg1A\nHi6tlpB33XAJHUokn/eKc13q3wKBgQDMrqkTouN4ucFFkuDhXh5gb3faSNBw6k6s\ncLcyAVZCdog0U6RKHUjndz3HDwsjbx95I3v8p1en/I1JQdKcK2SJqUi9aSQX2JS7\nu6XD9rgZkah7yebn1D6U9J8GdcUK9IYc6dHjNOy02zBjx60KicN8fEFIYhUYYAYr\nUHeavq0wOQKBgA0uLpXif9bJ9QvGkygOI3ZdB4L+yT6gR30Kg65qZzsmlKLqD3Pd\nREsg/wQ7pepN3h6OAo+CIn2clrQfNrAA1YzZPO3VyhesJGRNxhbKv6/dvXvKQydP\nnK13qZn8R0Mu25wV+5ozTyCTflBqzkCP3FewfFg5namiWioqiW/NMRXHAoGBAKfa\noJuS3HrX0tDsl/EaD01EfISNbCr9a9Fsij++6u+MZzyKT1PcWjpABnClPJwteCEO\n4ZIb5f3EVlV6Xm5mA4gFRLrYa5oGqkqeo11miiml0wbZV7xMyZm8VmGk2ReX2hgC\nBHcQowHaMv/Q826N9buz5pGmpegcb1K8JanIrxy5AoGAXXFy2rsk38lSHIPxWxAa\nCYFRLVTeSAFi1twFwdnz4uJfSUo0VEI5mWQNz/BViBoEl0mcPhmo7/+D4pJSEUKE\nNRXvrftESotS4bdaWL5vlkDNjP6nQUHv0JFpgnJtb0Q+Hch0axjK7tcQSnGBUshJ\n6iC3A/34q2vbA1/1n+IoIYo=\n-----END PRIVATE KEY-----\n",
            "client_email": "get-connect@portfolio-434915.iam.gserviceaccount.com",
            "universe_domain": "googleapis.com"
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const glSheets = google.sheets({ version: "v4", auth: glAuth });

    const data = await glSheets.spreadsheets.values.get({
        spreadsheetId: "https://docs.google.com/spreadsheets/d/1Rgg4okt_6jF4w9F8FMPpBEy_MXEMtNynM4ab91JVvAU/edit?gid=0#gid=0",
        range: 'RANGE',
    });

    return { data: data.data.values };
}