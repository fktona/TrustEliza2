import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || "your-webhook-secret";

// Store the latest webhook data
let latestWebhookData: any = null;

export const revalidate = 0;
export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `${WEBHOOK_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    console.log("Received webhook:", body);

    // Store the latest webhook data
    latestWebhookData = body;

    // Revalidate the 'webhook-data' tag instead of the entire path
    revalidateTag("webhook-data");

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ data: latestWebhookData });
}
