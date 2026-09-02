# Cloudflare Stack Deployment Guide

Follow these steps to deploy your completely integrated application to the Cloudflare stack.

## Prerequisites

1. Ensure you have a Cloudflare account.
2. Install Wrangler CLI: `npm install -g wrangler`
3. Login to Cloudflare: `wrangler login`

## Step 1: Create the D1 SQL Database

Initialize the D1 database for the backend.

```bash
# Create the database
wrangler d1 create viemma-db

# The command above will output binding information. 
# Update your `wrangler.toml` (which we will create in Step 3) with the `database_id`.
```

Execute the schema migration:
```bash
# Execute the schema against your D1 instance
wrangler d1 execute viemma-db --file=./schema.sql --remote
```

## Step 2: Create the R2 Bucket

Initialize the R2 storage bucket for CV uploads.

```bash
# Create the bucket
wrangler r2 bucket create viemma-cvs
```

## Step 3: Configure the Edge Worker

Create a `wrangler.toml` file in the root of your project:

```toml
name = "viemma-api"
main = "worker.js"
compatibility_date = "2024-03-20"

[[d1_databases]]
binding = "DB"
database_name = "viemma-db"
database_id = "<YOUR_DATABASE_ID_FROM_STEP_1>"

[[r2_buckets]]
binding = "CV_BUCKET"
bucket_name = "viemma-cvs"

[vars]
JWT_SECRET = "generate-a-secure-random-string-here"
```

## Step 4: Deploy the Edge Worker (Backend)

Deploy your `worker.js` script to the edge:

```bash
wrangler deploy
```

## Step 5: Deploy the Frontend to Cloudflare Pages

Deploy the `index.html` file using Cloudflare Pages.

```bash
# Create a new Pages project (first time only)
wrangler pages project create viemma-frontend

# Deploy the current directory containing index.html
wrangler pages deploy . --project-name=viemma-frontend
```

## Troubleshooting

- **CORS Errors**: If your frontend and worker run on different subdomains, ensure the Worker sends `Access-Control-Allow-Origin: *` (which is already configured in `worker.js`).
- **D1 Execution Errors**: If `wrangler d1 execute` fails, ensure you are in the correct directory and `schema.sql` has no syntax errors.
- **R2 Errors**: If the CV upload fails, ensure you have attached the `r2_buckets` binding exactly as `CV_BUCKET` in your `wrangler.toml`.
