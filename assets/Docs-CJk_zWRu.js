import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{s as t}from"./vendor-MoN2eFRA.js";import{c as n,r,t as i}from"./vendor-react-j2YN6wof.js";import{A as a,Tn as o,Tt as s,Ut as c,Yt as l,cn as u,et as d,i as f,v as p,yt as m}from"./vendor-icons-BOz0q351.js";import{t as h}from"./downloads-BpKYHMIc.js";import{t as g}from"./TrustBadge-BRfMKqbt.js";var _=e(t(),1),v=i(),y=[{grp:`Getting Started`},{id:`quickstart`,label:`Quickstart`,icon:p},{id:`auth`,label:`Authentication`,icon:s},{grp:`Integration`},{id:`hosted`,label:`Hosted Checkout`,icon:m},{id:`create-payment`,label:`Create Payment`,icon:l},{id:`verify`,label:`Verify Payment`,icon:u},{id:`webhooks`,label:`Webhooks`,icon:f},{grp:`Downloads`},{id:`downloads`,label:`SDKs & Plugins`,icon:d},{grp:`Showcase`},{id:`badge`,label:`Trust Badge`,icon:o}],b=()=>{let e=n(),[t,i]=(0,_.useState)(`quickstart`);return(0,_.useEffect)(()=>{let t=(e.hash||``).replace(`#`,``);t&&y.some(e=>e.id===t)&&i(t)},[e.hash]),(0,v.jsxs)(`div`,{className:`docs-shell`,children:[(0,v.jsxs)(`aside`,{className:`docs-side`,children:[y.map((e,n)=>e.grp?(0,v.jsx)(`div`,{className:`grp`,children:e.grp},n):(0,v.jsxs)(`button`,{onClick:()=>i(e.id),className:`docs-nav-btn ${t===e.id?`on`:``}`,children:[(0,v.jsx)(e.icon,{size:17}),` `,e.label]},e.id)),(0,v.jsx)(`div`,{className:`grp`,children:`Trust`}),(0,v.jsxs)(r,{to:`/security`,className:`docs-nav-btn`,style:{textDecoration:`none`},children:[(0,v.jsx)(a,{size:17}),` Security & Money Flow`]}),(0,v.jsxs)(r,{to:`/status`,className:`docs-nav-btn`,style:{textDecoration:`none`},children:[(0,v.jsx)(u,{size:17}),` System Status`]})]}),(0,v.jsxs)(`main`,{className:`docs-main`,children:[t===`quickstart`&&(0,v.jsxs)(`div`,{className:`fade-in`,children:[(0,v.jsx)(`h1`,{children:`Quickstart — Go Live in 3 Steps`}),(0,v.jsxs)(`p`,{children:[`Welcome to the SamirProPayments API. The API base is `,(0,v.jsx)(`code`,{className:`inline`,children:`https://api.samirpropayments.online`}),` and every response is JSON. Most merchants integrate in one of two ways: the no-code `,(0,v.jsx)(`strong`,{children:`Hosted Checkout`}),` redirect (see the Integration Guide), or direct API sessions:`]}),(0,v.jsx)(r,{to:`/integration`,style:{textDecoration:`none`,display:`block`,margin:`22px 0 6px`},children:(0,v.jsxs)(`div`,{style:{background:`linear-gradient(120deg, #1B1035, #33205C)`,borderRadius:`16px`,padding:`22px 24px`,display:`flex`,gap:`16px`,alignItems:`center`,flexWrap:`wrap`},children:[(0,v.jsx)(`span`,{className:`feature-ic`,style:{background:`linear-gradient(135deg,#EC008C,#FF7A18)`,color:`#fff`,width:50,height:50,borderRadius:14,flex:`none`},children:(0,v.jsx)(m,{size:24})}),(0,v.jsxs)(`span`,{style:{flex:`1 1 260px`},children:[(0,v.jsx)(`strong`,{style:{display:`block`,color:`#fff`,fontSize:`17px`},children:`New: the step-by-step Integration Guide`}),(0,v.jsx)(`span`,{style:{color:`#C9C2E0`,fontSize:`14px`,lineHeight:1.55,display:`block`,marginTop:`4px`},children:`The exact checkout link format, every parameter, the Link Builder, return behaviour and webhooks — verified against the live gateway.`})]}),(0,v.jsx)(`span`,{className:`btnx btnx--primary btnx--sm`,style:{flex:`none`},children:`Open the guide →`})]})}),(0,v.jsxs)(`div`,{className:`callout warn`,children:[(0,v.jsxs)(`h4`,{children:[(0,v.jsx)(a,{size:17}),` Try everything free first — Test Mode`]}),(0,v.jsxs)(`p`,{children:[`Every store has separate `,(0,v.jsx)(`strong`,{children:`test credentials`}),`. Sessions created with them run the full checkout in an isolated sandbox (ids start with `,(0,v.jsx)(`code`,{className:`inline`,children:`SPP-T-`}),`), cost nothing, and send no real emails or webhooks. Generate them in `,(0,v.jsx)(`code`,{className:`inline`,children:`Dashboard → Stores → API Credentials & Test Mode`}),`, simulate incoming payments with `,(0,v.jsx)(`code`,{className:`inline`,children:`POST /api/sandbox/simulate-payment`}),`, and switch to your live credentials when you are ready. Details in the Authentication section.`]}),(0,v.jsxs)(`p`,{style:{marginTop:`8px`},children:[`One plan note: generating API credential pairs is a paid-plan feature (Starter and above). The dashboard's `,(0,v.jsx)(`strong`,{children:`Open Test Checkout`}),` still works for every store — a test key is created automatically there. On the free plan, integrate with the Hosted Checkout link and confirm payments with check-status — no keys needed.`]})]}),(0,v.jsx)(`h2`,{children:`Step 1 — Create a Payment Session from your Server`}),(0,v.jsx)(`p`,{children:`When a customer is ready to pay, create a session with your store credentials. The session is stamped with your store server-side — the merchant identity always comes from the key, never from the request body.`}),(0,v.jsx)(`pre`,{className:`codeblock`,children:`curl -X POST https://api.samirpropayments.online/api/create-payment-session \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: spp_store_9f2c…" \\
  -H "x-api-secret: sk_live_…" \\
  -d '{
    "merchantOrderId": "ORD-1042",
    "amount": 850,
    "currency": "BDT",
    "callbackUrl": "https://yourshop.com/payment-return"
  }'

→ 200
{
  "success": true,
  "gatewayPaymentId": "SPP-261011-143022-K7QX2M",
  "expiresAt": 1760196322000,
  "remainingSeconds": 900,
  "ttlSeconds": 900
}`}),(0,v.jsx)(`pre`,{className:`codeblock`,children:`// Node.js (fetch)
const res = await fetch('https://api.samirpropayments.online/api/create-payment-session', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.SPP_API_KEY,
    'x-api-secret': process.env.SPP_API_SECRET,
  },
  body: JSON.stringify({
    merchantOrderId: order.id,
    amount: order.total,
    currency: 'BDT',
    callbackUrl: 'https://yourshop.com/payment-return',
  }),
});
const session = await res.json();
// session.gatewayPaymentId → "SPP-…" (or "SPP-T-…" in test mode)`}),(0,v.jsx)(`pre`,{className:`codeblock`,children:`<?php // PHP (cURL)
$ch = curl_init('https://api.samirpropayments.online/api/create-payment-session');
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    'Content-Type: application/json',
    'x-api-key: ' . getenv('SPP_API_KEY'),
    'x-api-secret: ' . getenv('SPP_API_SECRET'),
  ],
  CURLOPT_POSTFIELDS => json_encode([
    'merchantOrderId' => $orderId,
    'amount' => 850,
    'currency' => 'BDT',
    'callbackUrl' => 'https://yourshop.com/payment-return',
  ]),
]);
$session = json_decode(curl_exec($ch), true);
// $session['gatewayPaymentId'] → "SPP-…"`}),(0,v.jsx)(`h2`,{children:`Step 2 — Redirect the Customer to the Checkout Link`}),(0,v.jsxs)(`p`,{children:[`Send the customer to the hosted checkout with the `,(0,v.jsx)(`strong`,{children:`same orderId`}),` you used in Step 1 — the checkout resumes your session (same Gateway Payment ID, same 15-minute window) instead of starting a new one:`]}),(0,v.jsx)(`pre`,{className:`codeblock`,children:`https://samirpropayments.online/checkout?orderId=ORD-1042&amount=850&merchant=Your%20Store%20Name&callbackUrl=https%3A%2F%2Fyourshop.com%2Fpayment-return

// Real example — a live ৳850 checkout for the store "Gadget Zone BD":
https://samirpropayments.online/checkout?orderId=ORD-1042&amount=850&merchant=Gadget%20Zone%20BD&callbackUrl=https%3A%2F%2Fyourshop.com%2Fpayment-return`}),(0,v.jsxs)(`p`,{children:[`The customer picks a method, pays to `,(0,v.jsx)(`em`,{children:`your own`}),` receiving number, and the gateway verifies the payment automatically against the payment SMS (sender number + exact amount + method). Sessions stay valid for `,(0,v.jsx)(`strong`,{children:`15 minutes`}),`; re-opening the same orderId resumes the same session and never extends the window.`]}),(0,v.jsxs)(`p`,{children:[`Include your store id (`,(0,v.jsx)(`code`,{className:`inline`,children:`&store=YOUR_STORE_ID`}),`) in the link when you have one — links the dashboard and the Link Builder create carry it automatically. The id pins the session to your exact store; a name-only link resolves by name and can be refused when another merchant uses the same name.`]}),(0,v.jsx)(`h2`,{children:`Step 3 — Confirm the Result on your Server`}),(0,v.jsxs)(`p`,{children:[`When a payment completes, we POST a `,(0,v.jsx)(`code`,{className:`inline`,children:`payment.success`}),` webhook to the URL saved in `,(0,v.jsx)(`code`,{className:`inline`,children:`Dashboard → API & Webhooks`}),`. Treat it as a trigger, then confirm with check-status before fulfilling the order — never trust the browser redirect alone.`]}),(0,v.jsx)(`pre`,{className:`codeblock`,children:`// Node.js (Express) — webhook receiver
app.post('/webhooks/samirpropayments', express.json(), async (req, res) => {
  res.sendStatus(200); // answer fast, process in your queue
  const { type, data } = req.body || {};
  if (type !== 'payment.success') return;
  // data.orderId is YOUR order id; data.gatewayId is the SPP-… session id.
  const check = await fetch(
    'https://api.samirpropayments.online/api/check-status' +
    '?gatewayPaymentId=' + data.gatewayId +
    '&orderId=' + data.orderId +
    '&account=' + data.sender +
    '&amount=' + data.amount +
    '&method=' + encodeURIComponent(data.method)
  ).then(r => r.json());
  if (check.verified) markOrderPaid(data.orderId, data.trxId);
});`}),(0,v.jsx)(`pre`,{className:`codeblock`,children:`curl "https://api.samirpropayments.online/api/check-status?gatewayPaymentId=SPP-261011-143022-K7QX2M&orderId=ORD-1042&account=01712345678&amount=850&method=bkash"

→ 200 { "verified": true, "orderId": "SPP-261011-143022-K7QX2M", "totalPaid": 850 }`}),(0,v.jsxs)(`p`,{children:[`In check-status answers, `,(0,v.jsx)(`code`,{className:`inline`,children:`orderId`}),` echoes the `,(0,v.jsx)(`strong`,{children:`gateway session id`}),` (`,(0,v.jsx)(`code`,{className:`inline`,children:`SPP-…`}),`). Your own order id is the one you created the session with — and it is what the webhook's `,(0,v.jsx)(`code`,{className:`inline`,children:`data.orderId`}),` carries.`]}),(0,v.jsx)(`h2`,{children:`Before You Go Live — Merchant Setup Checklist`}),(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`strong`,{children:`1. Get your API keys.`}),` Log in to your Merchant Dashboard and open `,(0,v.jsx)(`code`,{className:`inline`,children:`Stores → API Credentials & Test Mode`}),` on your store's card to generate its API key and secret. Keys are per-store. The secret is shown only once — only its hash is stored — so copy it somewhere safe; regenerating it invalidates the old one. Generating keys is a paid-plan feature (Starter and above); on the free plan, use the Hosted Checkout link instead — it needs no keys.`]}),(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`strong`,{children:`2. Add your payment numbers.`}),` In the dashboard, add the bKash / NAGAD / Rocket / Upay numbers your customers will pay, and keep the Spro Pay app connected with your store's SMS API key so payment SMS reach the gateway. Verification matches incoming payments against your receiving setup plus the sender number, the exact amount and the method the customer picked.`]})]}),t===`auth`&&(0,v.jsxs)(`div`,{className:`fade-in`,children:[(0,v.jsx)(`h1`,{children:`Authentication`}),(0,v.jsxs)(`p`,{children:[`Keys are `,(0,v.jsx)(`strong`,{children:`per-store`}),`: generate them in `,(0,v.jsx)(`code`,{className:`inline`,children:`Dashboard → Stores → API Credentials & Test Mode`}),`. The API key (`,(0,v.jsx)(`code`,{className:`inline`,children:`spp_store_…`}),` live, `,(0,v.jsx)(`code`,{className:`inline`,children:`spp_test_…`}),` test) is a public identifier; the secret is shown `,(0,v.jsx)(`strong`,{children:`only once`}),` at generation — the server stores just its SHA-256 hash — and regenerating it invalidates the old secret immediately.`]}),(0,v.jsxs)(`div`,{className:`callout warn`,children:[(0,v.jsxs)(`h4`,{children:[(0,v.jsx)(a,{size:17}),` Keep your keys safe`]}),(0,v.jsx)(`p`,{children:`Anyone with your store's key + secret can create payment sessions as that store. Do not commit them to GitHub, and regenerate the secret from the dashboard if one leaks.`})]}),(0,v.jsxs)(`p`,{children:[`Send the pair as headers when creating a session (body fields `,(0,v.jsx)(`code`,{className:`inline`,children:`apiKey`}),` / `,(0,v.jsx)(`code`,{className:`inline`,children:`apiSecret`}),` work too). The session is then stamped with that store automatically — the merchant identity is resolved from the key server-side, never taken from the request body:`]}),(0,v.jsx)(`pre`,{className:`codeblock`,children:`POST /api/create-payment-session
x-api-key: spp_store_9f2c…
x-api-secret: sk_live_…

{ "amount": 850, "merchantOrderId": "ORD-1042",
  "callbackUrl": "https://yourshop.com/orders/return" }

→ 200 { "success": true, "gatewayPaymentId": "SPP-261011-143022-K7QX2M",
        "expiresAt": 1760196322000, "remainingSeconds": 900, "ttlSeconds": 900 }`}),(0,v.jsxs)(`p`,{children:[`A wrong key or secret returns `,(0,v.jsx)(`code`,{className:`inline`,children:`401`}),` — credentials are never silently downgraded. A `,(0,v.jsx)(`strong`,{children:`live`}),` key always requires its secret; a `,(0,v.jsx)(`strong`,{children:`test`}),` key on its own can open a sandbox session (that is how the dashboard's Open Test Checkout works), because sandbox data is isolated and worthless.`]}),(0,v.jsx)(`h2`,{children:`Sandbox / Test Mode`}),(0,v.jsxs)(`p`,{children:[`Sessions created with `,(0,v.jsx)(`strong`,{children:`test credentials`}),` — or with `,(0,v.jsx)(`code`,{className:`inline`,children:`"testMode": true`}),` plus a test key — run the `,(0,v.jsx)(`em`,{children:`full`}),` checkout flow (method selection, auto-verify polling, TrxID fallback) in a `,(0,v.jsx)(`strong`,{children:`separate sandbox database`}),`: sandbox session ids start with `,(0,v.jsx)(`code`,{className:`inline`,children:`SPP-T-`}),`, the checkout shows a TEST MODE ribbon, test orders never appear in your live Orders list, and sandbox completions send no real emails or webhooks — the webhook payload is recorded in the sandbox for inspection instead.`]}),(0,v.jsx)(`p`,{children:`To complete a test checkout on your own, first simulate the incoming payment — it records a sandbox payment exactly as if the SMS had arrived:`}),(0,v.jsx)(`pre`,{className:`codeblock`,children:`POST /api/sandbox/simulate-payment
x-api-key: spp_test_9f2c…
x-api-secret: sk_test_…

{ "amount": 850, "method": "bkash", "sender": "01700000000" }

→ 200 { "success": true, "trxId": "TEST9F3A2B81C4" }

// Then open the test checkout (Stores → Test Mode →
// Open Test Checkout) and pay with the same method,
// sender number and amount.`})]}),t===`hosted`&&(0,v.jsxs)(`div`,{className:`fade-in`,children:[(0,v.jsx)(`h1`,{children:`Hosted Checkout (No Backend Needed)`}),(0,v.jsxs)(`p`,{children:[`The fastest integration: redirect your customer to our checkout page with query parameters, and we redirect them back to your `,(0,v.jsx)(`code`,{className:`inline`,children:`callbackUrl`}),` with a result status when the flow ends.`]}),(0,v.jsx)(`pre`,{className:`codeblock`,children:`GET /checkout?orderId=INV-1001
             &amount=500
             &currency=BDT
             &merchant=My%20Store
             &store=YOUR_STORE_ID     (recommended — pins the session to your store)
             &method=bkash            (optional — preselects a method)
             &name=Customer%20Name    (optional — passed by YOUR site)
             &email=customer@mail.com (optional — passed by YOUR site)
             &callbackUrl=https://mystore.com/payment-result`}),(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`strong`,{children:`Name & email are integration parameters, not checkout form fields.`}),` If your website already knows the customer, pass `,(0,v.jsx)(`code`,{className:`inline`,children:`name`}),` / `,(0,v.jsx)(`code`,{className:`inline`,children:`email`}),` with the redirect and they are used for the receipt and records automatically. The customer is never asked to type them — the checkout only collects payment details (method, sender account and TrxID).`]}),(0,v.jsx)(`h2`,{children:`Callback Parameters`}),(0,v.jsxs)(`p`,{children:[`On completion we redirect to your `,(0,v.jsx)(`code`,{className:`inline`,children:`callbackUrl`}),` with one of four results:`]}),(0,v.jsx)(`pre`,{className:`codeblock`,children:`SUCCESS    ?status=success&orderId={yourOrderId}&trxId={trxId}&gatewayId={SPP-…}
CANCELLED  ?status=cancelled&orderId={yourOrderId}
REVIEW     ?status=review&orderId={yourOrderId}
EXPIRED    ?status=expired&orderId={yourOrderId}&gatewayId={SPP-…}`}),(0,v.jsx)(`p`,{children:`The return is a browser redirect, not proof of payment — a customer could edit the URL. Always confirm the final status server-side with check-status or the webhook before delivering goods (see Verify Payment).`})]}),t===`create-payment`&&(0,v.jsxs)(`div`,{className:`fade-in`,children:[(0,v.jsx)(`h1`,{children:`Create a Payment Session`}),(0,v.jsxs)(`p`,{children:[`Create a session server-side, then redirect your customer to the hosted checkout link with the same `,(0,v.jsx)(`code`,{className:`inline`,children:`merchantOrderId`}),` (see Hosted Checkout) — the checkout resumes this exact session. A session stays valid for `,(0,v.jsx)(`strong`,{children:`15 minutes`}),` (`,(0,v.jsx)(`code`,{className:`inline`,children:`ttlSeconds: 900`}),`); creating a session again with the same `,(0,v.jsx)(`code`,{className:`inline`,children:`merchantOrderId`}),`, amount, currency and store `,(0,v.jsx)(`strong`,{children:`resumes`}),` it — same Gateway Payment ID, and the 15-minute window never extends — instead of minting a duplicate.`]}),(0,v.jsx)(`p`,{children:(0,v.jsx)(`span`,{className:`method-pill`,children:`POST https://api.samirpropayments.online/api/create-payment-session`})}),(0,v.jsx)(`pre`,{className:`codeblock`,children:`Headers
  Content-Type: application/json
  x-api-key: spp_store_…        (or spp_test_… for a sandbox session)
  x-api-secret: sk_live_…       (or sk_test_…)

Body
{
  "merchantOrderId": "ORD-1042",
  "amount": 850,
  "currency": "BDT",
  "callbackUrl": "https://yourshop.com/payment-return",
  "customerName": "Rahim Uddin",          // optional
  "email": "customer@mail.com"            // optional — receipt/records only
}`}),(0,v.jsx)(`pre`,{className:`codeblock`,children:`// 200 OK
{
  "success": true,
  "gatewayPaymentId": "SPP-261011-143022-K7QX2M",
  "expiresAt": 1760196322000,
  "remainingSeconds": 900,
  "ttlSeconds": 900
}

// Re-opening the same order adds  "resumed": true  and the same id.
// With TEST credentials the id starts "SPP-T-" and the response
// also carries  "testMode": true.
// Invalid store credentials → 401 { "success": false, "error": "…" }`}),(0,v.jsxs)(`div`,{className:`callout`,children:[(0,v.jsxs)(`h4`,{children:[(0,v.jsx)(u,{size:17}),` No credentials?`]}),(0,v.jsx)(`p`,{children:`You can also skip sessions entirely and use the plain Hosted Checkout link — opening it creates/resumes the session automatically. Sessions created without credentials are live sessions; test mode always requires a test API key, so a test session is always attributable to a store.`})]}),(0,v.jsx)(`h2`,{children:`Amounts Are in Taka — Not Paisa`}),(0,v.jsxs)(`p`,{children:[`The `,(0,v.jsx)(`code`,{className:`inline`,children:`amount`}),` field is a plain `,(0,v.jsx)(`strong`,{children:`BDT taka`}),` amount: `,(0,v.jsx)(`code`,{className:`inline`,children:`850`}),` means `,(0,v.jsx)(`strong`,{children:`৳850.00`}),`. Do `,(0,v.jsx)(`strong`,{children:`not`}),` multiply by 100 — SamirProPayments never uses paisa (smallest-unit) amounts anywhere in the API, the checkout link or webhooks. If you are migrating from a gateway whose API takes paisa, divide by 100 when you switch. Amounts must match exactly: verification compares the amount the customer actually paid against this figure, to the taka.`]}),(0,v.jsx)(`h2`,{children:`Laravel — Copy-Paste Example`}),(0,v.jsx)(`p`,{children:`No package to install: Laravel's built-in HTTP client covers the whole flow. Create the session server-side, then redirect the customer to the hosted checkout. (This is example code for your own app — adjust the store name and URLs to yours.)`}),(0,v.jsx)(`pre`,{className:`codeblock`,children:`<?php // routes/web.php
use Illuminate\\Support\\Facades\\Http;
use Illuminate\\Support\\Facades\\Route;

Route::post('/pay/{order}', function ($orderId) {
    $order = Order::findOrFail($orderId);

    $session = Http::withHeaders([
        'x-api-key'    => config('services.spp.key'),
        'x-api-secret' => config('services.spp.secret'),
    ])->post('https://api.samirpropayments.online/api/create-payment-session', [
        'merchantOrderId' => 'ORD-' . $order->id,
        'amount'          => $order->total,   // taka — 850 means ৳850
        'currency'        => 'BDT',
        'callbackUrl'     => route('payment.return'),
    ])->json();

    // Re-opening the same order safely resumes the same session.
    $checkout = 'https://samirpropayments.online/checkout?' . http_build_query([
        'orderId'     => 'ORD-' . $order->id,
        'amount'      => $order->total,
        'merchant'    => 'Your Store Name',
        'callbackUrl' => route('payment.return'),
    ]);
    return redirect()->away($checkout);
});`}),(0,v.jsxs)(`p`,{children:[`On return, confirm server-side before fulfilling: treat the webhook as a trigger and call `,(0,v.jsx)(`code`,{className:`inline`,children:`check-status`}),` (Verify Payment section) — never trust the browser redirect alone.`]})]}),t===`verify`&&(0,v.jsxs)(`div`,{className:`fade-in`,children:[(0,v.jsx)(`h1`,{children:`Verify a Payment`}),(0,v.jsx)(`p`,{children:`Two server-side calls confirm a payment. The verification engine matches the payment your store actually received — sender account, exact amount and the method the customer picked (plus the TrxID when one is provided) — and a payment is never consumed twice.`}),(0,v.jsx)(`h2`,{children:`Check Status — the Poll the Checkout Itself Uses`}),(0,v.jsx)(`p`,{children:(0,v.jsx)(`span`,{className:`method-pill`,children:`GET https://api.samirpropayments.online/api/check-status`})}),(0,v.jsx)(`pre`,{className:`codeblock`,children:`GET /api/check-status?gatewayPaymentId=SPP-261011-143022-K7QX2M
                     &orderId=ORD-1042
                     &account=01712345678
                     &amount=850
                     &method=bkash

// Still waiting for a matching payment:
→ 200 { "verified": false }

// Paid in full ("orderId" here is the gateway session id):
→ 200 { "verified": true, "orderId": "SPP-261011-143022-K7QX2M", "totalPaid": 850 }

// Part-paid (the session stays open on the remaining due):
→ 200 { "verified": false, "type": "PARTIAL", "status": "partial",
        "message": "Partial Payment Received",
        "totalAmount": 850, "paidSoFar": 500, "remainingDue": 350,
        "justPaid": { "amount": 500, "method": "bkash", "trxId": "…" },
        "partialPayments": [ … ] }`}),(0,v.jsx)(`h2`,{children:`Verify Payment — Confirm with the Details`}),(0,v.jsx)(`p`,{children:(0,v.jsx)(`span`,{className:`method-pill`,children:`POST https://api.samirpropayments.online/api/verify-payment`})}),(0,v.jsx)(`pre`,{className:`codeblock`,children:`{
  "requiredAmount": 850,
  "userTrxId": "9HX72KD81P",            // optional — omit to auto-match
  "orderId": "ORD-1042",
  "gatewayPaymentId": "SPP-261011-143022-K7QX2M",
  "clientInfo": {
    "whatsapp": "01712345678",
    "senderInfo": "01712345678",
    "paymentMethod": "bKash",
    "merchantName": "Your Store Name",
    "email": "customer@mail.com"
  }
}

→ 200 { "success": true,
        "message": "Payment Verified & Order Completed!",
        "orderId": "ORD-1042", "totalPaid": 850 }`}),(0,v.jsxs)(`div`,{className:`callout`,children:[(0,v.jsxs)(`h4`,{children:[(0,v.jsx)(a,{size:17}),` Every result type`]}),(0,v.jsxs)(`p`,{children:[`Non-success answers carry `,(0,v.jsx)(`code`,{className:`inline`,children:`success: false`}),` and a `,(0,v.jsx)(`code`,{className:`inline`,children:`type`}),`: `,(0,v.jsx)(`code`,{className:`inline`,children:`PARTIAL`}),` (underpaid — `,(0,v.jsx)(`code`,{className:`inline`,children:`paidSoFar`}),` / `,(0,v.jsx)(`code`,{className:`inline`,children:`remainingDue`}),` included, HTTP 200) · `,(0,v.jsx)(`code`,{className:`inline`,children:`METHOD_MISMATCH`}),` (paid by a different method — never consumed, HTTP 200) · `,(0,v.jsx)(`code`,{className:`inline`,children:`INSUFFICIENT`}),` (HTTP 400) · `,(0,v.jsx)(`code`,{className:`inline`,children:`NOT_FOUND`}),` (“Payment Not Received or Details Mismatch”, or “This Payment is already used!”, HTTP 400) · `,(0,v.jsx)(`code`,{className:`inline`,children:`CANCELLED`}),` (HTTP 400) · `,(0,v.jsx)(`code`,{className:`inline`,children:`EXPIRED`}),` (the 15-minute window lapsed, HTTP 400) · `,(0,v.jsx)(`code`,{className:`inline`,children:`VERIFY_LIMIT`}),` (the merchant's free-plan verification quota is used up — auto-verification pauses until they upgrade). check-status reports the same types with `,(0,v.jsx)(`code`,{className:`inline`,children:`verified: false`}),`. Cancelled and expired sessions can never verify or consume a payment.`]})]}),(0,v.jsx)(`h2`,{children:`Order States — What Each Status Means`}),(0,v.jsxs)(`p`,{children:[`Every session sits in exactly one of these states. The same names appear in the dashboard, in check-status answers and in the `,(0,v.jsx)(`code`,{className:`inline`,children:`status`}),` parameter appended to your callback URL.`]}),(0,v.jsx)(`div`,{style:{overflowX:`auto`},children:(0,v.jsxs)(`table`,{className:`tbl tbl--tight`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`Status`}),(0,v.jsx)(`th`,{children:`Meaning`}),(0,v.jsx)(`th`,{children:`What you should do`})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`code`,{className:`inline`,children:`initiated`})}),(0,v.jsx)(`td`,{children:`Session created; waiting for a matching payment inside the 15-minute window.`}),(0,v.jsx)(`td`,{children:`Nothing — keep the order unpaid/pending.`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`code`,{className:`inline`,children:`completed`})}),(0,v.jsx)(`td`,{children:`Payment verified in full (sender + exact amount + the method the customer picked).`}),(0,v.jsxs)(`td`,{children:[`Fulfil the order. The `,(0,v.jsx)(`code`,{className:`inline`,children:`payment.success`}),` webhook fires for this state only.`]})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`code`,{className:`inline`,children:`partial`})}),(0,v.jsx)(`td`,{children:`Part of the amount arrived; the session stays open on the remaining due.`}),(0,v.jsxs)(`td`,{children:[`Wait — do not fulfil yet. check-status reports `,(0,v.jsx)(`code`,{className:`inline`,children:`paidSoFar`}),` / `,(0,v.jsx)(`code`,{className:`inline`,children:`remainingDue`}),`.`]})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`code`,{className:`inline`,children:`review`})}),(0,v.jsxs)(`td`,{children:[(0,v.jsx)(`strong`,{children:`Manual review:`}),` auto-verification could not confirm the payment, so the customer submitted proof (TrxID / screenshot) for a human decision.`]}),(0,v.jsxs)(`td`,{children:[`Keep the order pending until the merchant approves or rejects it in `,(0,v.jsx)(`code`,{className:`inline`,children:`Dashboard → Pending Requests`}),`.`]})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`code`,{className:`inline`,children:`cancelled`})}),(0,v.jsx)(`td`,{children:`The customer cancelled, or the session was cancelled from the gateway screen. A cancelled session can never verify a payment.`}),(0,v.jsx)(`td`,{children:`Leave the order unpaid; start a fresh checkout if the customer returns.`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`code`,{className:`inline`,children:`expired`})}),(0,v.jsx)(`td`,{children:`The 15-minute window lapsed before a matching payment arrived. Expired sessions can never verify.`}),(0,v.jsx)(`td`,{children:`Start a fresh checkout — re-opening the same order id mints a new session.`})]})]})]})})]}),t===`webhooks`&&(0,v.jsxs)(`div`,{className:`fade-in`,children:[(0,v.jsx)(`h1`,{children:`Webhooks`}),(0,v.jsxs)(`p`,{children:[`When a payment completes, we POST one event — `,(0,v.jsx)(`code`,{className:`inline`,children:`payment.success`}),` — as JSON to the Webhook URL saved in `,(0,v.jsx)(`code`,{className:`inline`,children:`Dashboard → API & Webhooks`}),`. That is currently the only webhook event; part-payments and other states are visible through check-status and your console instead.`]}),(0,v.jsxs)(`p`,{children:[`Webhooks are a `,(0,v.jsx)(`strong`,{children:`paid-plan feature`}),` (Starter, Business and Enterprise). On the free plan no webhook is sent — confirm payments with check-status or the dashboard instead.`]}),(0,v.jsx)(`h2`,{children:`Event: payment.success`}),(0,v.jsx)(`pre`,{className:`codeblock`,children:`{
  "type": "payment.success",
  "data": {
    "orderId": "ORD-1042",
    "gatewayId": "SPP-261011-143022-K7QX2M",
    "amount": 850,
    "currency": "BDT",
    "method": "bkash",
    "trxId": "9HX72KD81P",
    "sender": "01712345678",
    "status": "completed"
  },
  "timestamp": "2026-10-11T08:52:41.000Z"
}`}),(0,v.jsxs)(`p`,{children:[(0,v.jsx)(`code`,{className:`inline`,children:`data.orderId`}),` is `,(0,v.jsx)(`em`,{children:`your`}),` order id from the session; `,(0,v.jsx)(`code`,{className:`inline`,children:`data.gatewayId`}),` is the gateway session id (`,(0,v.jsx)(`code`,{className:`inline`,children:`SPP-…`}),`). A completion fires the webhook exactly once per order.`]}),(0,v.jsx)(`h2`,{children:`Delivery & Retries`}),(0,v.jsxs)(`p`,{children:[`Each completion makes `,(0,v.jsx)(`strong`,{children:`one delivery attempt`}),` by default (8-second timeout). `,(0,v.jsx)(`strong`,{children:`Every attempt is recorded`}),` in `,(0,v.jsx)(`code`,{className:`inline`,children:`Dashboard → API & Webhooks → Delivery Log`}),` with the HTTP status we received, and a failed delivery can be re-sent any time with the log's `,(0,v.jsx)(`strong`,{children:`Resend`}),` button (it goes to the Webhook URL currently saved on your account). Sandbox completions are never delivered — the payload is recorded in the sandbox delivery log for inspection instead.`]}),(0,v.jsxs)(`div`,{className:`callout warn`,children:[(0,v.jsxs)(`h4`,{children:[(0,v.jsx)(a,{size:17}),` Verify before you deliver`]}),(0,v.jsx)(`p`,{children:`Webhook payloads are not signed, so treat the webhook as a trigger: confirm the final status with check-status or verify-payment before activating an order. Respond with HTTP 200 quickly; heavy processing should happen in your queue.`})]})]}),t===`downloads`&&(0,v.jsxs)(`div`,{className:`fade-in`,children:[(0,v.jsx)(`h1`,{children:`SDKs & Plugins`}),(0,v.jsx)(`p`,{children:`Drop-in integrations for the platforms Bangladeshi sellers actually use. Plugins and SDKs are in final packaging — download buttons activate as each package is published. Until then, the Hosted Checkout and the REST API above cover every integration.`}),(0,v.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:`18px`,marginTop:`22px`},children:h.map(e=>(0,v.jsxs)(`div`,{className:`cardx`,style:{padding:`22px`},children:[(0,v.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`11px`,marginBottom:`10px`},children:[(0,v.jsx)(`span`,{className:`feature-ic`,style:{background:`${e.color}1A`,color:e.color},children:(0,v.jsx)(d,{size:20})}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`strong`,{style:{display:`block`,fontSize:`16px`},children:e.name}),(0,v.jsxs)(`span`,{style:{fontSize:`12.5px`,color:`var(--slate-light)`},children:[e.platform,` · `,e.version,` · `,e.size]})]})]}),(0,v.jsx)(`p`,{style:{fontSize:`14px`,color:`var(--slate)`,lineHeight:1.6,marginBottom:`14px`},children:e.desc}),(0,v.jsx)(`pre`,{className:`codeblock`,style:{fontSize:`12.5px`,marginBottom:`14px`,whiteSpace:`pre-wrap`,wordBreak:`break-word`},children:e.snippet}),(0,v.jsxs)(`a`,{href:`#downloads`,onClick:e=>e.preventDefault(),className:`btnx btnx--ghost btnx--sm`,style:{textDecoration:`none`,opacity:.75},"aria-disabled":`true`,children:[(0,v.jsx)(c,{size:15}),` Coming soon`]})]},e.id))}),(0,v.jsxs)(`div`,{className:`callout`,style:{marginTop:`22px`},children:[(0,v.jsxs)(`h4`,{children:[(0,v.jsx)(u,{size:17}),` No plugin for your stack?`]}),(0,v.jsxs)(`p`,{children:[`The hosted checkout works with `,(0,v.jsx)(`em`,{children:`any`}),` website or even a Facebook page — see the Hosted Checkout section. And the REST API above covers every custom integration.`]})]})]}),t===`badge`&&(0,v.jsxs)(`div`,{className:`fade-in`,children:[(0,v.jsx)(`h1`,{children:`Trust Badge — Verified By Samir Pro Payments`}),(0,v.jsxs)(`p`,{children:[`Put the official Samir Pro Payments showcase banner on your own website: the `,(0,v.jsx)(`strong`,{children:`Verified By Samir Pro Payments`}),` pill above a slim banner carrying every payment brand your customers can pay with — the same badge our own stores show in their footer. One self-contained HTML block, pasted once, works on any website: no JavaScript, no API key, nothing to host.`]}),(0,v.jsx)(g,{}),(0,v.jsx)(`h2`,{children:`Good to Know`}),(0,v.jsxs)(`p`,{children:[`The badge adapts by itself: on wide screens the brands sit in one slim row; on phones the banner stays one slim row and the brands scroll automatically. The pill links to `,(0,v.jsx)(`code`,{className:`inline`,children:`samirpropayments.online`}),`, so a curious customer can confirm your store is verified by us. Showing the badge never changes how payments work — checkout, verification and webhooks are exactly as documented in the sections above.`]})]})]})]})};export{b as default};