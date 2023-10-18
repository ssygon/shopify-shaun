
https://shopify.dev/docs/themes/tools/theme-kit/getting-started


1) Install Theme Access app & get the password sent to your email


2) List the themes
$ theme get --list -p=shptka_722b9f99d239152bdb00fa30185eff06 -s=ac9163-2.myshopify.com
NOTE: YOU MUST UPDATE latest theme version, coz even if you use the correct password, it can still say:
[API] Invalid API key or access token (unrecognized login or wrong password)


3) Pull the latest theme code to your local
cd ~/Sites/shopify-shaun
$ theme get --password=shptka_722b9f99d239152bdb00fa30185eff06 --store=ac9163-2.myshopify.com --themeid=136865579225
