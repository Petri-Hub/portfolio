resource "cloudflare_dns_record" "apex" {
  zone_id = var.cloudflare_zone_id
  name    = var.domain
  type    = "CNAME"
  content = var.vercel_cname
  proxied = false
  ttl     = 60
  comment = "Apex pointing at Vercel"
}

resource "cloudflare_dns_record" "www" {
  zone_id = var.cloudflare_zone_id
  name    = "www.${var.domain}"
  type    = "CNAME"
  content = var.vercel_cname
  proxied = false
  ttl     = 60
  comment = "www pointing at Vercel"
}
