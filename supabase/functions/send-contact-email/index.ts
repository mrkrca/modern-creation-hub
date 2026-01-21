import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, service, message }: ContactEmailRequest = await req.json();
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    // Send notification email to the business
    const businessEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Centrokop Trans <onboarding@resend.dev>",
        to: ["centrokoptrans@gmail.com"],
        subject: `Novi upit: ${service} - ${name}`,
        html: `
          <h1>Novi upit sa websajta</h1>
          <p><strong>Ime:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Usluga:</strong> ${service}</p>
          <p><strong>Poruka:</strong></p>
          <p>${message || 'Nema dodatne poruke'}</p>
        `,
      }),
    });

    const businessEmailData = await businessEmailRes.json();
    console.log("Business email response:", businessEmailData);

    // Send confirmation email to the customer
    const customerEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Centrokop Trans <onboarding@resend.dev>",
        to: [email],
        subject: "Primili smo Vaš upit - Centrokop Trans",
        html: `
          <h1>Hvala na interesovanju, ${name}!</h1>
          <p>Primili smo Vaš upit za uslugu: <strong>${service}</strong></p>
          <p>Kontaktiraćemo Vas u najkraćem mogućem roku.</p>
          <br>
          <p>S poštovanjem,<br>Centrokop Trans tim</p>
          <p>Tel: +387 65 566 945</p>
        `,
      }),
    });

    const customerEmailData = await customerEmailRes.json();
    console.log("Customer email response:", customerEmailData);

    if (!businessEmailRes.ok || !customerEmailRes.ok) {
      throw new Error("Failed to send one or more emails");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
