variable "cloudflare_api_token" {
  description = "Cloudflare API token with Zone:Read and DNS:Edit on the zone"
  type        = string
  sensitive   = true
}

variable "cloudflare_zone_id" {
  description = "Cloudflare zone ID for the domain"
  type        = string
  sensitive   = true
}

variable "domain" {
  description = "Apex domain served by Vercel"
  type        = string
  default     = "petri.zip"
}

variable "vercel_cname" {
  description = "Project specific CNAME target given by Vercel"
  type        = string
  default     = "9c2b17ecd456df27.vercel-dns-017.com"
}
